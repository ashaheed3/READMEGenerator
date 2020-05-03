function generateMarkdown(data) {
  return `
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)

  # ${data.title}
  
  ${data.description}
  
  ## Table of Contents
  
  1. [Installation](#installation)
  2. [Usage](#usage)
  3. [License](#license)
  4. [Contributing](#contributing)
  5. [Tests](#tests)
  6. [Questions](#questions)
  
  ## Installation
  
  The application will be installed with the following command(s):
  \`\`\`sh
  ${data.installationCommands}
  \`\`\`
  ## Usage
  
  ${data.usageInstructions}
  The application will be ran with the following command(s):
  \`\`\`sh
  ${data.usageCommands}
  \`\`\`
  ## Contributing
  
  ${data.contributing}
  
  ## Tests
  \`\`\`sh
  ${data.tests}
  \`\`\`

`;
}

module.exports = generateMarkdown;
