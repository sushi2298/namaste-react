import React, { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import { Link } from 'react-router';
import UserContext from '../context/UserContext';
import { useSelector } from 'react-redux';

const Header = () => {

    const [login, setLogin] = useState(false);
    const { userName } = useContext(UserContext); 
    const items = useSelector(state => state.cart.items);

    return (
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
            <li>
                <Link to={'/cart'}>Cart{`(${items?.length})`}</Link>
            </li>
            <li>
                <div>{userName}</div>
            </li>
            <li>
                <button onClick={() => setLogin(!login)}>{login ? 'Logout' : 'Login'}</button>
            </li>
        </ul>
    </div>
)}

export default Header;