#!/usr/bin/env node

const path = require('path');
const { Command } = require('commander');
const pkg = require('../package.json');

const devComponent = require('./scripts/dev-component');
const buildComponent = require('./scripts/build-component');

const program = new Command();
const version = pkg.version || '1.0.0';

program.option('-d, --debug', 'output extra debugging');

program
  .version(version)
  .name('@csdn-design/vue-scripts')
  .usage('command [options]');

program
  .command('dev:component')
  .description('build components with watch mode.')
  .action(async () => {
    await devComponent();
  });

program
  .command('build:component')
  .description('build production files.')
  .option('-r, --release', 'build with release file')
  .action(async ({ release }) => {
    await buildComponent({ release });
  });

program.parse(process.argv);
const options = program.opts();
if (options.debug) console.log(options);
