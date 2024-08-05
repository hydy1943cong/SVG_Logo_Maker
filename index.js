// Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js')


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'text',
        message: colors.brightMagenta("Please enter up to three characters as your logo content.")
    },
    {
        type: 'input',
        name: 'text_color',
        message: colors.brightMagenta("What color would you like to use for the text of your logo? Please enter a color keyword (OR a hexadecimal number).")
    },
    {
        type: 'list',
        message: colors.brightMagenta('Please choose a shape for your logo.'),
        name: 'shape',
        choices: ['circle', 'triangle', 'square']
    },
    {
        type: 'input',
        name: 'shape_color',
        message: colors.brightMagenta("What color would you like to use for the shape of your logo? Please enter a color keyword (OR a hexadecimal number).")
    }
]




// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        // console.log(answers);
        console.log("Generating logo.svg");
        const mylogo = generateLogo(answers);
        console.log(mylogo);
        fs.writeFile('logo.svg', mylogo, (err) => {  
            // throws an error, you could also catch it here
            if (err) throw err;    
            // success case, the file was saved
            console.log('SVG written!');
        }); 
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });

}

// Function call to initialize app
init();

