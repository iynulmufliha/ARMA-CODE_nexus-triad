import React, { useState } from 'react';
import { Button, Modal, Carousel } from 'react-bootstrap'; 
import Login from '../components/Login'; // Adjust the import path as necessary
import Register from '../components/Register'; // Adjust the import path as necessary

const LoginRegister = () => {
    const [showModal, setShowModal] = useState(false);
    const [isLoginPage, setIsLoginPage] = useState(true);

    const handleShow = () => setShowModal(true);
    const handleClose = () => setShowModal(false);

    const images = [
        "https://i.pinimg.com/736x/7f/24/ce/7f24ce794ee2a58382dd41ac376d9b20.jpg",
        "https://i.pinimg.com/736x/5d/13/d5/5d13d505af3d16da22b8fa1deeb9ba8c.jpg",
        "https://i.pinimg.com/736x/54/35/1b/54351b2974b058ba7972cbc916016ac7.jpg",
        "https://i.pinimg.com/736x/7f/24/ce/7f24ce794ee2a58382dd41ac376d9b20.jpg"
    ];

    const texts = [
        "Welcome to PlanIt! Your go-to solution for managing events seamlessly.",
        "Join us to access exclusive features that will make event planning a breeze.",
        "At PlanIt, we offer tools and resources to help you organize and manage events effectively.",
        "Sign up today to take control of your events with PlanIt!"
    ];

    return (
        <div className="container ">
           

            {/* Image Carousel */}
            <Carousel interval={500} indicators={false} controls={false} fade>
                {images.map((image, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={image}
                            alt={`Slide ${index}`}
                            style={{ height: '400px', objectFit: 'cover' }}
                        />
                        <Carousel.Caption>
                            <h3>{texts[index]}</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <div className="d-flex justify-content-center align-items-center m-3">
    <Button variant="danger" onClick={handleShow}>
        Login/Register 
    </Button>
</div>
            {/* Modal for Login/Register */}
            <Modal show={showModal} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isLoginPage ? "Login" : "Register"}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {isLoginPage ? <Login /> : <Register />}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setIsLoginPage(!isLoginPage)}>
                        Switch to {isLoginPage ? "Register" : "Login"}
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LoginRegister;