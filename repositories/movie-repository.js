const movieModel = require('../models/movie-model.js');
class MovieRepository {
    static async findMovies() {
        return movieModel.findMovies();
    }
    static async findById(id) {
        return movieModel.findById(id);
    }
    static async store(params) {
        return movieModel.store(params);
    }
    static async update(params, where) {
        return movieModel.update(params, where);
    }
    static async delete(id) {
        return movieModel.delete(id);
    }
}
module.exports = MovieRepository;