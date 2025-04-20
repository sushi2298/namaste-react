import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';

const Header = () => (
    <div className='main-header'>
        <img className='header-icon' src={LOGO_URL} />
        <ul>
            <li>
                <Link to={'/'}>Home</Link>
            </li>
            <li>
                <Link to={'/about'}>About</Link>
            </li>
            <li>
                <Link to={'/contact'}>Contact</Link>
            </li>
            <li>
                <Link to={'/help'}>Help</Link>
            </li>
            <li>
                <Link to={'/grocery'}>Grocery</Link>
            </li>
            
        </ul>
    </div>
)

export default Header;