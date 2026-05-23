import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>If you're interested in quantum computing research, robotics applications, or full-stack software development collaborations, feel free to reach out:</p>
        </div>

        <div className="row">
          
          {/* Info Details Cards */}
          <div className="col-lg-5 d-flex align-items-stretch">
            <div className="info">
              
              <div className="address">
                <i className="fa-solid fa-location-dot"></i>
                <h4>Location:</h4>
                <p>Istanbul, Turkey</p>
              </div>

              <div className="email">
                <i className="fa-solid fa-envelope"></i>
                <h4>Email:</h4>
                <p><a href="mailto:yasimdoner@gmail.com">yasimdoner@gmail.com</a></p>
              </div>

              <div className="phone">
                <i className="fa-solid fa-mobile-screen-button"></i>
                <h4>Call:</h4>
                <p><a href="tel:+905510228199">+90 551 022 81 99</a></p>
              </div>

              <div className="iframe-map-container mt-4">
                {/* Embed a generic elegant visual placeholder or mini dark styled map */}
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d192634.6186981881!2d28.872097059124424!3d41.00537021111626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1cc1914d68a11b4!2zSXN0YW5idWwsIFR1cmtleQ!5e0!3m2!1sen!2sus!4v1680000000000!5m2!1sen!2sus" 
                  frameBorder="0" 
                  style={{ border: 0, width: '100%', height: '290px', borderRadius: '8px' }} 
                  allowFullScreen 
                  title="Google Maps Istanbul"
                ></iframe>
              </div>

            </div>
          </div>

          {/* Form Box */}
          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
            <form onSubmit={handleSubmit} className="email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label htmlFor="name">Your Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    className="form-control" 
                    id="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label htmlFor="email">Your Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">Subject</label>
                <input 
                  type="text" 
                  className="form-control" 
                  name="subject" 
                  id="subject" 
                  required 
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">Message</label>
                <textarea 
                  className="form-control" 
                  name="message" 
                  rows="10" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <div className="my-3">
                {isSent && (
                  <div className="sent-message">
                    Your message has been sent. Thank you!
                  </div>
                )}
              </div>

              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
