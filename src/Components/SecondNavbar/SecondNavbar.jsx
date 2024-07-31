import React, { useEffect, useContext ,useState } from 'react';
import './SecondNavbar.css';
import { RxDividerVertical } from "react-icons/rx";
import { Link } from 'react-router-dom';
import SearchBar2 from '../SearchBar/SearchBar2';
import { CartContext } from '../../Context/CartContext';

const SecondNavbar = () => {
    const { getTotalQuantityInCart, quantity } = useContext(CartContext);
    console.log(quantity);
    const [menu, setMenu] = useState('shop');

    
    const fetchCart = async () => {
        try {
            await getTotalQuantityInCart();
        } catch (error) {
            console.error('Failed to fetch cart. Please try again later.');
        }
    };
    return (
        <>
            <div className="nav-header">
                <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <p>XUN_DON</p>
                </Link>
            </div>
            <div className={`navbar1`}>
                <ul className='nav-menu1'>
                    <li onClick={() => setMenu('shop')}>
                        <Link to={`/product/gender/nam`} style={{ textDecoration: 'none', color: 'inherit' }}>NAM</Link>
                        {menu === 'shop' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('womens')}>
                        <Link to={`/product/gender/nữ`} style={{ textDecoration: 'none', color: 'inherit' }}>NỮ</Link>
                        {menu === 'womens' && <hr />}
                    </li>
                    <RxDividerVertical style={{ fontSize: '2rem' }} />
                    <li onClick={() => setMenu('kids')}>
                        <Link to={`/product/gender/trẻ em`} style={{ textDecoration: 'none', color: 'inherit' }}>TRẺ EM</Link>
                        {menu === 'kids' && <hr />}
                    </li>
                </ul>
                <div className="nav-login-cart" onClick={fetchCart}>
                    <SearchBar2 />
                    <div className="nav-cart-count">{quantity=== undefined ? 0: quantity}</div>
                </div>
            </div>
        </>
    );
};

export default SecondNavbar;
