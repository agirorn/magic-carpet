#!/usr/bin/env node
const {
  runAndExit,
  node,
  command,
  script,
  appName,
} = require('..');

runAndExit(node(script(command())), appName());
