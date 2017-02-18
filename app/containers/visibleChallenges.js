import { connect } from 'react-redux';
import ChallengesList from '../components/Challenges';
import challengesData from '../data/challenges';

const getVisibleChallenges = (challenges, filter) => {
    switch (filter) {
        case 'SHOW_ALL':
            return challenges
        case 'SHOW_HIRING':
            challenges = challenges.filter(challenge =>
                challenge.challenge_type.split(' ')[0] === 'Hiring'
            );
          return [...challenges];
        case 'SHOW_MONTHLY':
            challenges = challenges.filter(challenge =>
                challenge.challenge_type.split(' ')[0] === 'Monthly'
            );
            return [...challenges];
        default:
            return challenges;
    }
}

const mapStateToProps = (state) => ({
    challenges: getVisibleChallenges(challengesData, state.challenges)
});

const VisibleChallenges = connect(mapStateToProps)(ChallengesList);

export default VisibleChallenges;
