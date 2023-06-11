const inquirer = require('inquirer');
const svg2img = require('svg2img');
const fs = require('fs');

inquirer
     .prompt([
        {
            type:'input',
            name: 'txt',
            message: 'enter three characters',
        },
        {
            type: 'input',
            name: 'color',
            message: 'what color do you want the text?',
        },
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'svgColor',
            message: 'what color do you want the svg?',
        },

     ])
     .then((data) => {

     })