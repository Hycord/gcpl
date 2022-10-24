#!/usr/bin/env node
const inquirer = require("inquirer");
const commitTypes = require("./commitTypes");
const commands = require("./commands");
const log = require("@ignhycord/logger");
const logger = new log.default();
const { exec } = require("child_process");
const semver = require("semver");

const existingConfig = require(__dirname + "/../package.json");

let ret = { commitRow: [], version: "patch", signed: true };

// return logger.data(semver.inc(semver.coerce("0.0.2"), ret.version));

let finished = async () => {
  exec(`git add .`);
  exec(
    `git commit${ret.signed ? " -S" : ""} -m "${semver.inc(
      semver.coerce(existingConfig?.version),
      ret.version
    )}" -m "    - ${ret.commitRow.join("\n    - ")}"`
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
