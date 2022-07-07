export function movieListDataCreator (state, responseData, setter) {
    if (state === null) {
        setter(responseData);

    } 
    else {

        const stateIds = state.map(item => item.id);

        const matchСheck = responseData.find(item => stateIds.includes(item.id));

        if (!matchСheck) {
            setter([...state, ...responseData]);
        };
    }; 
};