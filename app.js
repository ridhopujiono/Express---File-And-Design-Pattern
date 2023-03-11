const express = require('express'); // require the express module
const path = require('path'); // require the express module
const moviesRoutes = require('./routes/movie-router.js');
const errorHandler = require('./error/error-handler.js');
const app = express(); // express app
const port = 3000; // default port

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use('/movies', moviesRoutes); // Route for movies
app.use(errorHandler); // Route for movies
app.use('/upload', express.static(path.join(__dirname, '/uploads'))); // Show file


app.listen(port, () => {
  console.log(`Running in ${port}`)
})