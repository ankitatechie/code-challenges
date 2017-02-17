import React, { PropTypes } from 'react';
import { Link } from 'react-router';

class ChallengeBox extends React.Component {
    render() {
        const challenges = this.props.challenges;
        return (
            <div>
                {
                    challenges.map((challenge, index) => {
                        return (
                            <li className="challenge-box" key={index}>
                                <a className="challenge-box__wrapper" href={challenge.url} target="_blank">
                                    <img className="challenge-box__img" src={challenge.thumbnail} />
                                    <span className="challenge-box__label">{challenge.challenge_type.split(' ')[0]}</span>
                                    <div className="challenge-box__body">
                                        <div className="challenge-name">{challenge.title}</div>
                                        <div className="challenge-date">
                                            <span>Ends on: </span>
                                            <span className="challenge-date--light">{challenge.end_timestamp}</span>
                                        </div>
                                    </div>
                                </a>
                                <a className="challenge-box__footer" href={challenge.subscribe}>
                                    {
                                        challenge.status === 'ONGOING' ? 'start now' : 'register now'
                                    }
                                </a>
                            </li>
                        );
                    })
                }
            </div>
        );
    }
}

ChallengeBox.propTypes = {
    challenges: PropTypes.array
};

export default ChallengeBox;
