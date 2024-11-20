import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/WhatsApp Image 2024-10-26 at 17.09.55.jpeg';
import MyOrderCard from '../MyOrderCard/MyOrderCard';
import './MyOrder.css';

const MyOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch(`https://jewellery-server-csgb.onrender.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))

    }, [orders, user.email, setOrders])

    return (
        <Container>
            <p className='text-center'>
                <img style={{ width: '180px' }} src={logo} alt="" />
            </p>
            <h6 className='text-center text-muted fw-bold'>My orders</h6>
            <div className="mybook-container">
                {
                    orders.map(order => <MyOrderCard
                        key={order.key}
                        order={order}
                    ></MyOrderCard>)
                }
            </div>
        </Container>
    );
};

export default MyOrder;