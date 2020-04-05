// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email, gitHubInfo){
        super(name, id, email)
        this.github = gitHubInfo;
    };
    getGithub(){
        return this.github;
    }
    getRole() {
        return "Manager"
    }
}

module.exports = Engineer;