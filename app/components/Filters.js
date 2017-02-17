import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Filters = () =>
    <div>
        <span className="navbar__filters-item">
            <input type="checkbox" value="monthly" onChange={() => this.props.filterChallenges('Monthly')}  />
            <label name="monthly">Monthly Challenges</label>
        </span>
        <span className="navbar__filters-item">
            <input type="checkbox" value="hiring" onChange={() => this.props.filterChallenges('Hiring')} />
            <label name="hiring">Hiring Challenges</label>
        </span>
    </div>;

export default Filters;


