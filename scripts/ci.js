const { runAndExit } = require('../');

runAndExit(`
  npm-run-all
    test
    lint
    coverage
`);

