import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './ShoppingCart.module.css';
import { addToCart, removeFromCart, decreaseQuantity } from '../../Services/Actions/actions';
import { useNavigate } from 'react-router-dom';

const ShoppingCart = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cardItems.cardData);

    console.log(cartItems); // Check the output in the console

    const handleIncreaseQuantity = (productId) => {
        dispatch(addToCart(productId));
    };

    const handleDecreaseQuantity = (productId) => {
        dispatch(decreaseQuantity(productId));
    };

    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className={styles.cartContainer}>
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <div className={styles.cartItems}>
                    {cartItems.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <div className={styles.imgWrapper}>
                                <img src={item.imageURL} alt={item.name} />
                            </div>
                            <div className={styles.itemDetails}>
                                <div className={styles.nameprice}>
                                <h2>{item.name}</h2>
                                <p>
                                    <span className="currency-symbol">₹</span>{item.price}
                                </p>
                                </div>
                                <div className={styles.quantityControl}>
                                    <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                                    <span>{item.quantity}</span>
                                    <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                                </div>
                                <div className={styles.priceremove}>
                                <p>
                                    Total: <span className="currency-symbol">₹</span>{item.price * item.quantity}
                                </p>
                                <button onClick={() => handleRemoveFromCart(item.id)} className={styles.removeButton}>
                                    Remove
                                </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className={styles.cartFooter}>
                        <h2>Total Price: <span className="currency-symbol">₹</span>{totalPrice}</h2>
                        <div className={styles.buttonGroup}>
                            <button onClick={() => navigate('/products')}>Continue Shopping</button>
                            <button>Checkout</button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.emptyCart}>
                    <img src="src/assets/empty.png" alt="Empty Cart" className={styles.emptyCartImage} />
                    <p>Your cart is empty!</p>
                    <button onClick={() => navigate('/products')} className={styles.continueShoppingButton}>Continue Shopping</button>
                </div>
            )}
            
        </div>
    );
};

export default ShoppingCart;
