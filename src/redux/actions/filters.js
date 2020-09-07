const setSortBy = (name) => ({
    type: 'SET_SORT_BY',
    payload: name,
});

const setCategory = (ctgIndex) => ({
    type: 'SET_CATEGORY',
    payload: ctgIndex,
});