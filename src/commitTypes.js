#!/usr/bin/env node
module.exports = [
  {
    name: "Done",
    emoji: "🏁",
    message: "Done adding new changes?",
    done: true,
  },
  {
    separator: true,
  },
  {
    name: "Bug Fix",
    emoji: "🐛",
    message: "What did you fix?",
  },
  {
    name: "Config Change",
    emoji: "🖊",
    message: "Which key on which config did you change?",
  },
  {
    name: "Add Feature",
    emoji: "🔨",
    message: "What did you add?",
  },
  {
    name: "Remove Feature",
    emoji: "💣",
    message: "What did you remove?",
  },
];