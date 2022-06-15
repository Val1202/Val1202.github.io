const possibleQuestions = [
  {
    level: 1,
    question: "Who is typically referenced as a great religious orator?",
    wrongAnswers: ["Barack Obama", "Nelson Mandella", "Aung San Suu Kyi"],
    rightAnswer: "Billy Graham",
  },
  {
    level: 1,
    question:
      "What is the American Management Association's most valued skill?",
    wrongAnswers: ["Programming", "Management", "Finance"],
    rightAnswer: "Communication",
  },
  {
    level: 1,
    question: "'Tailor your message to your _________.'",
    wrongAnswers: ["Friends", "Family", "Teacher"],
    rightAnswer: "Audience",
  },
  {
    level: 2,
    question: "Adrenaline is released in response to this, or mental stress.",
    wrongAnswers: ["Scarcity", "Procrastination", "Basic"],
    rightAnswer: "Physical",
  },
  {
    level: 2,
    question: "What's the best way to combat public speaking stress?",
    wrongAnswers: [
      "Being cocky",
      "Planting audience members",
      "Listening closely",
    ],
    rightAnswer: "Practice and preparation",
  },
  {
    level: 2,
    question: "You cannot expect the following:",
    wrongAnswers: ["Nervousness", "Mistakes", "Challenges"],
    rightAnswer: "Perfection",
  },
  {
    level: 3,
    question:
      "What's the first step in the public speaking topic brainstorming process?",
    wrongAnswers: ["Clustering", "Internet Search", "Speaking on Stage"],
    rightAnswer: "Personal Inventory",
  },
  {
    level: 3,
    question:
      "This is a 'one-sentence statement that sums up the major ideas of a speech'.",
    wrongAnswers: ["General purpose", "Topic", "Residual message"],
    rightAnswer: "Central idea",
  },
  {
    level: 3,
    question:
      "Audience-centeredness is keeping the audience foremost at ______ of a speech.",
    wrongAnswers: ["The middle", "The end", "The start"],
    rightAnswer: "Every step",
  },
  {
    level: 4,
    question: "The best examples are consistently ________.",
    wrongAnswers: ["Emotional", "Exciting", "Funny"],
    rightAnswer: "Vivid",
  },
  {
    level: 4,
    question: "What's a common issue with statistics in a presentation?",
    wrongAnswers: ["Ridiculousness", "Stupidity", "They're boring"],
    rightAnswer: "Representativeness",
  },
  {
    level: 4,
    question: "Quoting out of context means that you:",
    wrongAnswers: ["Forget the exact quote", "Remove words", "Sound terrible"],
    rightAnswer: "Distort its meaning",
  },
  {
    level: 5,
    question: "Most speeches contain between _______ points.",
    wrongAnswers: ["1 to 3", "1 to 4", "3 to 6"],
    rightAnswer: "2 to 5",
  },
  {
    level: 5,
    question:
      "When speech points follow a time pattern, they are in _______ order.",
    wrongAnswers: ["Reverse", "Timetical", "Alphabetical"],
    rightAnswer: "Chronological",
  },
  {
    level: 5,
    question:
      "How should the main points be divided, when using topical order?",
    wrongAnswers: ["Problem, solution", "Chronological", "Inconsistent"],
    rightAnswer: "Logical and consistent",
  },
  {
    level: 6,
    question: "Always seek to do this at the beginning of your speech.",
    wrongAnswers: [
      "State your topic",
      "Communicate emotion",
      "Look at everybody",
    ],
    rightAnswer: "Get attention",
  },
  {
    level: 6,
    question: "You will lose audience attention if you do this.",
    wrongAnswers: ["Cry", "Speak loudly", "Establish credibility"],
    rightAnswer: "Beat around the bush",
  },
  {
    level: 6,
    question: "The ending of a speech needs to reinforce the ________.",
    wrongAnswers: ["Audience's curiosity", "Speaker's name", "Topic"],
    rightAnswer: "Main idea",
  },
  {
    level: 7,
    question:
      "Language that isn't _______ is hazardous to good public speaking.",
    wrongAnswers: ["Vivid", "Clear", "Vulgar"],
    rightAnswer: "Inclusive",
  },
  {
    level: 7,
    question: "This is not a concern of delivery:",
    wrongAnswers: ["Voice", "Practice", "Answering questions well"],
    rightAnswer: "Content",
  },
  {
    level: 7,
    question: "This kind of speech is delivered without preparation:",
    wrongAnswers: ["Epideictic", "Informative", "Persuasive"],
    rightAnswer: "Impromptu",
  },
  {
    level: 8,
    question:
      "Visual aids are only effective when they are ___________ your speech.",
    wrongAnswers: ["Additive to", "Built alongside", "Distracting from"],
    rightAnswer: "Integrated into",
  },
  {
    level: 8,
    question: "This is not a good way to design visual aids:",
    wrongAnswers: [
      "Prepare far in advance",
      "Make it small",
      "Use a limited amount of text",
    ],
    rightAnswer: "Keep it simple",
  },
  {
    level: 8,
    question:
      "This may all seem like a bother. But what should you always check before speaking?",
    wrongAnswers: ["Your breathing", "Emotion", "Your heart rate"],
    rightAnswer: "Room and equipment",
  },
  {
    level: 9,
    question:
      "What's a common pitfall to make when doing an informative speech?",
    wrongAnswers: [
      "Understanding your audience",
      "No structure",
      "Thinking too much",
    ],
    rightAnswer: "Overestimating audience knowledge",
  },
  {
    level: 9,
    question: "Avoid:",
    wrongAnswers: ["Detail", "Expressiveness", "Specificity"],
    rightAnswer: "Abstractions",
  },
  {
    level: 9,
    question: "This is not a type of informative speech:",
    wrongAnswers: ["Processes", "Events", "Concepts"],
    rightAnswer: "Philosophy",
  },
  {
    level: 10,
    question: "Persuasion is something a speaker does ____ an audience.",
    wrongAnswers: ["Alongside", "For", "To"],
    rightAnswer: "With",
  },
  {
    level: 10,
    question: "What is not a question of fact?",
    wrongAnswers: ["Economic growth", "Distance", "Political statements"],
    rightAnswer: "Preference",
  },
  {
    level: 10,
    question:
      "A question of _______ relates to whether a specific course of action should be taken.",
    wrongAnswers: ["Effectiveness", "Persuasion", "Ethics"],
    rightAnswer: "Policy",
  },
];

document.querySelector("#startGame").addEventListener("click", function (evt) {
  var playerName = prompt("Как вас зовут?", "");
  if (playerName.indexOf("", 1) > 0) {
    var playerMail = prompt("Введите ваш email", "");
  }

  document.getElementById("mainBLK").style.contentVisibility = "visible"; // show
  document.getElementById("startGame").style.visibility = "hidden";
  loadQuestion();
});

const SOME_VALUE = "Who is typically referenced as a great religious orator?";

function loadQuestion() {
  /*lifelines.refreshScreen();*/
  document.querySelector("#question").innerText = SOME_VALUE;
}
