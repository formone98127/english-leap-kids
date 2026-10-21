/* Playable Leap 2A questions — every item has choices + answer */
window.LEAP_ALL_QUESTIONS = {
  "_meta": {
    "total": 180,
    "note": "Playable MC/blank/match covering Workbook + Grammar 2A units"
  },
  "worlds": {
    "all": {
      "title": "All Questions Mix",
      "emoji": "🎲",
      "color": "#0B3D6E",
      "book": "all",
      "unit": 0,
      "items": []
    },
    "workbook_u1": {
      "title": "Workbook: Places at school",
      "emoji": "🏫",
      "color": "#2BB3FF",
      "book": "workbook",
      "unit": 1,
      "items": [
        { "type": "mc", "prompt": "Where can you read books?", "choices": ["library", "kitchen", "bus stop"], "answer": "library", "emoji": "📚" },
        { "type": "mc", "prompt": "Where can you play and run?", "choices": ["playground", "office", "toilet"], "answer": "playground", "emoji": "🛝" },
        { "type": "mc", "prompt": "Where can you sing?", "choices": ["music room", "car park", "corridor"], "answer": "music room", "emoji": "🎵" },
        { "type": "mc", "prompt": "Where can you draw?", "choices": ["art room", "canteen", "lift"], "answer": "art room", "emoji": "🎨" },
        { "type": "blank", "prompt": "The library is ___ the first floor.", "choices": ["on", "in", "under"], "answer": "on", "emoji": "1️⃣" },
        { "type": "blank", "prompt": "Coco is ___ the computer room.", "choices": ["in", "on", "at"], "answer": "in", "emoji": "💻" },
        { "type": "blank", "prompt": "There ___ a big playground.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "🌳" },
        { "type": "blank", "prompt": "There ___ two slides.", "choices": ["are", "is", "am"], "answer": "are", "emoji": "🛝" },
        { "type": "mc", "prompt": "Is there a library?", "choices": ["Yes, there is.", "Yes, I am.", "No, I can't."], "answer": "Yes, there is.", "emoji": "❓" },
        { "type": "mc", "prompt": "Is there a lift? — No, ___", "choices": ["there isn't", "I am not", "it can't"], "answer": "there isn't", "emoji": "🛗" }
      ]
    },
    "workbook_u2": {
      "title": "Workbook: Please be good",
      "emoji": "⭐",
      "color": "#FF6B4A",
      "book": "workbook",
      "unit": 2,
      "items": [
        { "type": "blank", "prompt": "___ litter.", "choices": ["Don't", "Please", "Let's"], "answer": "Don't", "emoji": "🗑️" },
        { "type": "blank", "prompt": "Keep ___ the grass.", "choices": ["off", "on", "in"], "answer": "off", "emoji": "🌱" },
        { "type": "blank", "prompt": "Wait ___ your turn.", "choices": ["for", "to", "at"], "answer": "for", "emoji": "⏳" },
        { "type": "blank", "prompt": "Line ___, please.", "choices": ["up", "down", "off"], "answer": "up", "emoji": "🧍" },
        { "type": "blank", "prompt": "Keep ___.", "choices": ["quiet", "noisy", "dirty"], "answer": "quiet", "emoji": "🤫" },
        { "type": "blank", "prompt": "You ___ wait for your turn.", "choices": ["must", "mustn't", "can't"], "answer": "must", "emoji": "✅" },
        { "type": "blank", "prompt": "You ___ run in the corridor.", "choices": ["mustn't", "must", "can"], "answer": "mustn't", "emoji": "🚫" },
        { "type": "mc", "prompt": "In the library we must…", "choices": ["keep quiet", "shout", "run"], "answer": "keep quiet", "emoji": "📖" },
        { "type": "mc", "prompt": "What does this mean? 🚫 spit", "choices": ["Don't spit", "Please spit", "Let's spit"], "answer": "Don't spit", "emoji": "🚫" },
        { "type": "blank", "prompt": "Sit ___.", "choices": ["still", "away", "off"], "answer": "still", "emoji": "🪑" }
      ]
    },
    "workbook_u3": {
      "title": "Workbook: Sharing food",
      "emoji": "🍎",
      "color": "#3DCC7A",
      "book": "workbook",
      "unit": 3,
      "items": [
        { "type": "match", "prompt": "Match the food!", "pairs": [
          { "word": "apple", "emoji": "🍎" }, { "word": "banana", "emoji": "🍌" },
          { "word": "mango", "emoji": "🥭" }, { "word": "peach", "emoji": "🍑" }
        ], "emoji": "🍽️" },
        { "type": "blank", "prompt": "Do you want ___ juice?", "choices": ["some", "a", "an"], "answer": "some", "emoji": "🧃" },
        { "type": "blank", "prompt": "I like ___.", "choices": ["apples", "apple", "an apples"], "answer": "apples", "emoji": "❤️" },
        { "type": "blank", "prompt": "There are some ___.", "choices": ["cherries", "cherry", "a cherry"], "answer": "cherries", "emoji": "🍒" },
        { "type": "mc", "prompt": "Do you want some sandwiches?", "choices": ["Yes, please.", "I am blue.", "It is a dog."], "answer": "Yes, please.", "emoji": "🥪" },
        { "type": "mc", "prompt": "No, thank you. I don't ___ sandwiches.", "choices": ["like", "live", "line"], "answer": "like", "emoji": "🙅" },
        { "type": "blank", "prompt": "I can see ___ bee.", "choices": ["a", "an", "some"], "answer": "a", "emoji": "🐝" },
        { "type": "blank", "prompt": "I have ___ eraser.", "choices": ["an", "a", "some"], "answer": "an", "emoji": "🧹" },
        { "type": "mc", "prompt": "Which one is a fruit?", "choices": ["strawberry", "pencil", "chair"], "answer": "strawberry", "emoji": "🍓" },
        { "type": "blank", "prompt": "one tomato → two ___", "choices": ["tomatoes", "tomatos", "tomato"], "answer": "tomatoes", "emoji": "🍅" }
      ]
    },
    "workbook_u4": {
      "title": "Workbook: Revision / Mixed",
      "emoji": "🧩",
      "color": "#FFB020",
      "book": "workbook",
      "unit": 4,
      "items": [
        { "type": "blank", "prompt": "Don't run ___ in the cinema.", "choices": ["around", "off", "up"], "answer": "around", "emoji": "🎬" },
        { "type": "blank", "prompt": "Keep ___ at the bus stop.", "choices": ["quiet", "dirty", "off"], "answer": "quiet", "emoji": "🚌" },
        { "type": "mc", "prompt": "Put the sentences in order. What comes first?", "choices": ["Is there a playground here?", "Let's go!", "Sorry."], "answer": "Is there a playground here?", "emoji": "1️⃣" },
        { "type": "blank", "prompt": "We must keep ___ the grass.", "choices": ["off", "on", "in"], "answer": "off", "emoji": "🌱" },
        { "type": "mc", "prompt": "Do you want some peaches?", "choices": ["Yes, please. I like peaches.", "I am a school.", "It can fly."], "answer": "Yes, please. I like peaches.", "emoji": "🍑" },
        { "type": "blank", "prompt": "There ___ a garden near here.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "🏡" },
        { "type": "blank", "prompt": "___ sit here. Look at the sign!", "choices": ["Don't", "Must", "Some"], "answer": "Don't", "emoji": "🪧" },
        { "type": "mc", "prompt": "What food does the boy like?", "choices": ["banana cakes", "sandwiches", "rubbish"], "answer": "banana cakes", "emoji": "🍌" }
      ]
    },
    "workbook_u5": {
      "title": "Workbook: Feelings and caring",
      "emoji": "😊",
      "color": "#E85D75",
      "book": "workbook",
      "unit": 5,
      "items": [
        { "type": "mc", "prompt": "I want to eat. I am…", "choices": ["hungry", "cold", "bored"], "answer": "hungry", "emoji": "😋" },
        { "type": "mc", "prompt": "I want a drink. I am…", "choices": ["thirsty", "tired", "sad"], "answer": "thirsty", "emoji": "🥤" },
        { "type": "mc", "prompt": "I want to sleep. I am…", "choices": ["tired", "hungry", "hot"], "answer": "tired", "emoji": "😴" },
        { "type": "mc", "prompt": "I have nothing to do. I am…", "choices": ["bored", "full", "wet"], "answer": "bored", "emoji": "😐" },
        { "type": "blank", "prompt": "Are you hungry? — Yes, I ___.", "choices": ["am", "is", "are"], "answer": "am", "emoji": "💬" },
        { "type": "mc", "prompt": "Are you thirsty? — No, I'm ___.", "choices": ["fine", "a book", "the floor"], "answer": "fine", "emoji": "👍" },
        { "type": "match", "prompt": "Match the feelings!", "pairs": [
          { "word": "happy", "emoji": "😄" }, { "word": "sad", "emoji": "😢" },
          { "word": "angry", "emoji": "😠" }, { "word": "scared", "emoji": "😨" }
        ], "emoji": "💝" },
        { "type": "mc", "prompt": "Do you want some juice?", "choices": ["Yes, please.", "I live here.", "It is Monday."], "answer": "Yes, please.", "emoji": "🧃" },
        { "type": "blank", "prompt": "I'm full. I ___ hungry.", "choices": ["am not", "is not", "are not"], "answer": "am not", "emoji": "🍽️" }
      ]
    },
    "workbook_u6": {
      "title": "Workbook: Getting around",
      "emoji": "🚌",
      "color": "#1FA8A0",
      "book": "workbook",
      "unit": 6,
      "items": [
        { "type": "mc", "prompt": "How do you come to school?", "choices": ["by bus", "by banana", "by book"], "answer": "by bus", "emoji": "🚌" },
        { "type": "blank", "prompt": "I come to school ___ MTR.", "choices": ["by", "on", "in"], "answer": "by", "emoji": "🚇" },
        { "type": "blank", "prompt": "I live ___ Tuen Mun.", "choices": ["in", "on", "by"], "answer": "in", "emoji": "🏠" },
        { "type": "mc", "prompt": "I live near school. I come…", "choices": ["on foot", "by plane", "by ship"], "answer": "on foot", "emoji": "🚶" },
        { "type": "blank", "prompt": "___ do you live?", "choices": ["Where", "Who", "What"], "answer": "Where", "emoji": "📍" },
        { "type": "blank", "prompt": "___ do you come to school?", "choices": ["How", "Where", "What"], "answer": "How", "emoji": "❓" },
        { "type": "match", "prompt": "Match how we travel!", "pairs": [
          { "word": "bus", "emoji": "🚌" }, { "word": "train", "emoji": "🚆" },
          { "word": "bike", "emoji": "🚲" }, { "word": "walk", "emoji": "👟" }
        ], "emoji": "🗺️" },
        { "type": "mc", "prompt": "Tuen Mun is in the…", "choices": ["New Territories", "kitchen", "music room"], "answer": "New Territories", "emoji": "🗺️" },
        { "type": "blank", "prompt": "I come to school ___ foot.", "choices": ["on", "by", "in"], "answer": "on", "emoji": "👟" }
      ]
    },
    "workbook_u7": {
      "title": "Workbook: Jobs and family",
      "emoji": "👨‍👩‍👧",
      "color": "#4C8BF5",
      "book": "workbook",
      "unit": 7,
      "items": [
        { "type": "mc", "prompt": "She looks after us at home. She is a…", "choices": ["mum / housewife", "bus", "library"], "answer": "mum / housewife", "emoji": "👩" },
        { "type": "mc", "prompt": "He works in a hospital. He is a…", "choices": ["doctor", "driver", "teacher"], "answer": "doctor", "emoji": "👨‍⚕️" },
        { "type": "mc", "prompt": "She teaches children. She is a…", "choices": ["teacher", "pilot", "chef"], "answer": "teacher", "emoji": "👩‍🏫" },
        { "type": "mc", "prompt": "He drives a bus. He is a…", "choices": ["bus driver", "nurse", "singer"], "answer": "bus driver", "emoji": "🚌" },
        { "type": "blank", "prompt": "This is ___ father.", "choices": ["my", "I", "me"], "answer": "my", "emoji": "👨" },
        { "type": "blank", "prompt": "She ___ after us at home.", "choices": ["looks", "look", "looking"], "answer": "looks", "emoji": "🏠" },
        { "type": "mc", "prompt": "Do you have a brother?", "choices": ["Yes, I do. / No, I don't.", "Yes, there is.", "I am hungry."], "answer": "Yes, I do. / No, I don't.", "emoji": "👦" },
        { "type": "blank", "prompt": "He works ___ a hospital.", "choices": ["in", "on", "by"], "answer": "in", "emoji": "🏥" }
      ]
    },
    "workbook_u8": {
      "title": "Workbook: Riddles and conversations",
      "emoji": "🦊",
      "color": "#F08A24",
      "book": "workbook",
      "unit": 8,
      "items": [
        { "type": "mc", "prompt": "I have four legs. I say meow. I am a…", "choices": ["cat", "bird", "fish"], "answer": "cat", "emoji": "🐱" },
        { "type": "mc", "prompt": "I can fly. I have wings. I am a…", "choices": ["bird", "dog", "frog"], "answer": "bird", "emoji": "🐦" },
        { "type": "blank", "prompt": "___ do you live?", "choices": ["Where", "What", "Who"], "answer": "Where", "emoji": "🏠" },
        { "type": "blank", "prompt": "___ are you?", "choices": ["How", "Where", "What"], "answer": "How", "emoji": "🙂" },
        { "type": "mc", "prompt": "Circle the correct word: I live in / on Hong Kong.", "choices": ["in", "on", "by"], "answer": "in", "emoji": "⭕" },
        { "type": "mc", "prompt": "I come to school by / on bus.", "choices": ["by", "on", "in"], "answer": "by", "emoji": "🚌" },
        { "type": "blank", "prompt": "She ___ a teacher.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "👩‍🏫" },
        { "type": "mc", "prompt": "What do you say next? — Nice to meet you!", "choices": ["Nice to meet you too!", "I am a banana.", "Don't litter."], "answer": "Nice to meet you too!", "emoji": "🤝" }
      ]
    },
    "grammar_u1": {
      "title": "Grammar: Prepositions / There is",
      "emoji": "📗",
      "color": "#2D9CDB",
      "book": "grammar",
      "unit": 1,
      "items": [
        { "type": "blank", "prompt": "Jeff is ___ the computer room.", "choices": ["in", "on", "at"], "answer": "in", "emoji": "💻" },
        { "type": "blank", "prompt": "Coco is ___ the second floor.", "choices": ["on", "in", "under"], "answer": "on", "emoji": "2️⃣" },
        { "type": "blank", "prompt": "Lisa is ___ the library.", "choices": ["in", "on", "by"], "answer": "in", "emoji": "📚" },
        { "type": "blank", "prompt": "The library is ___ the first floor.", "choices": ["on", "in", "at"], "answer": "on", "emoji": "1️⃣" },
        { "type": "blank", "prompt": "There ___ a big garden.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "🌼" },
        { "type": "blank", "prompt": "There ___ two slides.", "choices": ["are", "is", "am"], "answer": "are", "emoji": "🛝" },
        { "type": "mc", "prompt": "Is there a swing?", "choices": ["No, there isn't.", "No, I don't.", "Yes, I am."], "answer": "No, there isn't.", "emoji": "❓" },
        { "type": "mc", "prompt": "Is there a slide?", "choices": ["Yes, there is.", "Yes, I can.", "No, I'm not."], "answer": "Yes, there is.", "emoji": "✅" },
        { "type": "blank", "prompt": "It's ___ the fourth floor.", "choices": ["on", "in", "at"], "answer": "on", "emoji": "4️⃣" },
        { "type": "blank", "prompt": "There is ___ apple tree.", "choices": ["an", "a", "some"], "answer": "an", "emoji": "🌳" }
      ]
    },
    "grammar_u2": {
      "title": "Grammar: Instructions / Modals",
      "emoji": "📢",
      "color": "#27AE60",
      "book": "grammar",
      "unit": 2,
      "items": [
        { "type": "blank", "prompt": "Stand ___, Sue.", "choices": ["up", "off", "for"], "answer": "up", "emoji": "🧍" },
        { "type": "blank", "prompt": "Wait ___ your turn.", "choices": ["for", "off", "up"], "answer": "for", "emoji": "⏳" },
        { "type": "blank", "prompt": "Look ___ the blackboard.", "choices": ["at", "for", "off"], "answer": "at", "emoji": "📋" },
        { "type": "blank", "prompt": "Keep ___ the grass.", "choices": ["off", "up", "for"], "answer": "off", "emoji": "🌱" },
        { "type": "blank", "prompt": "Don't run ___ in the classroom.", "choices": ["around", "off", "up"], "answer": "around", "emoji": "🏃" },
        { "type": "blank", "prompt": "Take ___ your shoes.", "choices": ["off", "up", "at"], "answer": "off", "emoji": "👟" },
        { "type": "blank", "prompt": "You ___ wait for your turn.", "choices": ["must", "mustn't", "can't"], "answer": "must", "emoji": "✅" },
        { "type": "blank", "prompt": "You ___ push.", "choices": ["mustn't", "must", "can"], "answer": "mustn't", "emoji": "🚫" },
        { "type": "blank", "prompt": "You ___ play here.", "choices": ["can", "mustn't", "don't"], "answer": "can", "emoji": "🎮" },
        { "type": "blank", "prompt": "You ___ walk on the grass.", "choices": ["can't", "must", "some"], "answer": "can't", "emoji": "🚫" }
      ]
    },
    "grammar_u3": {
      "title": "Grammar: Nouns / like / a-an-some",
      "emoji": "🔤",
      "color": "#D35400",
      "book": "grammar",
      "unit": 3,
      "items": [
        { "type": "blank", "prompt": "one apple → two ___", "choices": ["apples", "apple", "applen"], "answer": "apples", "emoji": "🍎" },
        { "type": "blank", "prompt": "one mango → two ___", "choices": ["mangoes", "mangos", "mango"], "answer": "mangoes", "emoji": "🥭" },
        { "type": "blank", "prompt": "one story → two ___", "choices": ["stories", "storys", "story"], "answer": "stories", "emoji": "📖" },
        { "type": "blank", "prompt": "one bench → two ___", "choices": ["benches", "benchs", "bench"], "answer": "benches", "emoji": "🪑" },
        { "type": "blank", "prompt": "I like this ___. It is big.", "choices": ["dog", "dogs", "an dog"], "answer": "dog", "emoji": "🐶" },
        { "type": "blank", "prompt": "I like these ___.", "choices": ["rabbits", "rabbit", "a rabbit"], "answer": "rabbits", "emoji": "🐰" },
        { "type": "blank", "prompt": "Do you want ___ water?", "choices": ["some", "a", "an"], "answer": "some", "emoji": "💧" },
        { "type": "blank", "prompt": "I see ___ elephant.", "choices": ["an", "a", "some"], "answer": "an", "emoji": "🐘" },
        { "type": "blank", "prompt": "I see ___ banana.", "choices": ["a", "an", "some"], "answer": "a", "emoji": "🍌" },
        { "type": "mc", "prompt": "Which is correct?", "choices": ["I like peaches.", "I like peach.", "I like a peaches."], "answer": "I like peaches.", "emoji": "✅" }
      ]
    },
    "grammar_u4": {
      "title": "Grammar: Revision 1",
      "emoji": "📝",
      "color": "#2BB3FF",
      "book": "grammar",
      "unit": 4,
      "items": [
        { "type": "mc", "prompt": "We must / mustn't litter.", "choices": ["mustn't", "must", "can"], "answer": "mustn't", "emoji": "🗑️" },
        { "type": "mc", "prompt": "We can / must play in the playground. (allowed)", "choices": ["can", "must", "mustn't"], "answer": "can", "emoji": "🛝" },
        { "type": "blank", "prompt": "There ___ some ducks.", "choices": ["are", "is", "am"], "answer": "are", "emoji": "🦆" },
        { "type": "blank", "prompt": "We are eating some ___.", "choices": ["sandwiches", "sandwich", "a sandwich"], "answer": "sandwiches", "emoji": "🥪" },
        { "type": "mc", "prompt": "Fix it: There has a playground.", "choices": ["There is a playground.", "There are a playground.", "There am a playground."], "answer": "There is a playground.", "emoji": "🔧" },
        { "type": "mc", "prompt": "Fix it: I can see an bee.", "choices": ["I can see a bee.", "I can see an bees.", "I can see some bee."], "answer": "I can see a bee.", "emoji": "🐝" },
        { "type": "blank", "prompt": "I have ___ eraser.", "choices": ["an", "a", "some"], "answer": "an", "emoji": "✏️" },
        { "type": "blank", "prompt": "Do you want some ___?", "choices": ["cherries", "cherry", "a cherry"], "answer": "cherries", "emoji": "🍒" }
      ]
    },
    "grammar_u5": {
      "title": "Grammar: Adjectives / too",
      "emoji": "🌈",
      "color": "#FF6B4A",
      "book": "grammar",
      "unit": 5,
      "items": [
        { "type": "mc", "prompt": "Gary wants a paper fan. He is…", "choices": ["hot", "hungry", "bored"], "answer": "hot", "emoji": "🥵" },
        { "type": "mc", "prompt": "I want to eat cupcakes. I am…", "choices": ["hungry", "cold", "small"], "answer": "hungry", "emoji": "🧁" },
        { "type": "mc", "prompt": "Let's play games with him. He is…", "choices": ["bored", "green", "wet"], "answer": "bored", "emoji": "🎲" },
        { "type": "blank", "prompt": "The apple is ___.", "choices": ["red", "run", "room"], "answer": "red", "emoji": "🍎" },
        { "type": "blank", "prompt": "I am hungry ___.", "choices": ["too", "two", "to"], "answer": "too", "emoji": "➕" },
        { "type": "mc", "prompt": "Is she happy?", "choices": ["Yes, she is. / No, she isn't.", "Yes, there is.", "I like apples."], "answer": "Yes, she is. / No, she isn't.", "emoji": "😊" },
        { "type": "blank", "prompt": "The ice cream is ___.", "choices": ["cold", "hot", "hungry"], "answer": "cold", "emoji": "🍦" },
        { "type": "mc", "prompt": "Which word is an adjective?", "choices": ["small", "school", "she"], "answer": "small", "emoji": "📏" }
      ]
    },
    "grammar_u6": {
      "title": "Grammar: How / Where / come-go",
      "emoji": "🧭",
      "color": "#3DCC7A",
      "book": "grammar",
      "unit": 6,
      "items": [
        { "type": "blank", "prompt": "___ do you come to school?", "choices": ["How", "Where", "Who"], "answer": "How", "emoji": "❓" },
        { "type": "blank", "prompt": "___ do you live?", "choices": ["Where", "How", "What"], "answer": "Where", "emoji": "📍" },
        { "type": "blank", "prompt": "I come to school ___ bus.", "choices": ["by", "on", "in"], "answer": "by", "emoji": "🚌" },
        { "type": "blank", "prompt": "I go to school ___ foot.", "choices": ["on", "by", "in"], "answer": "on", "emoji": "👟" },
        { "type": "blank", "prompt": "I live ___ Hung Hom.", "choices": ["in", "on", "by"], "answer": "in", "emoji": "🏠" },
        { "type": "mc", "prompt": "How do you come to school? — ___", "choices": ["By MTR.", "In Tuesday.", "At apple."], "answer": "By MTR.", "emoji": "🚇" },
        { "type": "blank", "prompt": "We ___ to the park.", "choices": ["go", "goes", "going"], "answer": "go", "emoji": "🏞️" },
        { "type": "blank", "prompt": "She ___ to school by bus.", "choices": ["comes", "come", "coming"], "answer": "comes", "emoji": "👧" },
        { "type": "mc", "prompt": "Circle the correct pair.", "choices": ["by bus / on foot", "on bus / by foot", "in bus / at foot"], "answer": "by bus / on foot", "emoji": "✅" }
      ]
    },
    "grammar_u7": {
      "title": "Grammar: Simple present / Possessives",
      "emoji": "⏱️",
      "color": "#FFB020",
      "book": "grammar",
      "unit": 7,
      "items": [
        { "type": "blank", "prompt": "I ___ to school every day.", "choices": ["go", "goes", "going"], "answer": "go", "emoji": "🚶" },
        { "type": "blank", "prompt": "She ___ books.", "choices": ["likes", "like", "liking"], "answer": "likes", "emoji": "📚" },
        { "type": "blank", "prompt": "He ___ football.", "choices": ["plays", "play", "playing"], "answer": "plays", "emoji": "⚽" },
        { "type": "blank", "prompt": "They ___ breakfast at 7.", "choices": ["eat", "eats", "eating"], "answer": "eat", "emoji": "🍳" },
        { "type": "blank", "prompt": "This is ___ bag.", "choices": ["Tom's", "Tom", "Toms"], "answer": "Tom's", "emoji": "🎒" },
        { "type": "blank", "prompt": "I like apples ___ oranges.", "choices": ["and", "or", "but"], "answer": "and", "emoji": "🍎" },
        { "type": "blank", "prompt": "Do you want juice ___ water?", "choices": ["or", "and", "too"], "answer": "or", "emoji": "💧" },
        { "type": "mc", "prompt": "Which is correct?", "choices": ["She works in a hospital.", "She work in a hospital.", "She working in a hospital."], "answer": "She works in a hospital.", "emoji": "✅" }
      ]
    },
    "grammar_u8": {
      "title": "Grammar: Revision 2",
      "emoji": "🎯",
      "color": "#1FA8A0",
      "book": "grammar",
      "unit": 8,
      "items": [
        { "type": "blank", "prompt": "Pat ___ next to Tim.", "choices": ["lives", "live", "living"], "answer": "lives", "emoji": "🏠" },
        { "type": "blank", "prompt": "Tim and Pat ___ friends.", "choices": ["are", "is", "am"], "answer": "are", "emoji": "🤝" },
        { "type": "mc", "prompt": "Circle the correct word: He go / goes to school.", "choices": ["goes", "go", "going"], "answer": "goes", "emoji": "⭕" },
        { "type": "blank", "prompt": "I like cats ___ dogs.", "choices": ["and", "or", "too"], "answer": "and", "emoji": "🐱" },
        { "type": "mc", "prompt": "Rewrite idea: I like tea. I like milk. →", "choices": ["I like tea and milk.", "I like tea or milk only wrong.", "I like tea too milk."], "answer": "I like tea and milk.", "emoji": "🥛" },
        { "type": "blank", "prompt": "___ is your school?", "choices": ["Where", "Who", "When"], "answer": "Where", "emoji": "🏫" },
        { "type": "blank", "prompt": "She ___ a nurse.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "👩‍⚕️" },
        { "type": "mc", "prompt": "Which verb form is correct for 'he'?", "choices": ["plays", "play", "playing"], "answer": "plays", "emoji": "⚽" }
      ]
    },
    "grammar_u9": {
      "title": "Booster: Nouns",
      "emoji": "📦",
      "color": "#E85D75",
      "book": "grammar",
      "unit": 9,
      "items": [
        { "type": "mc", "prompt": "Which is a common noun?", "choices": ["school", "Hong Kong", "Mary"], "answer": "school", "emoji": "🏫" },
        { "type": "mc", "prompt": "Which is a proper noun?", "choices": ["Hong Kong", "city", "boy"], "answer": "Hong Kong", "emoji": "🏙️" },
        { "type": "blank", "prompt": "classroom = class + ___", "choices": ["room", "school", "book"], "answer": "room", "emoji": "🧩" },
        { "type": "blank", "prompt": "one baby → two ___", "choices": ["babies", "babys", "babyes"], "answer": "babies", "emoji": "👶" },
        { "type": "blank", "prompt": "one box → two ___", "choices": ["boxes", "boxs", "boxies"], "answer": "boxes", "emoji": "📦" },
        { "type": "blank", "prompt": "one leaf → two ___", "choices": ["leaves", "leafs", "leafes"], "answer": "leaves", "emoji": "🍃" },
        { "type": "mc", "prompt": "Circle the correct article: ___ umbrella", "choices": ["an", "a", "some"], "answer": "an", "emoji": "☂️" },
        { "type": "mc", "prompt": "Circle the correct article: ___ university (yu-sound)", "choices": ["a", "an", "some"], "answer": "a", "emoji": "🎓" },
        { "type": "blank", "prompt": "Fill: I see ___ moon.", "choices": ["the", "a", "an"], "answer": "the", "emoji": "🌙" },
        { "type": "mc", "prompt": "Male → Female: king →", "choices": ["queen", "prince", "boy"], "answer": "queen", "emoji": "👑" }
      ]
    },
    "grammar_u10": {
      "title": "Booster: Sentences / Verbs",
      "emoji": "✏️",
      "color": "#4C8BF5",
      "book": "grammar",
      "unit": 10,
      "items": [
        { "type": "mc", "prompt": "In 'Tom eats an apple', the subject is…", "choices": ["Tom", "eats", "apple"], "answer": "Tom", "emoji": "👤" },
        { "type": "mc", "prompt": "In 'Tom eats an apple', the verb is…", "choices": ["eats", "Tom", "apple"], "answer": "eats", "emoji": "⚡" },
        { "type": "mc", "prompt": "Which is an imperative?", "choices": ["Sit down.", "She is happy.", "Is he here?"], "answer": "Sit down.", "emoji": "👉" },
        { "type": "blank", "prompt": "___ open the door. (negative)", "choices": ["Don't", "Doesn't", "Isn't"], "answer": "Don't", "emoji": "🚪" },
        { "type": "blank", "prompt": "I am ___ (run → -ing).", "choices": ["running", "runing", "run"], "answer": "running", "emoji": "🏃" },
        { "type": "blank", "prompt": "She is ___ (write → -ing).", "choices": ["writing", "writeing", "writting"], "answer": "writing", "emoji": "✍️" },
        { "type": "blank", "prompt": "They ___ playing now.", "choices": ["are", "is", "am"], "answer": "are", "emoji": "🎮" },
        { "type": "blank", "prompt": "He ___ reading a book.", "choices": ["is", "are", "am"], "answer": "is", "emoji": "📖" },
        { "type": "mc", "prompt": "Choose the correct form: She ___ TV now.", "choices": ["is watching", "watch", "watches"], "answer": "is watching", "emoji": "📺" },
        { "type": "mc", "prompt": "Rearrange idea: playing / is / Ben →", "choices": ["Ben is playing.", "Is Ben playing playing.", "Playing Ben is."], "answer": "Ben is playing.", "emoji": "🧱" }
      ]
    },
    "grammar_u11": {
      "title": "Booster: Prepositions / Questions",
      "emoji": "❓",
      "color": "#F08A24",
      "book": "grammar",
      "unit": 11,
      "items": [
        { "type": "blank", "prompt": "The book is ___ the table.", "choices": ["on", "in", "at"], "answer": "on", "emoji": "📕" },
        { "type": "blank", "prompt": "The cat is ___ the box.", "choices": ["in", "on", "at"], "answer": "in", "emoji": "🐱" },
        { "type": "blank", "prompt": "I go to school ___ Monday.", "choices": ["on", "in", "at"], "answer": "on", "emoji": "📅" },
        { "type": "blank", "prompt": "I get up ___ 7 o'clock.", "choices": ["at", "on", "in"], "answer": "at", "emoji": "⏰" },
        { "type": "blank", "prompt": "___ is your name?", "choices": ["What", "Where", "How"], "answer": "What", "emoji": "🏷️" },
        { "type": "blank", "prompt": "___ old are you?", "choices": ["How", "What", "Where"], "answer": "How", "emoji": "🎂" },
        { "type": "blank", "prompt": "___ is my bag?", "choices": ["Where", "Who", "When"], "answer": "Where", "emoji": "🎒" },
        { "type": "blank", "prompt": "___ is that girl?", "choices": ["Who", "Where", "When"], "answer": "Who", "emoji": "👧" },
        { "type": "mc", "prompt": "Complete: ___ is your school? — It is in Kowloon.", "choices": ["Where", "Who", "When"], "answer": "Where", "emoji": "🏫" },
        { "type": "mc", "prompt": "Complete: ___ do you come to school? — By bus.", "choices": ["How", "Where", "Who"], "answer": "How", "emoji": "🚌" },
        { "type": "blank", "prompt": "___ are the children?", "choices": ["Where", "What", "When"], "answer": "Where", "emoji": "🧒" },
        { "type": "mc", "prompt": "Choose: ___ is she? — She is my sister.", "choices": ["Who", "Where", "When"], "answer": "Who", "emoji": "👭" }
      ]
    }
  }
};

/* Fill the Mix world from every unit (except itself) */
(function () {
  const worlds = window.LEAP_ALL_QUESTIONS.worlds;
  const all = [];
  Object.keys(worlds).forEach(function (key) {
    if (key === "all") return;
    worlds[key].items.forEach(function (item, idx) {
      all.push(Object.assign({ id: key + "_" + idx, source: worlds[key].book }, item));
    });
  });
  worlds.all.items = all;
  window.LEAP_ALL_QUESTIONS._meta.total = all.length;
})();
