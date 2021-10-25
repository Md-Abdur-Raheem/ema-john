import React from 'react';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router';
import useAuth from '../../hooks/useAuth';

const OrderReview = () => {
    const [cart, setCart] = useCart();
    const history = useHistory();
    const { user } = useAuth();

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const handleProceedToShipping = () => {
        if (user.email) {
           
        }
        history.push('/shipping');
    }

    return (
        <div className="shop-container">
            <div className="product-container">
                {
                    cart.map(product => <ReviewItem
                        key={product.key}
                        product={product}
                        handleRemove={handleRemove}
                    ></ReviewItem>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handleProceedToShipping} className="btn-regular">Proceed to shipping</button>
                </Cart>
            </div>
        </div>
    );
};

export default OrderReview;