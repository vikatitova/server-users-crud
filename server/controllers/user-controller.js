const UserService = require('../services/user-service');
const instanceUserService = new UserService();

module.exports = class UserController {
  
    getUsers = (req, res) => {
        try {
            const data = instanceUserService.getUsers();
            return res.status(200).send( data );
        } catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }

    getUser = (req, res) => {
        try {
            const data = instanceUserService.getUser(req, res);
            return res.status(200).send( data );
        } catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }

    addUser = (req, res) => {
        try {
            const data = instanceUserService.addUser(req, res);
            return res.status(200).send( data );
        } catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }

    deleteUser = (req, res) => {
        try {
            const data = instanceUserService.deleteUser(req, res);
            return res.status(200).send( data );
        } catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }

    editUser = (req, res) => {
        try {
            const data = instanceUserService.editUser(req, res);
            return res.status(200).send( data );
        } catch(err) {
            return res.status(500).send({ message: err.message });
        }
    }
}