import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import FilterLink from '../containers/FilterLink';

class Navbar extends React.Component {
    constructor() {
        super();
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        const navbar = this.refs.navbar;
        if (document.body.scrollTop >= 60) {
            navbar.classList.add('navbar--dark');
        } else {
            navbar.classList.remove('navbar--dark');
        }
    }

    showNavbar() {
        const mobileNav = this.refs.mobileNavbar;
        if (mobileNav.className.includes('show-nav')) {
            mobileNav.classList.remove('show-nav');
        } else {
            mobileNav.classList.add('show-nav');
        }
    }

    render() {
        const filterChallenges = this.props.filterChallenges;
        return (
            <header className="navbar" ref="navbar">
                <div className="container">
                    <a className="navbar__brand" href="/">
                        <img src="https://hackerearth.global.ssl.fastly.net/static/hackerearth/images/logo/HE_logo.png" />
                    </a>
                    <div className="navbar__filters">
                        <FilterLink />
                    </div>
                    <div className="menu-icon" onClick={() => this.showNavbar()}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div className="mobile-nav" ref="mobileNavbar">
                    <div className="navbar__filters">
                        <FilterLink />
                    </div>
                </div>
            </header>
        );
    }
}

export default Navbar;


