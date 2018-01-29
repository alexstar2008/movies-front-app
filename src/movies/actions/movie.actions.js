const API = 'https://webby-movies-app.herokuapp.com/api';

/* Common Handlers */
export const operationSuccess = (info) => {
    return {
        type: 'MOVIE_OPERATION_SUCCESS',
        info
    }
}
export const operationErr = (err) => {
    return {
        type: 'MOVIE_OPERATION_ERR',
        err
    }
}

/* GET MOVIES */
export const getMovies = () => {
    return (dispatch) => {
        dispatch(movieGetLoading());
        fetch(API + '/movies').then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error(`${response.status} (${response.statusText}) while getting data`);
            }
        })
            .then(data => { dispatch(movieGetSuccess(data)); })
            .catch(err => { dispatch(movieGetErr(err)); });
    }
}
export const movieGetLoading = () => {
    return {
        type: 'MOVIE_GET_LOADING'
    }
}
export const movieGetSuccess = (movies) => {
    return {
        type: 'MOVIE_GET_SUCCESS',
        movies
    }
}
export const movieGetErr = (err) => {
    return {
        type: 'MOVIE_GET_ERR',
        err
    }
}

/* ADD MOVIE */
export const addMovie = (movie) => {
    return (dispatch) => {
        fetch(API + '/movies', {
            method: 'POST',
            mode: 'CORS',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => {
                if (res.ok) {
                    return res.json();
                } else
                    throw new Error(`${res.status} (${res.statusText}) while saving data`);
            })
            .then(data => {
                dispatch(operationSuccess(data));
                dispatch(getMovies());
            })
            .catch(err => { dispatch(operationErr(err)); });
    }
};

/* UPLOAD FILE WITH MOVIES */
export const uploadFile = (formData) => {
    return (dispatch) => {
        fetch(API + '/movies/file', {
            method: 'POST',
            mode: 'CORS',
            body: formData
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else
                throw new Error(`${res.status} (${res.statusText}) while saving data`);
        })
            .then(data => {
                dispatch(operationSuccess(data));
                dispatch(getMovies());
            })
            .catch(err => { dispatch(operationErr(err)); });
    }
};

/* REMOVE MOVIE */
export const removeMovie = (id) => {
    return (dispatch) => {
        fetch(`${API}/movies/${id}`, {
            method: 'delete',
            mode: 'cors'
        }).then((response) => {
            if (response.ok)
                return response.json()
            else
                throw new Error(`${response.status} (${response.statusText}) while removing movie`);
        })
            .then(data => {
                dispatch(operationSuccess(data));
                dispatch(getMovies());
            })
            .catch(err => { dispatch(operationErr(err)); });
    }
};
