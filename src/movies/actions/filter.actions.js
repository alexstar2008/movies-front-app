/* FILTER */
export const setFilterName = (name) => ({
    type: 'SET_FILTER_NAME',
    name
});
export const setFilterActor = (actorSearch) => ({
    type: 'SET_FILTER_ACTOR',
    actorSearch
});
export const orderBy = (order) => ({
    type: 'ORDER_BY_TOGGLE',
    order
});