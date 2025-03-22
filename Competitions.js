import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const CompetitionRegistration = () => {
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

        const formData = new FormData(form.current);
        const name = formData.get("fullName");
        const phone = formData.get("phone");
        const category = formData.get("competitionCategory");

        const message = encodeURIComponent(`Hello ${name}! 🎉 You have successfully registered for the "${category}" competition.`);
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <div className="container mt-5">
            <div className="row">
                {/* Left Container with Image */}
                <div className="col-md-6 d-flex flex-column align-items-center justify-content-center bg-danger text-white p-4 rounded-start">
                    <img 
                        src="https://t3.ftcdn.net/jpg/09/57/29/26/240_F_957292685_VQdCVhRCdajvb9qqg2PvkBLcM1weXrf7.jpg" 
                        alt="Competition Event" 
                        className="img-fluid rounded mb-3"
                    />
                    <h2 className="text-center">Unleash Your Talent! 🌟🏆</h2>
                    <p className="text-center">Join the most thrilling competition of the year! Register now!</p>
                </div>
                
                {/* Right Container with Form */}
                <div className="col-md-6 bg-light p-5 rounded-end shadow-lg">
                    <h3 className="text-center text-danger mb-4">Register for the Ultimate Competition</h3>
                    <form ref={form} onSubmit={sendNotifications}>
                        <div className="mb-3">
                            <input name="fullName" required type="text" className="form-control" placeholder="Full Name" />
                        </div>
                        <div className="mb-3">
                            <input name="email" required type="email" className="form-control" placeholder="Email Address" />
                        </div>
                        <div className="mb-3">
                            <input name="phone" required type="tel" className="form-control" placeholder="Phone Number (With Country Code)" />
                        </div>
                        <div className="mb-3">
                            <input name="city" required type="text" className="form-control" placeholder="City/Town of Residence" />
                        </div>
                        
                        <div className="mb-3">
                            <label className="form-label">Select Competition Category:</label>
                            <select name="competitionCategory" className="form-select" required>
                                <option value="">-- Choose Category --</option>
                                <option value="Coding Challenge">Coding Challenge</option>
                                <option value="Quiz Battle">Quiz Battle</option>
                                <option value="Art & Design">Art & Design</option>
                                <option value="Debate Competition">Debate Competition</option>
                                <option value="Music Performance">Music Performance</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Are you participating as a team?</label>
                            <div className="form-check">
                                <input type="radio" name="teamParticipation" value="yes" required className="form-check-input" />
                                <label className="form-check-label">Yes</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" name="teamParticipation" value="no" className="form-check-input" />
                                <label className="form-check-label">No</label>
                            </div>
                        </div>

                        <div className="mb-3">
                            <textarea name="teamDetails" className="form-control" placeholder="If yes, mention your team name and member details (Optional)"></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Experience Level:</label>
                            <div className="form-check">
                                <input type="radio" name="experienceLevel" value="beginner" required className="form-check-input" />
                                <label className="form-check-label">Beginner</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" name="experienceLevel" value="intermediate" className="form-check-input" />
                                <label className="form-check-label">Intermediate</label>
                            </div>
                            <div className="form-check">
                                <input type="radio" name="experienceLevel" value="advanced" className="form-check-input" />
                                <label className="form-check-label">Advanced</label>
                            </div>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" name="rulesAgreement" required className="form-check-input" />
                            <label className="form-check-label">I have read and agree to the competition rules.</label>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Are you bringing guests?</label>
                            <select name="guestsBringing" className="form-select">
                                <option value="">-- Select Number --</option>
                                <option value="0">None</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4+">4+</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <textarea name="specialRequests" className="form-control" placeholder="Special Requirements (Optional)"></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">How did you hear about the event?</label>
                            <select name="hearingSource" className="form-select">
                                <option value="">-- Select One --</option>
                                <option value="socialMedia">Social Media</option>
                                <option value="website">Website</option>
                                <option value="friend">Friend</option>
                                <option value="poster">Poster</option>
                                <option value="email">Email</option>
                                <option value="other">Other</option>
                            </select>
                        </div>

                        <div className="mb-3 form-check">
                            <input type="checkbox" name="newsletter" className="form-check-input" />
                            <label className="form-check-label">Subscribe to Event Updates?</label>
                        </div>

                        <button type="submit" className="btn btn-danger w-100">Register Now</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CompetitionRegistration;
