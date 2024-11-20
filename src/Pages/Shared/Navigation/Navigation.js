import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import useAuth from '../../../Hooks/useAuth';
import logo from '../../../images/WhatsApp Image 2024-10-26 at 17.09.55.jpeg';

const Navigation = () => {
    const { user, logOut } = useAuth();
    const handleContact = () => {
        swal({ title: `Thank you ${user.displayName}`, text: "Please look at our website footer for communication details!", icon: "info" })
    }
    return (
        <Navbar bg="light" className='px-2' variant="light" collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
                <img width='80px' src={logo} alt="" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link as={Link} to="/jewellery">About Us</Nav.Link>
                    <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
                    <Nav.Link onClick={handleContact}>Contact Us</Nav.Link>
                    {
                        user.email && <Nav.Link href="#" className='fw-bold fs-6 text-warning'>{user.displayName}</Nav.Link>
                    }
                    {
                        user.email ? <button className='btn-regular' onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/login" >Login</Nav.Link>
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Navigation;