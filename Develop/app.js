const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const officeMembers = [];
const renderArray = [];

//create team ofor office
function officePage() {

    function createManager() {
        console.log("Build your team");
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "What is the employee's name",
                    name: "name",
                    validate: answer => {
                        if (answer === "") {
                            return "Enter employee's name";
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    message: "What is the Employee's ID",
                    name: "ID",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return true;
                        }
                        return "Enter Employee's ID"
                    }
                },
                {
                    type: "input",
                    message: "What is the employe's Email",
                    name: "email",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/
                        );
                        if (answer === "") {
                            return "Enter Employee's email";
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    message: "Manager's Office Number",
                    name: "office",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (answer === "") {
                            return "Enter Employee's Office Number";
                        }
                        return true
                    }
                }
            ])
            .then(answers => {
                const manager = new Manager(answers.name, answers.id, answers.email, answers.office);
                officeMembers.push(manager);
                renderArray.push(answers.id);
                createTeam();


            });
    }

    function createTeam() {

        inquirer
            .prompt([
                {
                    type: "list",
                    message: "What is the employee's position",
                    name: "employeeChoice",
                    choices: [
                        "Manager",
                        "Intern",
                        "Engineer",
                    ]

                }
            ])
            .then(answer => {
                switch (answer.employeeChoice) {
                    case "Engineer":
                        addEngineer();
                        break;

                    case "Intern":
                        addIntern();
                        break

                    default:
                        buildTeam();
                        break
                }
            })
    }


    function addIntern() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Itern's Name",
                    name: "name",
                    validate: answer => {
                        if (answer === "") {
                            return "Enter Itern's name";
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    message: "Intern's ID",
                    name: "id",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return "Enter Intern's ID";
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    message: "Intern's email",
                    name: "email",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/
                        );
                        if (answer === "") {
                            return "Enter Intern's email";
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    message: "Intern's school",
                    name: "school",
                    validate: answer => {
                        if (answer === "") {
                            return "Enter Intern's School";
                        }
                        return true;
                    }

                }]
            )
            .then(answers => {
                const manager = new Intern(answers.name, answers.id, answers.email, answers.office);
                officeMembers.push(intern);
                renderArray.push(answers.id);
                createTeam();
            });
    }

    function addEngineer() {
        inquirer
            .prompt([
                {
                    type: "input",
                    message: "Engineer's Name",
                    name: "name",
                    validate: answer => {
                        if (answer === "") {
                            return "Enter Engineer's name";
                        }
                        return true;
                    }
                },
                {
                    type: "input",
                    message: "Engineer's ID",
                    name: "id",
                    validate: answer => {
                        const pass = answer.match(
                            /^[1-9]\d*$/
                        );
                        if (pass) {
                            return "Enter Engineer's ID";
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    message: "Engineer's email",
                    name: "email",
                    validate: answer => {
                        const pass = answer.match(
                            /\S+@\S+\.\S+/
                        );
                        if (answer === "") {
                            return "Enter Engineer's email";
                        }
                        return true
                    }
                },
                {
                    type: "input",
                    message: "Engineer's GitHub",
                    name: "github",
                    validate: answer => {
                        if (answer === "") {
                            return "Enter Engineer's GitHub account name";
                        }
                        return true;
                    }
                }
            ])
            .then(answer => {
                const manager = new Engineer(answers.name, answers.id, answers.email, answers.github);
                renderArray.push(answers.id);
                createTeam();
            });
    }
    function buildTeam() {
        fs.writeFile("", html, err => {
            const html = render(renderArray);
        })
    createManager();
}


officePage();

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
// for the provided `render` function to work!