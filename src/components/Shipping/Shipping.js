import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import useCart from '../../hooks/useCart';
import { clearTheCart, getStoredCart } from '../../utilities/fakedb';
import './Shipping.css'

const Shipping = () => {
    const { user } = useAuth();
    const [cart, setCart] = useCart();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        const savedCart = getStoredCart();
        data.order = savedCart;

        if (Object.keys(savedCart).length) {
            fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    alert('Your order is placed successfully')
                    setCart([]);
                    clearTheCart();
                    reset()
                }
            })
        }
        else {
            alert('Your cart is empty. Please add some product to cart')
        }
    }
    return (
        <div>
            <form className = "shipping-form" onSubmit={handleSubmit(onSubmit)}> 
        
                <input defaultValue={user.displayName} placeholder = "Name" {...register("name")} />
                
                
                <input defaultValue = {user.email} placeholder = "Email" {...register("email", { required: true })} />

                <input placeholder = "Address" {...register("address")} />
                <input placeholder = "City" {...register("city")} />
                <input placeholder = "Phone" {...register("phone")} />
                
                {errors.email && <span className = "error">This email is required</span>}
                <input className="btn-regular" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;