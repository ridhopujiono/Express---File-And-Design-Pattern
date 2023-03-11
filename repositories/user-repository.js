const userModel = require('../models/user-model.js');
class UserRepository {
    static async findUsers() {
        return userModel.findUsers();
    }
    static async findById(id) {
        return userModel.findById(id);
    }
    static async store(params) {
        return userModel.store(params);
    }
    static async update(params, where) {
        return userModel.update(params, where);
    }
    static async delete(id) {
        return userModel.delete(id);
    }
}
module.exports = UserRepository;