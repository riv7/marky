export function hasErrored(state = false, action) {
    switch (action.type) {
        case 'FETCH_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function isLoading(state = false, action) {
    switch (action.type) {
        case 'FETCH_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}