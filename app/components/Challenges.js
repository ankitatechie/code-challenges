import React, { PropTypes } from 'react';
import ChallengeBox from './ChallengeBox';

class Challenges extends React.Component {
    render() {
        const challenges = this.props.challenges;
        const liveArr = [];
        const upcomingArr = [];

        challenges.forEach((challenge, i) => {
            if (challenge.status === 'ONGOING') {
                liveArr.push(challenge);
            } else if (challenge.status === 'UPCOMING') {
                upcomingArr.push(challenge);
            }
        });

        return (
            <div className="container">
                <section className="block">
                    {
                        liveArr.length > 0 ? (
                            <div>
                                <h1 className="block__heading">Ongoing Challenges</h1>
                                <ul className="challenges">
                                    <ChallengeBox challenges={liveArr} />
                                </ul>
                            </div>
                        ) : ''
                    }
                    {
                        upcomingArr.length > 0 ? (
                            <div>
                                <h1 className="block__heading">Upcoming Challenges</h1>
                                <ul className="challenges">
                                    <ChallengeBox challenges={upcomingArr} />
                                </ul>
                            </div>
                        ) : ''
                    }
                </section>
            </div>
        );
    }
}

Challenges.propTypes = {
    challenges: PropTypes.array
};

export default Challenges;
