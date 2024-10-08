const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const { initRepo } = require("./controllers/init");
const { addRepo } = require("./controllers/add");

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
		addRepo
	)
	.demandCommand(1, "you need atleast one command")
	.help().argv;
