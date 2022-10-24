#!/usr/bin/env node
const inquirer = require("inquirer");
const fs = require("fs");
const package = fs.existsSync(__dirname + "/../package.json")
  ? require(__dirname + "/../package.json")
  : null;

const commitTypes = require("./commitTypes");
const getDetails = require("./getDetails");
const semver = require("semver");


module.exports = [
  {
    name: "commit",
    handle: async function (ret, finished, showStuff = true) {
      let prompts = [];

      if (showStuff) {
        prompts.push({
          type: "list",
          name: "version",
          message: `What kind of commit is this?${
            package?.version ? ` (v${semver.coerce(package?.version)})` : ``
          }`,
          choices: [
            "prepatch",
            "patch",
            "preminor",
            "minor",
            "premajor",
            "major",
            "prerelease",
          ],
        });
        prompts.push({
          type: "boolean",
          name: "signed",
          message: "Do you want the commit to be signed using GPG?",
          default: true,
        });
      }

      prompts.push({
        type: "list",
        name: "type",
        choices: commitTypes.map((c) =>
          c?.separator ? new inquirer.Separator() : c.emoji + " " + c.name
        ),
        message: "What is the next feature?",
      });
      let { version, signed, type } = await inquirer.prompt(prompts);

      ret.version = version ?? ret.version ?? patch;
      ret.signed = signed ?? ret.signed ?? true;

      let details = await getDetails(type);
      if (details?.done) {
        ret.title = details?.message ?? "";
        return finished();
      }
      ret.commitRow.push(
        `${details.emoji} (${details.name}) > ${details.message}`
      );
      await this.handle(ret, finished, false);
    },
  },
];
