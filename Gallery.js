// Gallery.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// Inline CSS
const styles = {
    gallerySection: {
        textAlign: 'center',
        padding: '20px',
        background: '#f8f8f8',
        width: '100vw',
        minHeight: '100vh',
    },
    galleryTitle: {
        fontSize: '40px',
        fontFamily: 'Playfair Display, serif',
        color: '#333',
        marginBottom: '20px',
    },
    galleryItem: {
        overflow: 'hidden',
        borderRadius: '10px',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
    },
    lightbox: {
        display: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
    },
    lightboxVisible: {
        display: 'flex',
    },
    lightboxImg: {
        maxWidth: '90%',
        maxHeight: '90%',
        borderRadius: '10px',
    },
    closeButton: {
        position: 'absolute',
        top: '20px',
        right: '40px',
        fontSize: '30px',
        color: 'white',
        cursor: 'pointer',
    },
};
const images = [
    "https://images.pexels.com/photos/50675/banquet-wedding-society-deco-50675.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/587741/pexels-photo-587741.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1444442/pexels-photo-1444442.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2306281/pexels-photo-2306281.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/31236876/pexels-photo-31236876/free-photo-of-joyful-celebration-of-holi-festival-with-friends.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/31236866/pexels-photo-31236866/free-photo-of-colorful-holi-celebration-with-joyful-crowd.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/31236868/pexels-photo-31236868/free-photo-of-vibrant-celebration-of-holi-festival-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/7685846/pexels-photo-7685846.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/66277/fireworks-light-japan-festival-66277.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/30956653/pexels-photo-30956653/free-photo-of-muslim-women-praying-at-istiqlal-mosque-jakarta.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://media.istockphoto.com/id/1774449497/photo/husband-giving-gift-to-wife-at-home-during-festival.jpg?b=1&s=612x612&w=0&k=20&c=bIac2JQQBgmtdwjN764GBZtaykYHvsGQ7GUIiEH1bp4=",
    "https://images.pexels.com/photos/7249341/pexels-photo-7249341.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8995823/pexels-photo-8995823.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://media.istockphoto.com/id/2175629139/photo/cheerful-siblings-with-gift-boxes-celebrating-raksha-bandhan-festival.jpg?b=1&s=612x612&w=0&k=20&c=D5oQGaqBa1iXKph52noFPG_aQsUlgxa6PDvUi9rXa5w=",
    "https://images.pexels.com/photos/30682912/pexels-photo-30682912/free-photo-of-joyful-birthday-celebration-with-friends-indoors.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    "https://images.pexels.com/photos/2240763/pexels-photo-2240763.jpeg?auto=compress&cs=tinysrgb&w=600", "https://cdn.pixabay.com/photo/2018/07/04/00/19/champagne-3515140_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/07/27/13/18/woman-5442400_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/06/22/02/25/motocross-8080377_1280.jpg",
    "https://cdn.pixabay.com/photo/2020/02/25/15/46/parade-4879243_1280.jpg",
    "https://images.pexels.com/photos/7249341/pexels-photo-7249341.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/8995823/pexels-photo-8995823.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/19/20/17/catwalk-1840941_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/08/04/07/22/people-8168554_1280.jpg",
    "https://cdn.pixabay.com/photo/2023/03/18/12/28/bonfire-7860562_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2016/11/29/06/25/beard-1867788_1280.jpg",
    "https://cdn.pixabay.com/photo/2019/07/14/22/14/running-4338238_1280.jpg",
    "https://cdn.pixabay.com/photo/2024/09/08/05/12/bridesmaid-9031152_1280.jpg"

];

const Gallery = () => {
    const [lightboxVisible, setLightboxVisible] = React.useState(false);
    const [lightboxImage, setLightboxImage] = React.useState('');

    const openLightbox = (src) => {
        setLightboxImage(src);
        setLightboxVisible(true);
    };

    const closeLightbox = () => {
        setLightboxVisible(false);
    };

    return (
        <div style={styles.gallerySection}>
            <h1 style={styles.galleryTitle}>Our Event Highlights</h1>
            <div className="row">
                {images.map((src, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div
                            style={styles.galleryItem}
                            onClick={() => openLightbox(src)}
                        >
                            <img src={src} alt={`Event ${index + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox */}
            <div style={{ ...styles.lightbox, ...(lightboxVisible ? styles.lightboxVisible : {}) }} onClick={closeLightbox}>
                <span style={styles.closeButton}>&times;</span>
                <img id="lightbox-img" src={lightboxImage} alt="" style={styles.lightboxImg} />
            </div>
        </div>
    );
};

export default Gallery;