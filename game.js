(() => {
  const STORAGE_KEY = "english-leap-kids-ch123-v1";
  const curated = window.LEAP_QUESTIONS || {};
  const imported = window.LEAP_ALL_QUESTIONS || { worlds: {}, _meta: {} };

  const worlds = {
    ...(imported.worlds || {}),
    ...Object.fromEntries(
      Object.entries(curated).map(([k, w]) => [
        `easy_${k}`,
        { ...w, title: `⭐ ${w.title}`, book: "easy", chapter: w.chapter },
      ])
    ),
  };

  const $ = (id) => document.getElementById(id);
  const screens = {
    home: $("screen-home"),
    play: $("screen-play"),
    result: $("screen-result"),
  };

  let state = {
    worldKey: null,
    queue: [],
    index: 0,
    stars: 0,
    streak: 0,
    bestStreak: 0,
    locked: false,
    matchSelected: null,
    matchPairsLeft: 0,
    filter: "all",
  };

  let audioCtx = null;

  function loadSave() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  }

  function saveStats() {
    const prev = loadSave();
    const total = (prev.totalStars || 0) + state.stars;
    const best = Math.max(prev.bestStreak || 0, state.bestStreak, state.streak);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ totalStars: total, bestStreak: best }));
    $("total-stars").textContent = `⭐ ${total}`;
    $("best-streak").textContent = `🔥 ${best}`;
  }

  function showScreen(name) {
    Object.values(screens).forEach((el) => el.classList.remove("active"));
    screens[name].classList.add("active");
  }

  function tone(freq, dur = 0.12, type = "sine", gain = 0.04) {
    try {
      if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const t0 = audioCtx.currentTime;
      const o = audioCtx.createOscillator();
      const g = audioCtx.createGain();
      o.type = type;
      o.frequency.value = freq;
      g.gain.setValueAtTime(gain, t0);
      g.gain.exponentialRampToValueAtTime(0.001, t0 + dur);
      o.connect(g);
      g.connect(audioCtx.destination);
      o.start(t0);
      o.stop(t0 + dur);
    } catch {
      /* ignore */
    }
  }

  function celebrate() {
    tone(523, 0.1);
    setTimeout(() => tone(659, 0.1), 90);
    setTimeout(() => tone(784, 0.16), 180);
    const box = $("confetti");
    const colors = ["#FFD24A", "#FF6B4A", "#3DCC7A", "#2BB3FF", "#FFF8E8"];
    for (let i = 0; i < 24; i++) {
      const p = document.createElement("i");
      p.className = "confetti-piece";
      p.style.left = `${Math.random() * 100}%`;
      p.style.background = colors[i % colors.length];
      p.style.animationDuration = `${1.1 + Math.random() * 0.7}s`;
      box.appendChild(p);
      setTimeout(() => p.remove(), 1800);
    }
  }

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function isPlayable(q) {
    if (!q || !q.prompt) return false;
    if (q.type === "match") return Array.isArray(q.pairs) && q.pairs.length >= 2;
    if (q.type === "mc" || q.type === "blank") {
      return Array.isArray(q.choices) && q.choices.length >= 2 && !!q.answer;
    }
    return false;
  }

  function filteredWorldEntries() {
    const order = ["exam", "ch1", "ch2", "ch3", "revision", "easy_ch1_easy", "easy_ch2_easy", "easy_ch3_easy"];
    const entries = order
      .filter((k) => worlds[k])
      .map((k) => [k, worlds[k]]);
    if (state.filter === "ch1") return entries.filter(([, w]) => w.chapter === 1);
    if (state.filter === "ch2") return entries.filter(([, w]) => w.chapter === 2);
    if (state.filter === "ch3") return entries.filter(([, w]) => w.chapter === 3);
    if (state.filter === "easy") return entries.filter(([, w]) => w.book === "easy");
    if (state.filter === "exam") return entries.filter(([k]) => k === "exam" || k === "revision");
    return entries;
  }

  function renderHome() {
    const save = loadSave();
    $("total-stars").textContent = `⭐ ${save.totalStars || 0}`;
    $("best-streak").textContent = `🔥 ${save.bestStreak || 0}`;
    const countEl = $("question-count");
    if (countEl) {
      const n = (worlds.exam?.items || []).filter(isPlayable).length;
      countEl.textContent = `Exam focus: Leap 2A Chapters 1–3 · ${n} questions`;
    }

    const grid = $("world-grid");
    grid.innerHTML = "";
    filteredWorldEntries().forEach(([key, world]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "world-btn";
      btn.style.background = `linear-gradient(135deg, ${world.color}, ${shade(world.color, -18)})`;
      const n = world.items.filter(isPlayable).length;
      btn.innerHTML = `
        <span class="emoji">${world.emoji}</span>
        <span>
          ${escapeHtml(world.title)}
          <small>${n} playable</small>
        </span>`;
      btn.addEventListener("click", () => startWorld(key));
      grid.appendChild(btn);
    });
  }

  function shade(hex, percent) {
    const n = String(hex || "#2BB3FF").replace("#", "");
    const num = parseInt(n.length === 6 ? n : "2BB3FF", 16);
    let r = (num >> 16) + percent;
    let g = ((num >> 8) & 0xff) + percent;
    let b = (num & 0xff) + percent;
    r = Math.max(0, Math.min(255, r));
    g = Math.max(0, Math.min(255, g));
    b = Math.max(0, Math.min(255, b));
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
  }

  function startWorld(key) {
    const world = worlds[key];
    if (!world || !world.items.length) return;
    const playable = world.items.filter(isPlayable);
    if (!playable.length) {
      alert("This world has no playable questions yet.");
      return;
    }
    state.worldKey = key;
    const n = key === "exam" ? Math.min(12, playable.length) : playable.length;
    state.queue = shuffle(playable).slice(0, n);
    state.index = 0;
    state.stars = 0;
    state.streak = 0;
    state.locked = false;
    $("play-world").textContent = `${world.emoji} ${world.title}`;
    $("play-stars").textContent = "0";
    $("feedback").textContent = "";
    showScreen("play");
    renderQuestion();
  }

  function updateProgress() {
    const pct = state.queue.length ? (state.index / state.queue.length) * 100 : 0;
    $("progress-fill").style.width = `${pct}%`;
  }

  function nextQuestion(delay = 700) {
    setTimeout(() => {
      state.index += 1;
      renderQuestion();
    }, delay);
  }

  function renderQuestion() {
    state.locked = false;
    state.matchSelected = null;
    $("feedback").textContent = "";
    $("feedback").className = "feedback";
    updateProgress();

    if (state.index >= state.queue.length) {
      finishWorld();
      return;
    }

    const q = state.queue[state.index];
    const stage = $("question-stage");

    if (q.type === "match" && q.pairs) {
      renderMatch(stage, q);
      return;
    }

    const promptHtml =
      q.type === "blank" || (q.prompt || "").includes("___")
        ? escapeHtml(q.prompt).replace("___", '<span class="blank-mark">?</span>')
        : escapeHtml(q.prompt);

    const choices = shuffle(q.choices || []);
    if (choices.length < 2 || !q.answer) {
      state.index += 1;
      renderQuestion();
      return;
    }

    stage.innerHTML = `
      <div class="q-emoji">${q.emoji || "✨"}</div>
      <p class="q-prompt">${promptHtml}</p>
      <div class="choices" role="group" aria-label="Answers">
        ${choices
          .map(
            (c) =>
              `<button type="button" class="choice" data-answer="${escapeAttr(c)}">${escapeHtml(c)}</button>`
          )
          .join("")}
      </div>`;

    stage.querySelectorAll(".choice").forEach((btn) => {
      btn.addEventListener("click", () => onChoice(btn, q));
    });
  }

  function renderMatch(stage, q) {
    const cards = shuffle([
      ...q.pairs.map((p) => ({ kind: "emoji", value: p.word, label: p.emoji })),
      ...q.pairs.map((p) => ({ kind: "word", value: p.word, label: p.word })),
    ]);
    state.matchPairsLeft = q.pairs.length;
    stage.innerHTML = `
      <div class="q-emoji">🔗</div>
      <p class="q-prompt">${escapeHtml(q.prompt)}</p>
      <div class="match-board">
        ${cards
          .map(
            (c, i) => `
          <button type="button" class="match-card" data-i="${i}" data-value="${escapeAttr(c.value)}" data-kind="${c.kind}">
            ${c.kind === "emoji" ? `<span class="pic">${c.label}</span>` : escapeHtml(c.label)}
          </button>`
          )
          .join("")}
      </div>`;
    stage.querySelectorAll(".match-card").forEach((btn) => {
      btn.addEventListener("click", () => onMatchTap(btn));
    });
  }

  function onMatchTap(btn) {
    if (state.locked || btn.classList.contains("matched")) return;
    if (state.matchSelected === btn) {
      btn.classList.remove("selected");
      state.matchSelected = null;
      return;
    }
    if (!state.matchSelected) {
      state.matchSelected = btn;
      btn.classList.add("selected");
      tone(440, 0.08);
      return;
    }
    const a = state.matchSelected;
    const ok = a.dataset.value === btn.dataset.value && a.dataset.kind !== btn.dataset.kind;
    if (ok) {
      a.classList.add("matched");
      btn.classList.add("matched");
      a.classList.remove("selected");
      state.matchSelected = null;
      state.matchPairsLeft -= 1;
      tone(660, 0.1, "triangle");
      if (state.matchPairsLeft <= 0) {
        state.locked = true;
        onCorrect();
        nextQuestion(700);
      }
    } else {
      a.classList.remove("selected");
      state.matchSelected = null;
      btn.classList.add("wrong");
      setTimeout(() => btn.classList.remove("wrong"), 350);
      onWrong(false);
    }
  }

  function onChoice(btn, q) {
    if (state.locked) return;
    state.locked = true;
    const picked = btn.dataset.answer;
    const buttons = [...btn.parentElement.querySelectorAll(".choice")];

    if (picked === q.answer) {
      btn.classList.add("correct");
      onCorrect();
      nextQuestion(750);
    } else {
      btn.classList.add("wrong");
      buttons.forEach((b) => {
        if (b.dataset.answer === q.answer) b.classList.add("correct");
        b.disabled = true;
      });
      onWrong(true);
      nextQuestion(1100);
    }
  }

  function onCorrect() {
    state.stars += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    $("play-stars").textContent = String(state.stars);
    $("feedback").textContent = pick(["Yes!", "Great!", "Awesome!", "Super leap!", "You did it!"]);
    $("feedback").className = "feedback good";
    celebrate();
  }

  function onWrong(showMsg) {
    state.streak = 0;
    tone(180, 0.15, "square", 0.03);
    if (showMsg) {
      $("feedback").textContent = pick(["Try the next one!", "Almost!", "Keep going!"]);
      $("feedback").className = "feedback bad";
    }
  }

  function finishWorld() {
    $("progress-fill").style.width = "100%";
    const total = state.queue.length;
    $("result-summary").textContent =
      `You got ${state.stars} of ${total} stars in ${worlds[state.worldKey].title}!`;
    $("result-stars").textContent = "⭐".repeat(Math.max(1, state.stars));
    saveStats();
    celebrate();
    showScreen("result");
  }

  function pick(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function escapeHtml(s) {
    return String(s ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  function escapeAttr(s) {
    return escapeHtml(s).replaceAll("'", "&#39;");
  }

  $("btn-home").addEventListener("click", () => {
    showScreen("home");
    renderHome();
  });
  $("btn-worlds").addEventListener("click", () => {
    showScreen("home");
    renderHome();
  });
  $("btn-again").addEventListener("click", () => {
    if (state.worldKey) startWorld(state.worldKey);
  });

  document.querySelectorAll("[data-filter]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.filter = btn.getAttribute("data-filter");
      document.querySelectorAll("[data-filter]").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderHome();
    });
  });

  renderHome();
})();
