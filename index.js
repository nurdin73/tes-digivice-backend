require("express-group-routes");
const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());


const movieControllers = require('./controllers/movies');
const genreControllers = require('./controllers/genres')

app.get('/', (req,res) => {
    res.send('welcome to my api movie') // greeting
})
app.group('/api/v1', router => {
    // get all movie
    router.get('/movies', movieControllers.index)
    // get detail movie
    router.get('/movie/:id', movieControllers.detail)
    // get movie released today
    router.get('/movies/:date', movieControllers.getReleased)
    // get all movie trending
    router.get('/trending', movieControllers.trending)

    // add movie
    router.post('/movie', movieControllers.post)
    // add genre
    router.post('/genre', genreControllers.post)
    // add list genre movie
    router.post('/genre/list', genreControllers.list)
    // add publisher 
    router.post('/publisher', movieControllers.publisher)


    // get Genres
    router.get('/genres', genreControllers.index)
    // get detail genre
    router.get('/genre/:id', genreControllers.detail)
    // get movie by genre
    router.get('/genre/:id/movies', genreControllers.listMovieByGenre)

})

app.listen(port, console.log(`Listen to port ${port}`));