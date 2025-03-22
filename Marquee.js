// Marquee.js
import React from 'react';
import { Container } from 'react-bootstrap';
import './Marquee.css';

const Marquee = () => {
    return (
        <Container className="marquee-container bg-light py-2 text-center">
            <div className="marquee">
                <span className="marquee-text">
                    Join the WhatsApp group for regular updates - 
                    <a href="https://chat.whatsapp.com/CvDjEIqzMYcKbOIH9nCVLc" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                        Join Today
                    </a>
                </span>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="marquee-text">
                    Follow for regular updates on Instagram 
                    <a href="https://www.instagram.com/koottamcarnival/?g=5" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                        @PlanIt
                    </a>
                </span>
            </div>
        </Container>
    );
};

export default Marquee;