const { prompt } = require('inquirer');
const fs = require('fs');



     prompt([
        {
            type:'input',
            name: 'txt',
            message: 'enter three characters',
            validate: (txt) => {
                if (txt.length !== 3) {
                  return 'Please enter exactly three characters.';
                }
                return true;
              },
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
        const { txt, color, shape, svgColor } = data;


        if (shape === 'Square') {
            svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
              <rect x="10" y="10" width="180" height="180" fill="${svgColor}" />
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="64" fill="${color}">${txt}</text>
            </svg>`;
          } else if (shape === 'Circle') {
            svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
              <circle cx="100" cy="100" r="90" fill="${svgColor}" />
              <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="64" fill="${color}">${txt}</text>
            </svg>`;
          } else if (shape === 'Triangle') {
            svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
              <polygon points="100 10 190 190 10 190" fill="${svgColor}" />
              <text x="50%" y="70%" text-anchor="middle" dominant-baseline="middle" font-size="64" fill="${color}">${txt}</text>
            </svg>`;
          }
      
          fs.writeFileSync('shape.svg', svgMarkup, 'utf-8', (err) => {
            if (err) {
              console.error('Error writing SVG file:', err);
              return;
            }
            console.log('SVG file created: shape.svg');
          });

     })

     .catch((error) => {
        console.error('Error:', error);
      });