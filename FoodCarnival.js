import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FoodCarnival = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row shadow-lg bg-white rounded overflow-hidden" style={{ maxWidth: "1000px" }}>
        {/* Left Section */}
        <div className="col-md-6 bg-danger text-white p-4 text-center">
          <img
            src="https://i.pinimg.com/736x/67/87/f6/6787f648ad229aaaa1bdd74ef7872b88.jpg"
            alt="Food Carnival"
            className="img-fluid rounded"
          />
          <h3 className="mt-3">About the Food Carnival</h3>
          <p>
            🌟 <strong>Join us at the ultimate Food Carnival!</strong> 🌟 Indulge in delicious food stalls, thrilling cooking contests,
            and interactive workshops. Enjoy live cooking shows, food photography booths, and fun challenges. 🍔🍕
          </p>
        </div>

        {/* Right Section - Registration Form */}
        <div className="col-md-6 p-4">
          <h3>Register for the Food Carnival</h3>
          <form>
            <input className="form-control mb-2" name="fullName" required type="text" placeholder="Full Name" />
            <input className="form-control mb-2" name="email" required type="email" placeholder="Email Address" />
            <input className="form-control mb-2" name="phone" required type="tel" placeholder="Phone Number" />
            <input className="form-control mb-2" name="company" required type="text" placeholder="Company Name" />
            <input className="form-control mb-2" name="designation" required type="text" placeholder="Your Designation" />

            <label className="form-label">Favorite Cuisine:</label>
            <select className="form-select mb-2" name="cuisine">
              <option value="">-- Select Cuisine --</option>
              <option value="italian">Italian</option>
              <option value="chinese">Chinese</option>
              <option value="mexican">Mexican</option>
              <option value="indian">Indian</option>
              <option value="japanese">Japanese</option>
              <option value="other">Other</option>
            </select>

            <textarea className="form-control mb-2" name="expectations" placeholder="What do you hope to gain?" />

            <label className="form-label">Activities of Interest:</label>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="activities" value="Tasting Sessions" />
              <label className="form-check-label">Tasting Sessions</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="activities" value="Cooking Demonstrations" />
              <label className="form-check-label">Cooking Demonstrations</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="checkbox" name="activities" value="Food Competitions" />
              <label className="form-check-label">Food Competitions</label>
            </div>

            <label className="form-label mt-2">Interested in Sponsorship?</label>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sponsorship" value="yes" />
              <label className="form-check-label">Yes</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="sponsorship" value="no" />
              <label className="form-check-label">No</label>
            </div>

            <button className="btn btn-danger w-100 mt-3" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FoodCarnival;
