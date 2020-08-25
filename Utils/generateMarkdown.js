// function to generate markdown for README
function generateMarkdown(data) {
 return ` # ${data.title}

## Description

${data.description}

## Table Of Contents

1. [Installation](#installation)
2. [Usage](usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation

${data.install}

## Usage

${data.usage}

## License

![github license](https://img.shields.io/badge/license-apache2.0-red)

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

Have any questions regarding this generator? If so, open an issue on GH or feel free to contact me on [GitHub](http://github.com/${data.username}) and via email ${data.email}
`;

}

module.exports = generateMarkdown;
