exports.listGenres = data => {
    const genres = data.map(item => {
        let genre = {
            id: item.id,
            name: item.name
        }
        return genre
    })
    return genres
}

exports.listGenre = data => {
    let genre = {
        id: data.id,
        name: data.name
    }
    return genre
}