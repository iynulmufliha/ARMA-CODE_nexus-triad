import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;

    if (!name || !phone || !email || !message) {
      alert("Please fill out all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent successfully.`);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-container">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Profile Card - Left Side */}
          <div className="col-md-4">
            <div className="card text-center shadow-lg rounded-4 p-3">
              <div className="card-header bg-warning text-white rounded-top">
                <img
                  src="https://i.pinimg.com/736x/7f/24/ce/7f24ce794ee2a58382dd41ac376d9b20.jpg"
                  alt="User Profile"
                  className="rounded-circle mx-auto d-block shadow-lg"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "cover",
                    border: "5px solid #ffc107",
                  }}
                />
              </div>
              <div className="card-body">
                <h2 className="fw-bold">MAM</h2>
                <p>
                  <i className="fas fa-envelope text-warning"></i> shaimeenmuf@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone-alt text-warning"></i> +91 9876543210
                </p>

                <div className="mt-3">
                  <a href="#" className="btn btn-primary btn-sm mx-1">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="btn btn-info btn-sm mx-1">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="btn btn-dark btn-sm mx-1">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="#" className="btn btn-danger btn-sm mx-1">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="col-md-6">
            <div className="card p-4 shadow-lg rounded-4">
              <h2 className="text-center fw-bold text-warning">Contact Us</h2>
              <p className="text-center">We'd love to hear from you!</p>

              <form id="contact-form" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className="form-control"
                    placeholder="Phone Number"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Email Address"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <textarea
                    name="message"
                    className="form-control"
                    placeholder="Your Message"
                    rows="4"
                    required
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button className="btn btn-warning w-100" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
