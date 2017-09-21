export function aufgabenHasErrored(state = false, action) {
    switch (action.type) {
        case 'AUFGABEN_HAS_ERRORED':
            return action.hasErrored;

        default:
            return state;
    }
}

export function aufgabenIsLoading(state = false, action) {
    switch (action.type) {
        case 'AUFGABEN_IS_LOADING':
            return action.isLoading;

        default:
            return state;
    }
}

export function aufgaben(state = [], action) {
    switch (action.type) {
        case 'AUFGABEN_FETCH_DATA_SUCCESS':
            return action.aufgaben;

        default:
            return state;
    }
}
