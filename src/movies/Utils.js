function sort(movies, type) {
    const direction = type ? 1 : -1;
    return movies.slice(0).sort((a, b) => {
        if (a.name === b.name)
            return 0;
        if (a.name < b.name)
            return -1 * direction;
        return direction;
    });
}

function getMoviesWithFilter(movies, filter) {
    if (!movies.length)
        return;

    const actorSearch = filter.actorSearch;
    const name = filter.name;
    const order = filter.order;

    if (actorSearch) {
        movies = movies.filter(movie =>
            movie.actors.some(actor => actor.toLowerCase().includes(actorSearch)));
    }

    if (name) {
        movies = movies.filter(movie => movie.name.toLowerCase().includes(name))
    }

    if (typeof order === 'boolean') {
        movies = sort(movies, order);
    }
    return movies;
}

export default { getMoviesWithFilter };