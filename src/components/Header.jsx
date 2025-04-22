import React from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';

const Header = () => (
    <div className='flex justify-between shadow-2xl items-center'>
        <img className='w-16 h-16 p-2' src={LOGO_URL} />
        <ul className='flex p-4 gap-4'>
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