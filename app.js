const express = require('express'); // require the express module
const multer = require('multer'); // require the multer module 
const moviesRoutes = require('./routes/movies.js');
const formData = multer(); // call the multer constructor, Catch form-data request
const app = express(); // express app
const port = 3000; // default port

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

// app.post('/', upload.none(), (req, res) => {
    //   console.log(req.body.name)
    // })
    
app.use('/movies', moviesRoutes); // Route for movies


app.listen(port, () => {
  console.log(`Running in ${port}`)
})