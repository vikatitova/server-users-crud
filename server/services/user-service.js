const fs = require("fs");

module.exports = class UserService {

    constructor () {
        this.users = this.getUsersFromFile();
    }
    
    getUsersFromFile() {
        const content = fs.readFileSync("users.json", "utf8");
        return JSON.parse(content);
    }

    getUsers = () => this.users;

    getUser = (req) => this.users.filter(user => user.id === Number(req.params.id))[0];

    addUser = (req) => {
        const user = req.body; 

        user.id = (this.users.length === 0)
        ? 1
        : Math.max(...this.users.map((user)=> user.id)) + 1;
    
        this.users.push(user);
        
        fs.writeFileSync("users.json", JSON.stringify(this.users));
        return user;

    }

    deleteUser = (req) => {
        
        const user = this.users.filter(user => user.id === Number(req.params.id))[0];

        this.users = this.users.filter(user => user.id !== Number(req.params.id));

        fs.writeFileSync('users.json',JSON.stringify(this.users));
        
        return user;
    }

    editUser = (req) => {

        this.users.forEach(user => {
            if(user.id === Number(req.body.id)){
                user.name = req.body.name;
                user.age = req.body.age;
            }
        });

        fs.writeFileSync("users.json", JSON.stringify(this.users));
        return req.body;

    }

}