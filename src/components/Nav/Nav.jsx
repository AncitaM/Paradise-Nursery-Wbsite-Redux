import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styles from './Nav.module.css';

const Nav = () => {
    const cartData = useSelector((state) => state.cardItems.cardData);

    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>Paradise Nursery</Link>
            <div className={styles.centerLinks}>
                <Link to="/home">Home</Link>
                <Link to="/products">Products</Link>
            </div>
            <Link to="/cart" className={styles.cartIcon}>
                <img src="/src/assets/cart.png" alt="Cart" />
                {cartData.length > 0 && <span className={styles.cartCount}>{cartData.length}</span>}
            </Link>
        </nav>
    );
}

export default Nav;
