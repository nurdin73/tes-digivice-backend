const models = require('../models')
const Sequelize = require("sequelize");
const Op = Sequelize.Op;

const movies = models.movies
const listGenres = models.listgenres
const genres = models.genres
const publishers = models.publishers

const {listMovies, listMovie} = require('../helpers/movie')

const date = new Date();
date.setDate(date.getDate() + 1 );
date.setMonth(date.getMonth());
let bln = date.getMonth() + 1;
if (bln < 10) {
  bln = "0" + bln;
} else {
  bln = bln;
}
let hari = date.getDate();
if (hari < 10) {
  hari = "0" + hari;
} else {
  hari = hari;
}

let tgl = date.getFullYear() + "-" + bln + "-" + hari;

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
    })
}

exports.getReleased = (req,res) => {
    movies.findAll({
        where: {
            dateReleased: {
                [Op.substring]: req.params.date
            },
            status: 'released'
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
    })
}
exports.trending = (req,res) => {
    movies.findAll({
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
    })
}