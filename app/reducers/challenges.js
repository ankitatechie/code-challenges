import challenges from '../data/challenges';

const challengesReducer = (state = challenges, action) => {
    switch (action.type) {
        case 'FILTER_CHALLENGES':
            const filteredData = [];
            state.map(function(data) {
                if (data.challenge_type.split(' ')[0] === action.filter) {
                    filteredData.push(data);
                }
            });
            return [...filteredData];
        default:
            return state;
    }
};

export default challengesReducer;
