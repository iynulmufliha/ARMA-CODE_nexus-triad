import React, { useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const CorporateEvent = () => {
  const form = useRef();

  const sendNotifications = (e) => {
    e.preventDefault();

    // Send Email Notification
    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      form.current,
      "YOUR_PUBLIC_KEY"
    ).then(() => {
      alert("Registration Successful! Email Notification Sent.");
    }).catch((error) => {
      console.log(error.text);
    });
  };

  return (
    <div className="d-flex vh-100">
      {/* Left Section */}
      <div className="w-50 bg-primary text-white d-flex flex-column align-items-center justify-content-center p-4">
        <img 
          src="https://images.pexels.com/photos/2505056/pexels-photo-2505056.jpeg?auto=compress&cs=tinysrgb&w=600" 
          alt="Corporate Event" 
          className="img-fluid mb-3 rounded"
        />
        <h2 className="text-center">Elevate Your Business</h2>
        <p className="text-center">Join us for an exclusive corporate event with industry leaders, insightful discussions, and networking opportunities.</p>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-50 p-5 bg-light">
        <h3 className="text-center text-primary">Register for the Corporate Event</h3>
        <form ref={form} onSubmit={sendNotifications}>
          <input name="fullName" required type="text" className="form-control my-2" placeholder="Full Name" />
          <input name="email" required type="email" className="form-control my-2" placeholder="Email Address" />
          <input name="phone" required type="tel" className="form-control my-2" placeholder="Phone Number" />
          <input name="company" required type="text" className="form-control my-2" placeholder="Company Name" />
          <input name="designation" required type="text" className="form-control my-2" placeholder="Your Designation" />

          <label className="text-primary">Industry of Interest:</label>
          <select name="industry" className="form-control my-2" required>
            <option value="">-- Select Industry --</option>
            <option value="Technology">Technology</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Other">Other</option>
          </select>

          <textarea name="expectations" className="form-control my-2" placeholder="What do you hope to gain from this event?" required></textarea>

          <button type="submit" className="btn btn-primary w-100 mt-3">Register</button>
        </form>
      </div>
    </div>
  );
};

export default CorporateEvent;
