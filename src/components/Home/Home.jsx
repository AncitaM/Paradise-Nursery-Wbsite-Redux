import React, { useState, memo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from "./Home.module.css";
import products from '../../data/products.json';
import { addToCart } from "../../Services/Actions/actions.js";

const Home = () => {
    const dispatch = useDispatch();
    const cartData = useSelector((state) => state.cardItems.cardData);
    const [selectedCategory, setSelectedCategory] = useState('All');
    console.log('Cart Data:', cartData); 
    
    const handleAddToCart = useCallback((productId) => {
        dispatch(addToCart(productId));
    }, [dispatch]);

    const filteredProducts = selectedCategory === 'All' 
        ? products 
        : products.filter(product => product.category.includes(selectedCategory));

    const ProductCard = memo(({ product }) => (
        <div className={styles.productwrapper}>
            <div className={styles.imgwrapper}>
                <img src={product.imageURL} alt={product.name} />
            </div>
            <div className={styles.productinfo}>
                <div className={styles.textwrapper}>
                    <h1>{product.name}</h1>
                    <p>{product.description}</p>
                    <p><span className="currency-symbol">₹</span>{product.price}</p>
                </div>
                <div className={styles.buttonwrapper}>
                    <button onClick={() => handleAddToCart(product.id)}>Add To Cart</button>
                </div>
            </div>
        </div>
    ));

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <label htmlFor="category">Filter by Category:</label>
                <select 
                    id="category" 
                    value={selectedCategory} 
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className={styles.filterSelect}
                >
                    <option value="All">All</option>
                    <option value="Air-Purifying">Air-Purifying</option>
                    <option value="Low-Maintenance">Low-Maintenance</option>
                    <option value="Decorative">Decorative</option>
                    <option value="Aromatic">Aromatic</option>
                </select>
            </div>

            <div className={styles.productList}>
                {filteredProducts.map((product) => (
                    <ProductCard 
                        key={product.id} 
                        product={product} 
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
