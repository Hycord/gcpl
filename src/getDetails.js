#!/usr/bin/env node
const commitTypes = require("./commitTypes");
const inquirer = require("inquirer");

module.exports = async (type) => {
  type = commitTypes.find((k) => k.emoji + " " + k.name === type);
  let answers = await inquirer.prompt([
    {
      type: "text",
      name: "message",
      message: `${type.emoji} ${type.message}`,
    },
  ]);

  return { ...type, message: answers.message };
};
