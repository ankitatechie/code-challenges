import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import filterData from '../actions/actionCreators';
import Navbar from './Navbar';
import Cover from './Cover';
import Challenges from './Challenges';
import Footer from './footer';

const Home = ({ challenges, filterChallenges }) => {
    return (
        <div>
            <Navbar filterChallenges={filterChallenges} />
            <Cover />
            <Challenges challenges={challenges} />
            <Footer />
        </div>
    );
};

Home.propTypes = {
    challenges: PropTypes.array,
    filterChallenges: PropTypes.func
};

function mapStateToProps(state) {
    return {
        challenges: state.challenges
    };
}

function mapDispatchToProps(dispatch) {
    return {
        filterChallenges: (filter) => {
            dispatch(filterData(filter));
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
