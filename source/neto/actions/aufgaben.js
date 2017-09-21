export function aufgabenHasErrored(bool) {
    return {
        type: 'AUFGABEN_HAS_ERRORED',
        hasErrored: bool
    };
}

export function aufgabenIsLoading(bool) {
    return {
        type: 'AUFGABEN_IS_LOADING',
        isLoading: bool
    };
}

export function aufgabenFetchDataSuccess(tasks) {
    return {
        type: 'AUFGABEN_FETCH_DATA_SUCCESS',
        aufgaben: tasks.value
    };
}

export function aufgabenFetchData(url) {
    return (dispatch) => {
        dispatch(aufgabenIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(aufgabenIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((aufgaben) => dispatch(aufgabenFetchDataSuccess(aufgaben)))
            .catch(() => dispatch(aufgabenHasErrored(true)));
    };
}
