import React, { useEffect, useState } from 'react';
import '../HomePage.css'; 
import { Modal } from 'react-bootstrap';
import LoginRegister from '../pages/LoginRegister';
import Marquee from './Marquee';

const HomePage = () => {
  const images = [
    "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=600&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&auto=format&fit=crop&q=60",
    "https://media.istockphoto.com/id/2156053820/photo/table-setting-for-an-event-party-or-wedding-reception.webp?a=1&b=1&s=612x612&w=0",
    "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&auto=format&fit=crop&q=60"
  ];

  const [index, setIndex] = useState(0);
  const [showLogin, setShowLogin] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ backgroundColor: 'transparent', overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${images[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="overlay"></div>
        <div className="content text-center text-white">
          <h1 className="fw-bold" style={{ fontSize: '4rem' }}>Delightful Events Start Here</h1>
          <p className="paragraph">
            "Create an unforgettable experience today! Set up your event page,<br />
            invite your friends, and sell tickets effortlessly."
          </p>
          <button onClick={() => setShowLogin(true)} className="btn btn-warning custom-button">Login / Register</button>
        </div>
      </section>

      {/* Marquee Section */}
      <div className="container my-5">
        <Marquee />
      </div>

      {/* Event Management Section */}
      <div className="container text-dark">
  <div className="row mt-5 py-4">
    <div className="col-md-12 text-justify">
      <h2 className="display-4 fw-bold text-uppercase text-shadow-lg">
        Plan-It Event Management – Your Trusted Event Partner
      </h2>
      <h3 className="display-6 fw-semibold text-shadow-lg">
        Bringing Your Dream Events to Life!
      </h3>
      <p className="fs-5">
        Have you ever envisioned a flawless event that leaves a lasting impression? 
        <strong> Plan-It Event Management</strong> is your go-to event planning solution, 
        offering creativity and seamless execution.
      </p>
      <ul className="fs-5">
        <li><strong>Corporate Events</strong> – Seminars and product launches.</li>
        <li><strong>Weddings & Destination Ceremonies</strong> – Picture-perfect celebrations.</li>
        <li><strong>Private Parties</strong> – Birthdays, anniversaries, and get-togethers.</li>
        <li><strong>Entertainment & Music</strong> – Live performances and immersive experiences.</li>
        <li><strong>Catering & Décor</strong> – Exceptional themes and mouth-watering cuisines.</li>
      </ul>
      <p className="fs-5 fw-bold">
        Let’s bring your vision to reality! Contact us today to craft an unforgettable experience with 
        <strong> Plan-It Event Management!</strong>
      </p>
    </div>
    
  </div>
</div>


      {/* Destination Wedding Section */}
      <div className="destination-container">
        <section className="destination-section text-center">
          <div className="collage">
            <img src="https://i.pinimg.com/736x/25/0d/44/250d441e15e88e5fe859cf2b02f58f64.jpg" alt="Wedding 1" />
            <img src="https://i.pinimg.com/736x/67/87/f6/6787f648ad229aaaa1bdd74ef7872b88.jpg" alt="Wedding 2" />
            <img src="https://i.pinimg.com/736x/50/3f/31/503f317fbb7e7959b4bec6e414b41c10.jpg" alt="Wedding 3" />
            <img src="https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=600&auto=format&fit=crop&q=60" alt="Wedding 4" />
          </div>

          <div className="container my-5">
            <div className="row align-items-center">
              <div className="col-md-6 text-start">
                <h2 className="fw-bold">Unlock Your Dream Destination Events from Anywhere</h2>
                <p>
                  Choose <strong>PlanIt Event Management Company</strong> for your premium destination events anywhere. Whether you dream of a 
                  <strong> beach wedding</strong> or a <strong>resort celebration</strong>, we will bring it to life.
                </p>
                <p>
                  We also offer <strong>venue selection assistance</strong> for an easier planning process. Our track record includes clients from 
                  <strong> India and abroad</strong>, making us your ideal partner for a memorable event.
                </p>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <img 
                  src="https://images.unsplash.com/photo-1515232389446-a17ce9ca7434?w=600&auto=format&fit=crop&q=60" 
                  alt="Destination Wedding" 
                  className="img-fluid rounded shadow"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Login/Register */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login / Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <LoginRegister />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default HomePage;
