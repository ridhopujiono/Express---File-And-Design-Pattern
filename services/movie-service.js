const movieRepository = require('../repositories/movie-repository.js');
class MovieService{
    static async findMovies(){
        return movieRepository.findMovies();
    }
}
module.exports = MovieService;