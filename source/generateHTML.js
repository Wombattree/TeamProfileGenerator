function GenerateHTML(employees)
{
	let employeesHTMLString = "";
	for (let i = 0; i < employees.length; i++) 
	{
		employeesHTMLString += GenerateEmployeeHTML(employees[i]);
	}

  	return `<!DOCTYPE html>
	  <html lang="en">
		<head>
		  <meta charset="UTF-8" />
		  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
		  <meta http-equiv="X-UA-Compatible" content="ie=edge" />
	  
		  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"/>
		  <link rel="stylesheet" href="./reset.css"/>
		  <link rel="stylesheet" href="./testCSS.css"/>
		  
		  <title>Your Team</title>
		</head>
	  
		<body>
		  <header>
			  <h1>Your Team</h1>
		  </header>
	  
		  <div id="teamContainer">
			  <div id="bodyContentContainer">${employeesHTMLString}</div>
		  </div>
		</body>
	  </html>;`
}

function GenerateEmployeeHTML(employee)
{
	let employeeUniqueString;
	let employeeRole = employee.GetRole();

	if (employeeRole === "Manager")
	{
		employeeUniqueString = `<div>Office Number: ${employee.GetOfficeNumber()}</div>`;
	}
	else if (employeeRole === "Engineer")
	{
		let username = employee.GetGithubUsername();
		employeeUniqueString = `<div>Github: <a href="https://github.com/${username}">${username}</a></div>`;
	}
	if (employeeRole === "Intern")
	{
		employeeUniqueString = `<div>School: ${employee.GetSchool()}</div>`;
	}

	return `<div class=col-4 employeeCard>
		<div class=employeeCardHeader>
			<div>${employee.GetName()}</div>
			<div>${employeeRole}</div>
		</div>
		<div>${employee.GetID()}</div>
		<div>${employee.GetEmail()}</div>
		${employeeUniqueString}
	</div>`;
}

exports.GenerateHTML = GenerateHTML;