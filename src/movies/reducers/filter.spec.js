import filter from './filters';

describe('filter reducer', () => {
    it('shoud handle initial stata', () => {
        expect(filter(undefined, {})).toEqual({});
    });
    it('should handle SET_FILTER_NAME', () => {
        expect(filter({}, { type: 'SET_FILTER_NAME', name: 'test' })).toEqual({ name: 'test' });
    });
    it('should handle SET_FILTER_ACTOR', () => {
        expect(filter({}, { type: 'SET_FILTER_ACTOR', actorSearch: 'test' })).toEqual({ actorSearch: 'test' });
    });
    it('should handle SET_FILTER_NAME', () => {
        expect(filter({}, { type: 'ORDER_BY_TOGGLE', order: true})).toEqual({ order: true });
    });
});