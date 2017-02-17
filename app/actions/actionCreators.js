const filterChallenges = (filter) => {
    return {
        type: 'FILTER_CHALLENGES',
        filter
    };
};

export default filterChallenges;
