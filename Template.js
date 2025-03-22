import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";


const EventInvitation = () => {
  const images = [
    "https://images.pexels.com/photos/5805045/pexels-photo-5805045.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169190/pexels-photo-169190.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/787961/pexels-photo-787961.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/169198/pexels-photo-169198.jpeg?auto=compress&cs=tinysrgb&w=600"
  ];

  const [index, setIndex] = useState(0);
  const [formData, setFormData] = useState({
    eventTitle: "",
    hostName: "",
    eventDate: "",
    eventLocation: "",
    dressCode: "",
    rsvpLink: "",
    contactInfo: "",
    eventMessage: ""
  });
  const [showPreview, setShowPreview] = useState(false);
  const [dateError, setDateError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const generateInvitation = () => {
    const eventDate = new Date(formData.eventDate);
    if (!formData.eventDate || eventDate <= new Date()) {
      setDateError(true);
      return;
    }
    setDateError(false);
    setShowPreview(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 overflow-auto"
      style={{
        backgroundImage: `url(${images[index]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background 1s ease-in-out"
      }}
    >
      <div className="container p-4 bg-white shadow rounded" style={{ maxWidth: "600px", maxHeight: "90vh", overflowY: "auto" }}>
        <h3 className="text-center text-danger">Create Your Elegant Event Invitation</h3>
        <label>Event Title</label>
        <input type="text" id="eventTitle" className="form-control" onChange={handleChange} />

        <label>Host Name</label>
        <input type="text" id="hostName" className="form-control" onChange={handleChange} />

        <label>Event Date & Time</label>
        <input type="datetime-local" id="eventDate" className="form-control" onChange={handleChange} />
        {dateError && <p className="text-danger">Please select a valid future date.</p>}

        <label>Event Location</label>
        <input type="text" id="eventLocation" className="form-control" onChange={handleChange} />

        <label>Dress Code</label>
        <input type="text" id="dressCode" className="form-control" onChange={handleChange} />

        <label>RSVP Link (Optional)</label>
        <input type="text" id="rsvpLink" className="form-control" onChange={handleChange} />

        <label>Organizer Contact</label>
        <input type="text" id="contactInfo" className="form-control" onChange={handleChange} />

        <label>Special Message</label>
        <textarea id="eventMessage" className="form-control" onChange={handleChange}></textarea>

        <button className="btn btn-danger w-100 mt-3" onClick={generateInvitation}>Generate Invitation</button>

        {showPreview && (
          <div className="mt-4 p-3 bg-light rounded shadow-sm overflow-auto" style={{ maxHeight: "50vh" }}>
            <h4 className="text-danger">📢 You're Invited! 🎉</h4>
            <p><strong>Event:</strong> {formData.eventTitle}</p>
            <p><strong>Host:</strong> {formData.hostName}</p>
            <p><strong>Date & Time:</strong> {new Date(formData.eventDate).toLocaleString()}</p>
            <p><strong>Location:</strong> {formData.eventLocation}</p>
            <p><strong>Dress Code:</strong> {formData.dressCode}</p>
            {formData.rsvpLink && (<p><strong>RSVP:</strong> <a href={formData.rsvpLink} target="_blank" rel="noopener noreferrer">Click here</a></p>)}
            <p><strong>Contact:</strong> {formData.contactInfo}</p>
            <p><strong>Message:</strong> {formData.eventMessage}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default EventInvitation;
