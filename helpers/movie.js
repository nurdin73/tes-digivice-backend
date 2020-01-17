const formatDate = date => {
    let month = date.getMonth() + 1;
    let tgl = date.getDate()
    tgl = tgl < 10 ? '0' + tgl : tgl
    return (
      date.getFullYear() +
      "-" +
      month +
      "-" +
      tgl
    );
  };
exports.listMovies = data => {
    const movies = data.map(result => {
        let movie = {
            id: result.id,
            title: result.title,
            poster: result.poster,
            publisher: result.publisher.companyName,
            overview: result.overview,
            rating: result.rating,
            dateReleased: formatDate(result.dateReleased),
            status: result.status,
            genres: result.genres.map(genre => {
              let genres = {
                id: genre.id,
                name: genre.name 
              }
              return genres
            })
        }
        return movie
    })
    return movies;
}

exports.listMovie = data => {
  let movie = {
    id: data.id,
    title: data.title,
    poster: data.poster,
    publisher: data.publisher.companyName,
    overview: data.overview,
    rating: data.rating,
    dateReleased: formatDate(data.dateReleased),
    status: data.status,
    genres: data.genres.map(genre => {
      let genres = {
        id: genre.id,
        name: genre.name 
      }
      return genres
    })
  }
  return movie
}