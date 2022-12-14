#!/usr/bin/env node
module.exports = [
  {
    name: "Done",
    emoji: "๐",
    message: "Do you want to set a title for this release? (Enter for none)",
    done: true,
    type: "confirm",
  },
  {
    separator: true,
  },
  {
    name: "Bug Fix",
    emoji: "โจ",
    message: "What did you fix?",
  },
  {
    name: "Config Change",
    emoji: "๐",
    message: "Which key on which config did you change?",
  },
  {
    name: "Add Feature",
    emoji: "๐จ",
    message: "What did you add?",
  },
  {
    name: "Remove Feature",
    emoji: "๐ฅ",
    message: "What did you remove?",
  },
  {
    name: "Chore",
    emoji: "๐งน",
    message: "What did you update?",
  },
  {
    name: "Breaking Change",
    emoji: "๐ฃ",
    message: "What is affected by this change?",
  },
];
// hammer- Feature added
// sparkles - Bug doesn't happen
// broom - Chore/Boring
// fire - Feature removed
// bomb/boom - Breaking Change
