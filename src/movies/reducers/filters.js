const filter = (store = {}, action) => {
    switch (action.type) {
        case 'SET_FILTER_NAME': {
            return { ...store, name: action.name };
        }
        case 'SET_FILTER_ACTOR': {
            return { ...store, actorSearch: action.actorSearch }
        }
        case 'ORDER_BY_TOGGLE': {
            return { ...store, order: action.order }
        }
        default: return store
    }
}

export default filter;