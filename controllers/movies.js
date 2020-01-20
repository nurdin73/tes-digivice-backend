const models = require('../models')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const movies = models.movies
const listGenres = models.listgenres
const genres = models.genres
const publishers = models.publishers
const stats = models.stats

const {listMovies, listMovie} = require('../helpers/movie')

exports.index = (req,res) => {
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
                    model: listGenres,
                }
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(movie => {
        if(movie.length) {
            res.status(200).json(listMovies(movie))
        } else {
            res.send({
                status: false,
                message: 'Movie not found'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}
exports.detail = (req,res) => {
    movies.findOne({
        where: {
            id: req.params.id
        },
        include: [
            {
                model: publishers,
                as: 'publisher'
            },
            {
                model: genres,
                as: 'genres',
                through: {
                    model: listGenres,
                }
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(result => {
        if(result) {
            res.status(200).json(listMovie(result))
        } else { 
            res.send({
                status: false,
                message: 'movie is not found'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}

exports.getReleased = (req,res) => {
    movies.findAll({
        where: {
            statsId: 1,
            nowPlaying: true
        },
        include: [
            {
                model: publishers,
                as: 'publisher'
            },
            {
                model: genres,
                as: 'genres',
                through: {
                    model: listGenres,
                }
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(result => {
        if(result.length) {
            res.status(200).json(listMovies(result))
        } else {
            res.send({
                status: false,
                message: 'no movie playing'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}
exports.trending = (req,res) => {
    movies.findAll({
        where: {
            rating: {
                [Op.between] : [85,100]
            },
            statsId: 1,
        },
        order: [
            ['rating', 'DESC']
        ],
        include: [
            {
                model: publishers,
                as: 'publisher'
            },
            {
                model: genres,
                as: 'genres',
                through: {
                    model: listGenres,
                }
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(result => {
        if(result.length) {
            res.status(200).json(listMovies(result))
        } else {
            res.send({
                status: false,
                message: 'no movie trending'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}

exports.search = (req,res) => {
    movies.findAll({
        where: {
            title: {
                [Op.like]: `%${req.params.search}%`
            }
        },
        include: [
            {
                model: publishers,
                as: 'publisher'
            },
            {
                model: genres,
                as: 'genres',
                through: {
                    model: listGenres,
                }
            },
            {
                model: stats,
                as: 'stat'
            }
        ],
    }).then(result => {
        if(result.length) {
            res.status(200).json(listMovies(result))
        } else {
            res.send({
                status: false,
                message: 'Movie not found'
            })
        }
    }).catch(err => {
        res.send(err)
    })
}


exports.getStats = (req,res) => {
    stats.findAll().then(result => res.send(result))
}

exports.post = (req,res) => {
    movies.create(req.body).then(result => res.send(result))
}
exports.publisher = (req,res) => {
    publishers.create(req.body).then(result => res.send(result))
}
exports.stats = (req,res) => {
    stats.create(req.body).then(result => res.send(result))
}