import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const WeddingEventPage = () => {
  return (
    <div className="container mt-4 p-3 rounded shadow-lg bg-light">
      <div className="row">
        {/* Left Section */}
        <div className="col-md-6">
          <div
            className="w-100 rounded"
            style={{
              height: "400px",
              backgroundImage:
                "url('https://media.istockphoto.com/id/638665564/photo/wedding-reception-decorated-with-flowers.jpg?s=612x612&w=0&k=20&c=7OZkHjdPuMG2jtoTMckno_ehxf9oG5FLSXMeDNkIu-Q=')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="p-3 bg-white rounded mt-3">
            <h3 className="text-center text-danger">About the Wedding Event</h3>
            <p>
              Join us for an unforgettable wedding experience! Our event will
              feature top wedding planners, decorators, fashion showcases, and
              much more. Enjoy a mesmerizing evening filled with elegance,
              romance, and inspiration.
            </p>
          </div>
        </div>

        {/* Right Section - Registration Form */}
        <div className="col-md-6">
          <h3 className="text-center text-danger">Plan Your Dream Wedding</h3>
          <form>
            <input className="form-control my-2" name="fullName" required type="text" placeholder="Full Name" />
            <input className="form-control my-2" name="email" required type="email" placeholder="Email Address" />
            <input className="form-control my-2" name="phone" required type="tel" placeholder="Phone Number" />
            <input className="form-control my-2" name="city" required type="text" placeholder="City/Town of Residence" />
            
            {/* Interested in Volunteering */}
            <label className="fw-bold mt-2">Interested in Volunteering?</label>
            <div className="d-flex">
              {["Yes", "No", "Maybe"].map((option, index) => (
                <div className="form-check me-3" key={index}>
                  <input className="form-check-input" type="radio" name="volunteerInterest" value={option.toLowerCase()} />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>

            <textarea className="form-control my-2" name="expectations" placeholder="What do you hope to gain from attending?"></textarea>

            {/* Wedding Activities */}
            <label className="fw-bold mt-2">Wedding Activities/Booths of Interest:</label>
            <div>
              {[
                "Bridal Fashion Showcase",
                "Live Band & DJ Preview",
                "Photography & Videography Booth",
                "Catering & Tasting Session",
                "Wedding Décor & Theme Display",
                "Mehendi (Henna) Art Booth",
                "Wedding Budget Planning Consultation",
                "Jewelry & Accessories Showcase"
              ].map((item, index) => (
                <div className="form-check" key={index}>
                  <input type="checkbox" className="form-check-input me-2" id={`activity-${index}`} />
                  <label className="form-check-label" htmlFor={`activity-${index}`}>{item}</label>
                </div>
              ))}
            </div>

            {/* Attending with Children */}
            <label className="fw-bold mt-2">Attending with Children?</label>
            <div className="d-flex">
              {["Yes", "No"].map((option, index) => (
                <div className="form-check me-3" key={index}>
                  <input className="form-check-input" type="radio" name="attendingWithChildren" value={option.toLowerCase()} />
                  <label className="form-check-label">{option}</label>
                </div>
              ))}
            </div>

            {/* Number of People Attending */}
            <label className="fw-bold mt-2">How many people are you bringing along?</label>
            <select className="form-control my-2" name="peopleBringing">
              <option value="">-- Select --</option>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <option key={num} value={num}>{num}</option>
              ))}
            </select>

            <textarea className="form-control my-2" name="dietaryRestrictions" placeholder="Dietary Restrictions/Allergies (Optional)"></textarea>

            {/* How did you hear about the event? */}
            <label className="fw-bold mt-2">How did you hear about the event?</label>
            <select className="form-control my-2" name="hearingSource">
              <option value="">-- Select One --</option>
              {["Social Media", "Website", "Friend", "Poster", "Email", "Other"].map((source, index) => (
                <option key={index} value={source.toLowerCase()}>{source}</option>
              ))}
            </select>

            {/* Newsletter Subscription */}
            <div className="form-check mt-2">
              <input type="checkbox" className="form-check-input" name="newsletter" id="newsletter" />
              <label className="form-check-label" htmlFor="newsletter">Subscribe to Newsletter?</label>
            </div>

            <button className="btn btn-danger w-100 mt-3" type="submit">Register</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WeddingEventPage;
