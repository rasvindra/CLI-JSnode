
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(prjLicense) {
const badges = {
  IBM:`[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
  MIT:`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
  MOZILLA:`[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
  APACHE:`[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  ISC:`[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
}
return badges[prjLicense]
}


// TODO: Create a function to generate markdown for README
function generateMarkdown(ans) {
  return `

# ${ans.prjName}
${renderLicenseBadge(ans.prjLicense)}

## Table of Contents
* [Description](#description)
* [Install](#install)
* [Contribution](#contribution)
* [Usage](#usage)
* [Testing](#testing)
* [Questions](#questions)
* [License](#license)


## Description
${ans.prjDesc}

## Install
${ans.prjInstall}

## Contribution
${ans.prjCont}

## Usage
${ans.prjUsage}

## Testing
${ans.prjTest}

## Questions
Please reach out to me though my GitHub or via E-mail with any questions or concerns you may have <br/>
${ans.userEmail} <br/>
[${"github.com/"+ans.gitLink}](https://github.com/${ans.gitLink})

## License
${ans.prjLicense}

`;
}

module.exports = generateMarkdown;