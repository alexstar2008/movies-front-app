import * as action from './movie.actions';

describe('move actions',()=>{
    it('operationSuccess should create MOVIE_OPERATION_SUCCESS reducer',()=>{
        expect(action.operationSuccess()).toEqual({
            type: 'MOVIE_OPERATION_SUCCESS',
            info: undefined
        });
    });
    it('operationErr should create MOVIE_OPERATION_ERR reducer',()=>{
        expect(action.operationErr()).toEqual({
            type: 'MOVIE_OPERATION_ERR',
            err: undefined
        });
    });
});