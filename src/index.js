#!/usr/bin/env node
const inquirer = require("inquirer");
const commitTypes = require("./commitTypes");
const commands = require("./commands");
const log = require("@ignhycord/logger");
const logger = new log.default();
const { exec, execSync } = require("child_process");
const semver = require("semver");
const fs = require("fs");

const existingConfig = fs.existsSync(__dirname + "/../package.json")
  ? require(__dirname + "/../package.json")
  : null;

let ret = { commitRow: [], version: "patch", signed: true, title: "" };

// return logger.data(semver.inc(semver.coerce("0.0.2"), ret.version));

let finished = async () => {
  execSync(`git stash`);
  execSync(`npm version ${ret.version}`);
  execSync(`git stash pop`);
  execSync(`git add .`);

  execSync(
    `git commit${ret.signed ? " -S" : ""} -m "${
      ret?.title || semver.coerce(existingConfig?.version)
    }" -m "    - ${ret.commitRow.join("\n    - ")}"`
  );
  // exec(`git push`);
  // exec(`npm version ${ret.version}`);
};

let main = async () => {
  let { command } = await inquirer.prompt([
    {
      type: "list",
      name: "command",
      message: "Please select a command",
      choices: commands.map((c) => c.name),
    },
  ]);

  return commands.find((k) => k.name === command).handle(ret, finished);
};
main();

// if (!existingConfig) {
//   buildConfig();
// } else {
// }
// const existingConfig = fs.existsSync(__dirname + "/gplus.json");
// logger.data(__dirname + "/gplus.json");

// function buildConfig() {
//   inquirer
//     .prompt([
//       {
//         type: "text",
//         name: "name",
//         message: "What is the name of your project?",
//         default: path.basename(process.cwd()),
//       },
//     ])
//     .then((answers) => {
//     });
// }
