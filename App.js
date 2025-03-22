import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import EventManagement from "./pages/EventManagement";
import LoginRegister from './pages/LoginRegister';
import ImageSlider from './images/ImageSlider';
import { Modal } from 'react-bootstrap';
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';
import Gallery from './components/Gallery';
import HomePage from './components/HomePage';
import ExploreEvents from './components/ExploreEvents';
import ContactPage from './components/ContactPage';
import EventDetailsPage from './components/EventDetailsPage';  
import EventInvitation from './components/Template';

const Home = ({ handleShow }) => {
    return (
        <div className="container mt-5 d-flex justify-content-center">
            <div className="card shadow-lg p-4 text-white" 
                style={{ width: "100%", maxWidth: "1200px", backgroundColor: "#222", borderRadius: "12px" }}>
                <div className="d-flex justify-content-end">
                    <button onClick={handleShow} className="btn btn-outline-light">
                        Login / Register
                    </button>
                </div>
                <div className="card-body">
                    <EventManagement />
                </div>
            </div>
        </div>
    );
};

const App = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const location = useLocation();

    const handleShow = () => setShowLogin(true);
    const handleClose = () => setShowLogin(false);

    const isHomePage = location.pathname === '/' || location.pathname === '/homepage';

    return (
        <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
            {!isHomePage && (
                <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: -1 }}>
                    <ImageSlider />
                </div>
            )}

            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">
                        <img src={logo} alt="PlanIt Logo" style={{ width: '150px', height: '150px', marginRight: '8px' }} />
                        PlanIt
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/homepage">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Create Events</Link>
                            </li>
                            <li className="nav-item dropdown"
                                onMouseEnter={() => setDropdownOpen(true)}
                                onMouseLeave={() => setDropdownOpen(false)}>
                                <Link className="nav-link dropdown-toggle" to="/explore">Explore Events</Link>
                                {dropdownOpen && (
                                    <ul className="dropdown-menu show">
                                        <li><Link className="dropdown-item" to="/events/wedding-planners">Wedding Planners</Link></li>
                                        <li><Link className="dropdown-item" to="/events/food-carnivals">Food Carnivals</Link></li>
                                        <li><Link className="dropdown-item" to="/events/competitions">Competitions</Link></li>
                                        <li><Link className="dropdown-item" to="/events/corporate-events">Corporate Events</Link></li>
                                        <li><Link className="dropdown-item" to="/events/concerts">Concerts</Link></li>
                                    </ul>
                                )}
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/template">Templates</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/gallery">Gallery</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="mt-4">
                <Routes>
                    <Route path="homepage" element={<HomePage />} />
                    <Route path="events" element={<EventManagement />} />
                    <Route index element={<Home handleShow={handleShow} />} />
                    <Route path="explore" element={<ExploreEvents />} />
                    <Route path="template" element={<EventInvitation />} /> 
                    <Route path="gallery" element={<Gallery />} />
                    <Route path="/contact" element={<ContactPage />} />

                    {/* ✅ Dynamic Route for Event Details Page */}
                    <Route path="events/:eventType" element={<EventDetailsPage />} />
                </Routes>
            </div>

            <Modal show={showLogin} onHide={handleClose} centered>
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

export default App;
