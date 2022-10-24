#!/usr/bin/env node
module.exports = [
  {
    name: "Done",
    emoji: "🏁",
    message: "Do you want to set a title for this release? (Enter for none)",
    done: true,
    type: "confirm",
  },
  {
    separator: true,
  },
  {
    name: "Bug Fix",
    emoji: "✨",
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
    emoji: "🔥",
    message: "What did you remove?",
  },
  {
    name: "Chore",
    emoji: "🧹",
    message: "What did you update?",
  },
  {
    name: "Breaking Change",
    emoji: "💣",
    message: "What is affected by this change?",
  },
];
// hammer- Feature added
// sparkles - Bug doesn't happen
// broom - Chore/Boring
// fire - Feature removed
// bomb/boom - Breaking Change
