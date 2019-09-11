import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title}) => {
    return (
        <nav className= 'navbar bg-primary'>
            <h1>
                {title}
            </h1>
        </nav>
    );
}

Navbar.defaultProps = {
    title: 'LetsMoveHomie',
};

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}

export default Navbar