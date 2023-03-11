const userService = require('../services/user-service.js'); // require the movie service

class UserController {
    static async index(req, res, next) {
        try {
            let data = await userService.findUsers();
            if (data.length > 0) {
                res.status(200).json({
                    data: data
                });
            } else {
                next({ name: "EmptyData" });
            }
        } catch (err) {
            next(err);
        }
    }
    static async findById(req, res, next) {
        try {
            let data = await userService.findById(req.params.id);
            if (data.length > 0) {
                res.status(200).json({
                    data: data
                });
            } else {
                next({ name: "ErrorNotFound" });
            }
        } catch (err) {
            next(err);
        }
    }
    static async store(req, res, next) {
        try {
            let data = await userService.store(req.body);
            if (data.length > 0) {
                res.status(201).json({
                    message: 'User created successfully',
                    data: data
                });
            } else {
                next({ name: "ErrorNotFound" });
            }
        } catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            let data = await userService.update(req.body, { id: req.params.id });
            if (data.length > 0) {
                res.status(200).json({
                    message: 'User updated successfully',
                    data: data
                });
            } else {
                next({ name: "ErrorNotFound" });
            }
        } catch (err) {
            next(err);
        }
    }
    static async destroy(req, res, next) {
        try {
            let data = await userService.delete(req.params.id);
            res.status(200).json({
                message: 'Movie deleted succesfully'
            })
        } catch (err) {
            next(err);
        }
    }
}

module.exports = UserController;