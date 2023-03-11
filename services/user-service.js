const userRepository = require('../repositories/user-repository.js');
class UserService {
    static async findUsers() {
        return userRepository.findUsers();
    }
    static async findById(id) {
        return userRepository.findById(id);
    }
    static async store(params) {
        return userRepository.store(params);
    }
    static async update(params, where) {
        return userRepository.update(params, where);
    }
    static async delete(id) {
        return userRepository.delete(id);
    }
}
module.exports = UserService;