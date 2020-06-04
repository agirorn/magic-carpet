require('dotenv').config();
const { sep } = require('path');
const { red } = require('colors');
const execa = require('execa');

// eslint-disable-next-line global-require
const appName = () => require('./package.json').name;

const SPACE = ' ';
const NEW_LINE = /\n/;
const joinLines = command => command.split(NEW_LINE).join(SPACE);
const npmLifecycleEvent = () => process.env.npm_lifecycle_event;
const run = command => execa(joinLines(command).trim(), { stdio: 'inherit', shell: true });


const exit = (promise, runner = 'pontus-script-runner') => promise
  .catch((error) => {
    // eslint-disable-next-line no-console
    console.error(red(`${runner}:`), error.message);
    throw error;
  })
  .then(
    () => process.exit(0),
    () => process.exit(1),
  );

const npmRunner = () => (
  process.env.npm_execpath.includes('yarn')
    ? 'yarn'
    : 'npm'
);
const npmLifecycleCommandName = () => `$(${npmRunner()} ${npmLifecycleEvent()})`;
const runAndExit = (command, runner = npmLifecycleCommandName()) => exit(run(command), runner);

const shellArguments = (argv = process.argv) => {
  const args = argv.slice(2);
  return args.length
    ? ` ${args.join(SPACE)}`
    : '';
};

const node = (jsFile, args = shellArguments) => `node ${jsFile}${args()}`;
const command = () => npmLifecycleEvent().split(':').join(sep);
const script = cmd => `scripts${sep}${cmd}.js`;

module.exports = {
  appName,
  command,
  exit,
  node,
  run,
  runAndExit,
  script,
  shellArguments,
};
