const { runAndExit } = require('../../');

runAndExit(`
  npm-run-all
    clear
    test
    clear
    lint
    clear
    coverage
  && yarn sort-package-json
`);
