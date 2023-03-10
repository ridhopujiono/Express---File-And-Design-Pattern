const express = require('express'); // require the express module
const router = express.Router(); // express router
const movieService = require('../services/movie-service.js'); // require the movie service


router.get('/', movieService);