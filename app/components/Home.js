import React, { PropTypes } from 'react';
import Navbar from './Navbar';
import Cover from './Cover';
import VisibleChallenges from '../containers/VisibleChallenges';
import Footer from './footer';

const Home = () => {
    return (
        <div>
            <Navbar />
            <Cover />
            <VisibleChallenges />
            <Footer />
        </div>
    );
};

export default Home;
