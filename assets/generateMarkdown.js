class LicenseInformation
{
	constructor(name, versionNumber, badge, url)
	{
		this.name = name;
		this.versionNumber = versionNumber;
		this.badge = badge;
		this.url = url;
	}
}

function GetLicenseInformation(licenseType)
{
	switch (licenseType)
	{
		case "mit": return new LicenseInformation("MIT", "", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)", "https://opensource.org/licenses/MIT");
		case "gpl-2.0": return new LicenseInformation("GNU GPL", "version 2","[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)", "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html");
		case "gpl-3.0": return new LicenseInformation("GNU GPL", "version 3","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)", "https://www.gnu.org/licenses/gpl-3.0");
		case "agpl-3.0": return new LicenseInformation("GNU AGPL", "version 3","[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)", "https://www.gnu.org/licenses/agpl-3.0");
		case "lgpl-3.0": return new LicenseInformation("GNU LGPL", "version 3","[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)", "https://www.gnu.org/licenses/lgpl-3.0");
		case "apache-2.0": return new LicenseInformation("Apache", "version 2","[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)", "https://opensource.org/licenses/Apache-2.0");
		case "bsl-1.0": return new LicenseInformation("Boost Software", "version 1","[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)", "https://www.boost.org/LICENSE_1_0.txt");
		case "bsd-2-clause": return new LicenseInformation("BSD 2-Clause Simplified", "","[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)", "https://opensource.org/licenses/BSD-2-Clause");
		case "bsd-3-clause": return new LicenseInformation("BSD 3-Clause New", "","[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)", "https://opensource.org/licenses/BSD-3-Clause");
		case "cc0-1.0": return new LicenseInformation("Creative Commons Zero Universal", "version 1","[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)", "http://creativecommons.org/publicdomain/zero/1.0/");
		case "epl-2.0": return new LicenseInformation("Eclipse Public", "version 2","[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)", "https://opensource.org/licenses/EPL-1.0");
		case "mpl-2.0": return new LicenseInformation("Mozilla Public", "version 2","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)", "https://opensource.org/licenses/MPL-2.0");
		case "unlicense": return new LicenseInformation("The Unlicense", "","[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)", "http://unlicense.org/");

		default: return null;
	}
}

function GenerateMarkdownString(data) 
{
	let licenseInformation = GetLicenseInformation(data.liscenseType);
  	return `# ${data.projectTitle}

${licenseInformation.badge}

## Description
${data.description}

<br/>

## Table Of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributors](#contributors)
- [Tests](#tests)
- [Contact](#contact)

<br/>

## Installation
Run the following command to install necessary dependencies:
~~~
${data.installationCommand}
~~~

<br/>

## Usage
${data.usageInformation}

<br/>

## License
This project is licensed under the ${licenseInformation.name} ${licenseInformation.versionNumber} license.

<br/>

## Contributors
${data.contributors}

<br/>

## Tests
Run the following command for tests:
~~~
${data.testCommand}
~~~

<br/>

## Contact
If you have any questions about the repo, open an issue or contact me directly at [${data.email}](mailto:${data.email}). You can find more of my work at [my repo](https://github.com/${data.github}).
`;
}

exports.GenerateMarkdownString = GenerateMarkdownString;