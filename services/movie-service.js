const movieRepository = require('../repositories/movie-repository.js');
class MovieService {
    static async findMovies() {
        return movieRepository.findMovies();
    }
    static async findById(id) {
        return movieRepository.findById(id);
    }
    static async store(params) {
        return movieRepository.store(params);
    }
    static async update(params, where) {
        return movieRepository.update(params, where);
    }
    static async delete(id) {
        return movieRepository.delete(id);
    }
}
module.exports = MovieService;