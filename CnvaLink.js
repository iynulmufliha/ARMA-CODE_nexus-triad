import React from 'react';

const CanvaLink = () => {
    return (
        <a 
            href="https://www.canva.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{
                display: 'inline-block',
                backgroundColor: '#00C4CC', // Canva's brand color
                color: 'white',
                padding: '10px 20px',
                textDecoration: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
            }}
        >
            Create a Design with Canva
        </a>
    );
};

export default CanvaLink;