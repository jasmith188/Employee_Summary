const Manager = require("./Develop/lib/Manager");
const Engineer = require("./Develop/lib/Engineer");
const Intern = require("./Develop/lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./Develop/lib/htmlRenderer");

const renderArray = [];
//create team ofor office
const createTeam = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "What is the employee's position",
                name: "employeeChoice",
                choices: [
                    "manager",
                    "Intern",
                    "Engineer",
                ]

            }     
       ])
       .then(userChoice => {
           switch (userChoice.employeeChoice) {
               case "Manager":
               addManager();
               break;

               case "Intern":
                addIntern();
                break

                case "Engineer":
                addEngineer();
                break
           }
       })
const addTeamMember = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "What is the employee's name",
                name: "name",
            },
            {
                type: "input",
                message: "What is the Employee's ID",
                name: "ID",
            },
            {
                type: "input",
                message: "What is the employe's Email",
                name: "email",
            },
            {
                type: "input",
                message: "Manager's Office Number",
                name: "Office Number",
            }
        ])
}

const addIntern = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Itern's Name",
                name: "name",
            },
            {
                type: "input",
                message: "Intern's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Intern's email",
                name: "email",
            },
            {
                type: "input",
                message: "Intern's school",
                name: "school",
            },
        ])
}
const addEngineer = () => {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Engineer's Name",
                name: "name",
            },
            {
                type: "input",
                message: "Engineer's ID",
                name: "id",
            },
            {
                type: "input",
                message: "Engineer's email",
                name: "email",
            },
            {
                type: "input",
                message: "Engineer's GitHub",
                name: "github",
            }
        ])
}
const buildTeam = () => {

}
const html = render(renderArray);
fs.writeFile("", html, err => {

})

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an 
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
