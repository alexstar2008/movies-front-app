import * as action from './filter.actions';

describe('filter actions', () => {
    it('setFilterName should create SET_FILTER_NAME reducer', () => {
        expect(action.setFilterName('test')).toEqual({
            type: 'SET_FILTER_NAME',
            name: 'test'
        });
    });
    it('setFilterActor should create SET_FILTER_ACTOR reducer', () => {
        expect(action.setFilterActor('actor')).toEqual({
            type: 'SET_FILTER_ACTOR',
            actorSearch: 'actor'
        });
    });
    it('orderBy should create ORDER_BY_TOGGLE reducer', () => {
        expect(action.orderBy(true)).toEqual({
            type: 'ORDER_BY_TOGGLE',
            order: true
        });
    })
});