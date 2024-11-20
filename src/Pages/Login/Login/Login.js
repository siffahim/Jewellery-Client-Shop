import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/WhatsApp Image 2024-10-26 at 17.09.55.jpeg';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import './Login.css';

const Login = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const { loginUser, user, error } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const onSubmit = data => {
        loginUser(data.email, data.password, location, history)
        reset()
    };

    return (
        <>
            <Navigation />
            <div className='row m-auto p-3 w-75'>
                <div className='col-md-6 col-12 mx-auto shadow p-4'>
                    <p className='text-center'>
                        <img style={{ width: '180px' }} src={logo} alt="" />
                    </p>
                    <h4 className='text-center mb-5 text-muted'>Login</h4>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input placeholder='Email' {...register("email", { required: true })} className="form-control mb-2" />
                        {errors.email && <span className='text-danger'>This field is required</span>}

                        <input placeholder='Password' type='password' {...register("password", { required: true })} className="form-control mb-4" />
                        {errors.password && <span className='text-danger'>This field is required</span>}

                        <p>{error}</p>

                        <input type="submit" className="form-control btn-form" value='Login' />
                    </form>
                    <p className='text-muted mt-4'>Don't have an account? <Link to='/register'>Create an account</Link></p>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Login;