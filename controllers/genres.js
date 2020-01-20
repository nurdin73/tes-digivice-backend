const models = require('../models')
const movies = models.movies
const listgenres = models.listgenres
const genres = models.genres
const publishers = models.publishers
const {listMovies} = require('../helpers/movie')
const {listGenres, listGenre} = require('../helpers/genre')

// get genres
exports.index = (req,res) => {
    genres.findAll().then(result => {
        if(result.length) {
            res.status(200).json(listGenres(result))
        } else {
            res.send({
                status: false,
                message: 'Genre not found'
            })
        }
    })
}

// get detail genre
exports.detail = (req,res) => {
    genres.findOne({
        where: {
            id: req.params.id
        }
    }).then(result => {
        if(result) {
            res.status(200).json(listGenre(result))
        } else {
            res.send({
                status: false,
                message: 'genre not found'
            })
        }
    })
}

exports.listMovieByGenre = (req,res) => {
    movies.findAll({
        include: [
            {
                model: publishers,
                as: 'publisher'
            },
            {
                model: genres,
                as: 'genres',
                through: {
                    model: listgenres,
                },
                where: {
                    id: req.params.id
                },
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(result => {
        if(result) {
            res.status(200).json(listMovies(result))
        } else {
            res.send({
                status: false,
                message: 'movie in this genre is not found'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}

exports.post = (req,res) => {
    genres.create(req.body).then(result => res.send(result))
}
exports.list = (req,res) => {
    listgenres.create(req.body).then(result => res.send(result))
}