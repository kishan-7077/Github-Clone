const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");
const { commitRepo } = require("./controllers/commit");
const { pushRepo } = require("./controllers/push");
const { pullRepo } = require("./controllers/pull");
const { revertRepo } = require("./controllers/revert");

yargs(hideBin(process.argv))
	.command(
		// command
		"init",
		// description
		"Initialize a new repository",
		// parameters
		{},
		// method to be called
		initRepo
	)
	.command(
		// command
		"add <file>",
		// description
		"Add a file to the Repository",
		// parameters
		(yargs) => {
			yargs.positional("file", {
				describe: "File to add to the staging area",
				type: "string",
			});
		},
		// method to be called
		(argv) => {
			addRepo(argv.file);
		}
	)
	.command(
		// command
		"commit <message>",
		// description
		"Commit the stages file",
		// parameters
		(yargs) => {
			yargs.positional("message", {
				describe: "Commit message",
				type: "string",
			});
		},
		// method to be called
		(argv) => {
			commitRepo(argv.message);
		}
	)
	.command(
		// command
		"push",
		// description
		"Push commits to 53",
		// parameters
		{},
		// method to be called
		pushRepo
	)
	.command(
		// command
		"pull",
		// description
		"Pull commits to 53",
		// parameters
		{},
		// method to be called
		pullRepo
	)
	.command(
		// command
		"revert <commitID>",
		// description
		"Revert a specific commit",
		// parameters
		(yargs) => {
			yargs.positional("commitID", {
				describe: "Commit ID to revert to",
				type: "string",
			});
		},
		// method to be called
		revertRepo
	)
	.demandCommand(1, "you need atleast one command")
	.help().argv;
