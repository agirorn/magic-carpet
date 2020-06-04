const { runAndExit } = require('../');

runAndExit(`
  yardman
    .nycrc
    bin
    index.js
    package.json
    scripts
    spec
    'yarn dev:exec'
`);
