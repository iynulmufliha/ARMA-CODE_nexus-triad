import React, { useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';

const ConcertEventRegistration = () => {
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

        // Get form data for WhatsApp
        const formData = new FormData(form.current);
        const name = formData.get("fullName");
        const phone = formData.get("phone");
        const genre = formData.get("musicGenre");

        // Send WhatsApp Notification
        const message = encodeURIComponent(`Hey ${name}! 🎶 You've successfully registered for the concert! Your preferred music genre: ${genre}. Get ready for an amazing experience!`);
        window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
    };

    return (
        <div className="d-flex vh-100">
            <div className="w-50 bg-danger d-flex flex-column align-items-center justify-content-center p-4 text-white">
                <img 
                    src="https://i.pinimg.com/736x/91/27/cb/9127cbe6c394101084866148f9d4bae1.jpg" 
                    alt="Concert Vibes" 
                    className="img-fluid mb-3"
                />
                <h2 className="text-center" style={{ fontFamily: 'Rock Salt, cursive' }}>
                    Feel the Beat, Live the Music! 🎶🔥
                </h2>
                <p className="text-center">Join us for an electrifying night of live performances, heart-thumping bass, and an unforgettable concert experience! Book your spot now!</p>
            </div>

            <div className="w-50 p-5 bg-dark text-light">
                <h3 className="text-center text-danger">Register for the Concert Event</h3>
                <form ref={form} onSubmit={sendNotifications}>
                    <input name="fullName" type="text" className="form-control my-2" placeholder="Full Name" required />
                    <input name="email" type="email" className="form-control my-2" placeholder="Email Address" required />
                    <input name="phone" type="tel" className="form-control my-2" placeholder="Phone Number (With Country Code)" required />
                    <input name="city" type="text" className="form-control my-2" placeholder="City/Town" required />

                    <label className="text-danger">Preferred Music Genre:</label>
                    <select name="musicGenre" className="form-control my-2" required>
                        <option value="">-- Select Genre --</option>
                        <option value="Rock">Rock</option>
                        <option value="Pop">Pop</option>
                        <option value="Hip-Hop">Hip-Hop</option>
                        <option value="EDM">EDM</option>
                        <option value="Jazz">Jazz</option>
                    </select>

                    <label className="text-danger">Are you interested in VIP access?</label>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="vipAccess" value="yes" required /> Yes
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="vipAccess" value="no" /> No
                    </div>

                    <label className="text-danger">Concert Activities of Interest:</label>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="activities" value="Meet & Greet" /> Meet & Greet with Artists
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="activities" value="Merchandise Booth" /> Exclusive Merchandise Booth
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="activities" value="After Party" /> After Party Access
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="activities" value="Front Row" /> Front Row Experience
                    </div>

                    <label className="text-danger">Bringing along friends?</label>
                    <select name="friends" className="form-control my-2">
                        <option value="">-- Select Number --</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5+">5+</option>
                    </select>

                    <label className="text-danger">How did you hear about this concert?</label>
                    <select name="referral" className="form-control my-2">
                        <option value="">-- Select One --</option>
                        <option value="Social Media">Social Media</option>
                        <option value="Radio">Radio</option>
                        <option value="Friend">Friend</option>
                        <option value="Poster">Poster</option>
                        <option value="Website">Website</option>
                        <option value="Other">Other</option>
                    </select>

                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="subscribe" /> Subscribe to Event Updates?
                    </div>
                    <div className="form-check">
                        <input type="checkbox" className="form-check-input" name="terms" required /> I agree to the Terms & Conditions.
                    </div>

                    <button type="submit" className="btn btn-danger w-100 mt-3">Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default ConcertEventRegistration;
