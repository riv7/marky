export function fetchHasErrored(bool) {
    return {
        type: 'FETCH_HAS_ERRORED',
        hasErrored: bool
    };
}

export function fetchIsLoading(bool) {
    return {
        type: 'FETCH_IS_LOADING',
        isLoading: bool
    };
}

export function fetchDataSuccess(data) {
    return {
        type: 'FETCH_YEAR',
        payload: data
    };
}

export function fetchData(url) {
    return (dispatch) => {
        dispatch(fetchIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(fetchIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((data) => dispatch(fetchDataSuccess(data)))
            .catch(() => dispatch(fetchHasErrored(true)));
    };
}
