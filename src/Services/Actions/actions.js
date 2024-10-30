import { ADD_TO_CART, REMOVE_FROM_CART, DECREASE_QUANTITY} from '../constants';
import products from '../../data/products.json';

export const addToCart = (productId) => {
    const product = products.find((prod) => prod.id === productId);
    return {
        type: ADD_TO_CART,
        payload: product
    };
};

export const removeFromCart = (productId) => {
    return {
        type: REMOVE_FROM_CART,
        payload: productId
    };
};

export const decreaseQuantity = (productId) => ({
    type: DECREASE_QUANTITY,
    payload: productId
});