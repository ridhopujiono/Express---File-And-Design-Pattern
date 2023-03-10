const movieModel = require('../models/movie-model.js');
class MovieRepository{
    static async findMovies(){
        return await movieModel.findMovies();
    }
}
module.exports = MovieRepository;