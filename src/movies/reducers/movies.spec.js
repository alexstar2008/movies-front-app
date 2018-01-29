import filter from './movies';

describe('movies reducer', () => {
    it('shoud handle initial stata', () => {
        expect(filter(undefined, {})).toEqual({ list: [], isMovieLoading: true });
    });
    it('should handle MOVIE_OPERATION_ERR', () => {
        expect(filter({}, { type: 'MOVIE_OPERATION_ERR', err: 'test err' })).toEqual({ err: 'test err' });
    });
    it('should handle MOVIE_GET_LOADING', () => {
        expect(filter({}, { type: 'MOVIE_GET_LOADING', isMovieLoading: true })).toEqual({ isMovieLoading: true });
    });
    it('should handle MOVIE_GET_SUCCESS', () => {
        expect(filter({}, { type: 'MOVIE_GET_SUCCESS', movies: [], isMovieLoading: false })).toEqual({ list: [], isMovieLoading: false });
    });
    it('should handle MOVIE_GET_ERR', () => {
        expect(filter({}, { type: 'MOVIE_GET_ERR', err: 'test err', isMovieLoading: false })).toEqual({ err: 'test err', isMovieLoading: false });
    });
});