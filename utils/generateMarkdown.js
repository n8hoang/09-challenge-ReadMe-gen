function renderLicenseLink(license) {
  switch (license) {
      case 'MIT':
          return 'https://opensource.org/licenses/MIT';
      case 'GPLv3':
          return 'https://www.gnu.org/licenses/gpl-3.0';
      case 'ISC':
          return 'https://opensource.org/licenses/ISC';
      case 'Apache 2.0':
          return 'https://opensource.org/licenses/Apache-2.0';
      default:
          return '';
  }
}

function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  if (!link) return '';

  return `This project is licensed under the [${license}](${link}) license.`;
}

function generateMarkdown(data) {
  return `
# ${data.title} ${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${renderLicenseSection(data.license)}

## Contributing

${data.contributing}

## Questions

For questions, reach out to me on [GitHub](https://github.com/${data.github}) or email me at ${data.email}.
`;
}

module.exports = generateMarkdown;
