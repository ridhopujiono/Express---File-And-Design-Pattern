const path = require('path');
const rootDir = path.dirname(__dirname); // get root
const multer = require('multer'); // require the multer module 
const movieService = require('../services/movie-service.js'); // require the movie service

// Init multer upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(rootDir, "/uploads"));
    },
    filename: function (req, file, cb) {
        cb(
            null,
            file.fieldname + "-" + Date.now() + path.extname(file.originalname)
        );
    },
});
let upload = multer({
    storage
}).single('photo');
// 

class MovieController {
    static async index(req, res, next) {
        try {
            let data = await movieService.findMovies();
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
            let data = await movieService.findById(req.params.id);
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
            upload(req, res, async (err) => {
                const { title, genres, year } = req.body

                if (!req.file) {
                    next({ name: "FileNotSelected" })
                } else {
                    let { filename } = req.file;
                    if (!title || !genres || !year || !filename) {
                        next({ name: "ErrorFillColumn" })
                    } else {
                        filename = `http://127.0.0.1:3000/upload/${filename}`;
                        let bodyParam = {
                            title: title,
                            genres: genres,
                            year: year,
                            photo: filename
                        }
                        let data = await movieService.store(bodyParam);
                        if (data.length > 0) {
                            res.status(200).json({
                                message: "Movie added successfully",
                                data: data
                            });
                        } else {
                            next({ name: "ErrorNotFound" });
                        }
                    }
                }

            })
        } catch (err) {
            next(err);
        }
    }
    static async update(req, res, next) {
        try {
            upload(req, res, async (err) => {
                if (req.file) {
                    let { filename } = req.file;
                    filename = `http://127.0.0.1:3000/upload/${filename}`;
                    req.body.photo = filename;
                }
                let data = await movieService.update(req.body, { id: req.params.id });
                res.status(200).json({
                    message: "Movie updated successfully",
                    data: data
                });
            })
        } catch (err) {
            next(err);
        }
    }
    static async destroy(req, res, next) {
        try {
            let data = await movieService.delete(req.params.id);
            res.status(200).json({
                message: 'Movie deleted succesfully'
            })
        } catch (err) {
            next(err);
        }
    }
}

module.exports = MovieController;