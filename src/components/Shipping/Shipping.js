import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css'

const Shipping = () => {
    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <form className = "shipping-form" onSubmit={handleSubmit(onSubmit)}> 
        
                <input defaultValue={user.displayName} placeholder = "Name" {...register("name")} />
                
                
                <input defaultValue = {user.email} placeholder = "Email" {...register("email", { required: true })} />

                <input placeholder = "Address" {...register("address")} />
                <input placeholder = "City" {...register("city")} />
                <input placeholder = "Phone" {...register("phone")} />
                
                {errors.email && <span className = "error">This email is required</span>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default Shipping;