// Include packages needed for this application
const inquirer = require("inquirer");
const colors = require("colors");
const fs = require('fs');


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


// Create a function to create an SVG file

function writeToFile(answers) {
    const licenseBadge = licenseBadges[answers.license] || "";
    const licenseNotice = answers.license !== 'None'
        ? `This application is covered under the ${answers.license}.`
        : "This application does not have a license.";

    const readmeContent = `
# ${answers.title}

${licenseBadge}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Languages](#languages)
- [License](#license)
- [Questions](#questions)

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Languages
${answers.language.join(', ')}

## License
${licenseNotice}

## Questions
- Check my GitHub: [${answers.github}](https://github.com/${answers.github})
- Email me with your questions: ${answers.email}
    `;

    fs.writeFile('README.md', readmeContent, (err) => {
        if (err) throw err;
        console.log('README.md created successfully!');
    });
}

// Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((answers) => {
        console.log(answers);
        console.log("Generated logo.svg");
        writeToFile(answers);
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

