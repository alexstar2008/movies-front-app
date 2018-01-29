
const movies = (state = {list: [],isMovieLoading:true}, action) => {
    switch (action.type) {
        case 'MOVIE_OPERATION_SUCCESS': {
            return { ...state, info: action.info }
        }
        case 'MOVIE_OPERATION_ERR': {
            return { ...state, err: action.err }
        }
        case 'MOVIE_GET_LOADING' : {
            return {...state,isMovieLoading:true}
        }
        case 'MOVIE_GET_SUCCESS': {
            return {...state,list:action.movies,isMovieLoading:false};
        }
        case 'MOVIE_GET_ERR': {
            return {...state,err:action.err,isMovieLoading:false};
        }
        default: return state
    }
};

export default movies;