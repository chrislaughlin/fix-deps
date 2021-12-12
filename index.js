const { program } = require('commander');
const updateDeps = require('./updateDeps');

program.version('0.0.1');

program
  .option('-s, --single', 'update single repo')
  .option('-m, --multi <repos>', 'update multiple repos (commands separated)')
  .option('-d, --dryRun', 'output changes but dont apply them');

program.parse(process.argv);

const {
    single,
    multi,
    dryRun,
} = program.opts();

if (single) {
    updateDeps(dryRun);
    console.log('COMPLETE');
}

if (multi) {
    console.log(`multi: ${multi}`);
}