import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Filters = ({ onChange }) => {
    return (
        <div>
            <span className="navbar__filters-item">
                <input type="radio" name="filters" id="all" onChange={() => onChange('SHOW_ALL')} />
                <label htmlFor="all">All Challenges</label>
            </span>
            <span className="navbar__filters-item">
                <input type="radio" name="filters" id="monthly" onChange={() => onChange('SHOW_MONTHLY')} />
                <label htmlFor="monthly">Monthly Challenges</label>
            </span>
            <span className="navbar__filters-item">
                <input type="radio" name="filters" id="hiring" onChange={() => onChange('SHOW_HIRING')} />
                <label htmlFor="hiring">Hiring Challenges</label>
            </span>
        </div>
    );
};

Filters.propTypes = {
    onChange: PropTypes.func
};

export default Filters;


