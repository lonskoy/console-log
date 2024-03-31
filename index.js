#!/usr/bin/env node

const yargs = require('yargs');

const options = yargs
    .command('current', 'get nt data and time in ISO format')
    .option('year', {
        alias: 'y',
        describe: 'Get current date',
        type: 'boolean'
    })
    .option('month', {
        alias: 'm',
        describe: 'Get current month',
        type: 'boolean'
    })
    .option('date', {
        alias: 'd',
        describe: 'Get date in calendar month',
        type: 'boolean'
    })
    .command('add', 'Add time to current date and time')
    .option('days', {
        alias: 'd',
        describe: 'Add days to current date and time',
        type: 'number'
    })
    .option('month', {
        alias: 'm',
        describe: 'Add months to current date and time',
        type: 'number'
    })
    .command('sub', 'Subtract time from current date and time')
    .option('days', {
        alias: 'd',
        describe: 'Subtract days from current date and time',
        type: 'number'
    })
    .option('month', {
        alias: 'm',
        describe: 'Subtract months from current date and time',
        type: 'number'
    })
    .demandCommand()
    .help()
    .argv

    if (options._.includes('current')) {
        const currentDate = new Date();
      
        if (options.year) {
          console.log(currentDate.getFullYear());
        } else if (options.month) {
          console.log(currentDate.getMonth() + 1); // Months are zero-based, so add 1
        } else if (options.date) {
          console.log(currentDate.toISOString());
        } else {
          console.log('Invalid command. Use --help for available options.');
        }
      } else if (options._.includes('add')) {
        const currentDate = new Date();
        const { days, months } = options;
      
        if (days) {
          currentDate.setDate(currentDate.getDate() + days);
        } else if (months) {
          currentDate.setMonth(currentDate.getMonth() + months);
        } else {
          console.log('Invalid command. Use --help for available options.');
          process.exit(1);
        }
      
        console.log(currentDate.toISOString());
      } else if (options._.includes('sub')) {
        const currentDate = new Date();
        const { days, months } = options;
      
        if (days) {
          currentDate.setDate(currentDate.getDate() - days);
        } else if (months) {
          currentDate.setMonth(currentDate.getMonth() - months);
        } else {
          console.log('Invalid command. Use --help for available options.');
          process.exit(1);
        }
      
        console.log(currentDate.toISOString());
      } else {
        console.log('Invalid command. Use --help for available options.');
      }