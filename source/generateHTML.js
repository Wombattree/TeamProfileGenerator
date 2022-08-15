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
		  <link rel="stylesheet" href="../styling/reset.css"/>
		  <link rel="stylesheet" href="../styling/style.css"/>
		  
		  <title>My Team</title>
		</head>
	  
		<body>
		  <header>
			  <h1>My Team</h1>
		  </header>
	  
		<div id="teamContainer">
			<div class="row g-2">${employeesHTMLString}</div>
		</div>

		</body>
	  </html>`;
}

function GenerateEmployeeHTML(employee)
{
	let employeeUniqueString;
	let employeeRole = employee.GetRole();

	if (employeeRole === "Manager")
	{
		employeeUniqueString = `Office Number: ${employee.GetOfficeNumber()}`;
	}
	else if (employeeRole === "Engineer")
	{
		let username = employee.GetGithubUsername();
		employeeUniqueString = `Github: <a href="https://github.com/${username}">${username}</a>`;
	}
	if (employeeRole === "Intern")
	{
		employeeUniqueString = `School: ${employee.GetSchool()}`;
	}

	return `<div class="col-4">
	<div class="employeeCard">
	  	<div class="employeeCardInterior">
  
			<div class="employeeCardHeader">
				<div class="employeeName">${employee.GetName()}</div>
				<div class="employeeRole">${employeeRole}</div>
			</div>
	
			<ul>
				<li class="employeeInfo">ID: ${employee.GetID()}</li>
				<li class="employeeInfo">Email: <a href="https://github.com/${employee.GetEmail()}">${employee.GetEmail()}</a></li>
				<li class="employeeInfo">${employeeUniqueString}</li>
			</ul>

			</div>
		</div>
  	</div>`;
}

exports.GenerateHTML = GenerateHTML;