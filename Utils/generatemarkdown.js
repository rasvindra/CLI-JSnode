
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(prjLicense) {

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
//function renderLicenseLink(prjLicense) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//function renderLicenseSection(prjLicense) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(ans) {
  return `# ${ans.title}

# ${prjName}

## Table of Contents
* [Description](#description)
* [Install](#install)
* [Contribution](#contribution)
* [Usage](#usage)
* [Test](#test)
* [Questions](#questions)
* [License](#license)


## Description
${ans.prjDesc}

## Install Instructions
${ans.prjInstall}

## Contribution Notes
${ans.prjCont}

## Usage Agreements
${ans.prjUsage}

## Testing Information
${ans.prjTest}

### Questions
${ans.userEmail}
${ans.gitLink}

## License
${ans.prjLicense}

`;
}

module.exports = generateMarkdown;