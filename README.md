[![npm version][npm-badge]][npm-link]
[![Build Status][travis-badge]][travis-link]

# Magic Carpet

Takes care of running your javascript [npm-scripts] and includes tools to make
js shell scripts work like magic.

> Inspired by [scripty]

## Install

```shell
npm install magic-carpet
```

## Usage

1. From your module's root, create a scripts directory
2. If you want to define an npm script named "magic:command", write an executable file at scripts/magic/command.js
3. Declare your "magic:command" script in "scripts" in your package.json:

```json
{
  "scripts": {
    "foo:bar": "magic-carpet"
  }
}
```

4. Run the magic:command

```shell
npm magic:command
```

## Shell helpers

### runAndExit

The runAndExit can be helpful when running simple shell commands one after the
other.

```js
const { runAndExit } = require('../');

runAndExit(`
  echo "Magic Carpet"
  && cross-env NODE_ENV=test mocha
    --reporter=dot
    --config=.mocharc-e2e.js
    --public=src
  && yarn lint
`);
```

## shellArguments

If for any reason you need to get the shell arguments passed to yarn and pass
them along to the apps you are calling then you can do that by using the
`shellArguments` helper in the javascript shell application

```js
const { runAndExit, shellArguments } = require('pontus-scripts-runner');

runAndExit(`
  yarn workspace workspace-name start ${shellArguments()}
`);
```

## npmCommand

The utility npmCommand will get the full npm or yarn command name being invoked.
This can be useful when printing help screens.

```js
const { runAndExit, npmCommand } = require('pontus-scripts-runner');

if {process.argv.includes('--help')) {
  console.log(`
    ${npmCommand()}

    Some other helpfull information
  `.trim());
  process.exit(0);
}

runAndExit(`
  echo "normal operation"
`);
```
[npm-scripts]: https://docs.npmjs.com/misc/scripts
[scripty]: https://www.npmjs.com/package/scripty
[npm-badge]: https://badge.fury.io/js/magic-carpet.svg
[npm-link]: https://badge.fury.io/js/magic-carpet
[travis-badge]: https://travis-ci.org/agirorn/magic-carpet.svg?branch=master
[travis-link]: https://travis-ci.org/agirorn/magic-carpet
