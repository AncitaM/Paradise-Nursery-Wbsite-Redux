import { connect } from 'react-redux';
import Home from '../components/Home/Home.jsx';
import { addToCart } from '../Services/Actions/actions.js';

const mapStateToProps = (state) => ({
    cartData: state.cardItems.cardData // Pass state if needed
});

const mapDispatchToProps = (dispatch) => ({
    addToCartHandler: (data) => dispatch(addToCart(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
