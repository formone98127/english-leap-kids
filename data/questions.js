/* Curated from Longman English Leap 2A themes — cleaned for ages 5–7 */
window.LEAP_QUESTIONS = {
  places: {
    title: "School Places",
    emoji: "🏫",
    color: "#2BB3FF",
    items: [
      { type: "mc", prompt: "Where can you read books?", choices: ["library", "kitchen", "toilet"], answer: "library", emoji: "📚" },
      { type: "mc", prompt: "Where can you play and run?", choices: ["playground", "library", "office"], answer: "playground", emoji: "🛝" },
      { type: "mc", prompt: "Where can you sing songs?", choices: ["music room", "car park", "corridor"], answer: "music room", emoji: "🎵" },
      { type: "mc", prompt: "Where can you draw pictures?", choices: ["art room", "canteen", "lift"], answer: "art room", emoji: "🎨" },
      { type: "blank", prompt: "The library is ___ the first floor.", choices: ["on", "in", "at"], answer: "on", emoji: "1️⃣" },
      { type: "blank", prompt: "Coco is ___ the computer room.", choices: ["in", "on", "under"], answer: "in", emoji: "💻" },
      { type: "blank", prompt: "There ___ a big playground.", choices: ["is", "are", "am"], answer: "is", emoji: "🌳" },
      { type: "blank", prompt: "There ___ two slides.", choices: ["are", "is", "am"], answer: "are", emoji: "🛝" }
    ]
  },
  rules: {
    title: "Be Good!",
    emoji: "⭐",
    color: "#FF6B4A",
    items: [
      { type: "mc", prompt: "What do we say for this rule?", choices: ["Keep quiet", "Run fast", "Shout loud"], answer: "Keep quiet", emoji: "🤫" },
      { type: "blank", prompt: "___ litter.", choices: ["Don't", "Please", "Let's"], answer: "Don't", emoji: "🗑️" },
      { type: "blank", prompt: "Keep ___ the grass.", choices: ["off", "on", "in"], answer: "off", emoji: "🌱" },
      { type: "blank", prompt: "Wait ___ your turn.", choices: ["for", "to", "at"], answer: "for", emoji: "⏳" },
      { type: "blank", prompt: "Line ___, please.", choices: ["up", "down", "off"], answer: "up", emoji: "🧍" },
      { type: "mc", prompt: "In the library we must…", choices: ["keep quiet", "shout", "run"], answer: "keep quiet", emoji: "📖" },
      { type: "blank", prompt: "You ___ wait for your turn.", choices: ["must", "mustn't", "can't"], answer: "must", emoji: "✅" },
      { type: "blank", prompt: "You ___ run in the corridor.", choices: ["mustn't", "must", "can"], answer: "mustn't", emoji: "🚫" }
    ]
  },
  food: {
    title: "Yummy Food",
    emoji: "🍎",
    color: "#3DCC7A",
    items: [
      { type: "match", prompt: "Tap the matching food!", pairs: [
        { word: "apple", emoji: "🍎" },
        { word: "banana", emoji: "🍌" },
        { word: "mango", emoji: "🥭" },
        { word: "peach", emoji: "🍑" }
      ]},
      { type: "blank", prompt: "Do you want ___ juice?", choices: ["some", "a", "an"], answer: "some", emoji: "🧃" },
      { type: "blank", prompt: "I like ___.", choices: ["apples", "apple", "an apple"], answer: "apples", emoji: "❤️" },
      { type: "mc", prompt: "Which one is a fruit?", choices: ["strawberry", "pencil", "chair"], answer: "strawberry", emoji: "🍓" },
      { type: "blank", prompt: "There are some ___.", choices: ["cherries", "cherry", "a cherry"], answer: "cherries", emoji: "🍒" },
      { type: "mc", prompt: "Do you want some sandwiches?", choices: ["Yes, please.", "I am a cat.", "It is blue."], answer: "Yes, please.", emoji: "🥪" },
      { type: "blank", prompt: "I can see ___ bee.", choices: ["a", "an", "some"], answer: "a", emoji: "🐝" },
      { type: "blank", prompt: "I have ___ eraser.", choices: ["an", "a", "some"], answer: "an", emoji: "🧹" }
    ]
  },
  feelings: {
    title: "How Do You Feel?",
    emoji: "😊",
    color: "#FFB020",
    items: [
      { type: "mc", prompt: "I want to eat. I am…", choices: ["hungry", "cold", "bored"], answer: "hungry", emoji: "😋" },
      { type: "mc", prompt: "I want a drink. I am…", choices: ["thirsty", "tired", "sad"], answer: "thirsty", emoji: "🥤" },
      { type: "mc", prompt: "I want to sleep. I am…", choices: ["tired", "hungry", "hot"], answer: "tired", emoji: "😴" },
      { type: "mc", prompt: "I have nothing to do. I am…", choices: ["bored", "full", "wet"], answer: "bored", emoji: "😐" },
      { type: "blank", prompt: "Are you hungry? — Yes, I ___.", choices: ["am", "is", "are"], answer: "am", emoji: "💬" },
      { type: "mc", prompt: "It is sunny and warm. I feel…", choices: ["hot", "cold", "wet"], answer: "hot", emoji: "☀️" },
      { type: "match", prompt: "Match the feelings!", pairs: [
        { word: "happy", emoji: "😄" },
        { word: "sad", emoji: "😢" },
        { word: "angry", emoji: "😠" },
        { word: "scared", emoji: "😨" }
      ]}
    ]
  },
  travel: {
    title: "Getting Around",
    emoji: "🚌",
    color: "#1FA8A0",
    items: [
      { type: "mc", prompt: "How do you come to school?", choices: ["by bus", "by banana", "by book"], answer: "by bus", emoji: "🚌" },
      { type: "blank", prompt: "I come to school ___ MTR.", choices: ["by", "on", "in"], answer: "by", emoji: "🚇" },
      { type: "blank", prompt: "I live ___ Tuen Mun.", choices: ["in", "on", "by"], answer: "in", emoji: "🏠" },
      { type: "mc", prompt: "I live near school. I come…", choices: ["on foot", "by plane", "by ship"], answer: "on foot", emoji: "🚶" },
      { type: "blank", prompt: "___ do you live?", choices: ["Where", "Who", "What"], answer: "Where", emoji: "📍" },
      { type: "blank", prompt: "___ do you come to school?", choices: ["How", "Where", "What"], answer: "How", emoji: "❓" },
      { type: "match", prompt: "Match how we travel!", pairs: [
        { word: "bus", emoji: "🚌" },
        { word: "train", emoji: "🚆" },
        { word: "bike", emoji: "🚲" },
        { word: "walk", emoji: "👟" }
      ]}
    ]
  }
};
