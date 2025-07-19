import { useState } from 'react'
import '../App.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    standard: '',
    message: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message. We will get back to you soon!')
    setFormData({
      name: '',
      email: '',
      standard: '',
      message: ''
    })
  }

  return (
    <div className="contact-page slide-up">
      <h1>Contact Us</h1>
      
      <div className="grid grid-2">
        <div className="contact-form card">
          <h2>Help & Support</h2>
          <p>Have questions or need assistance? Fill out the form below and our team will get back to you.</p>
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                className="form-control" 
                value={formData.name}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                className="form-control" 
                value={formData.email}
                onChange={handleChange}
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="standard">Standard</label>
              <select 
                id="standard" 
                name="standard" 
                className="form-control" 
                value={formData.standard}
                onChange={handleChange}
                required
              >
                <option value="">Select your standard</option>
                <option value="5">Standard 5</option>
                <option value="6">Standard 6</option>
                <option value="7">Standard 7</option>
                <option value="8">Standard 8</option>
                <option value="9">Standard 9</option>
                <option value="10">Standard 10</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea 
                id="message" 
                name="message" 
                rows="5" 
                className="form-control" 
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="btn">Submit</button>
          </form>
        </div>
        
        <div className="contact-info">
          <div className="card">
            <h2>Head Office</h2>
            <address>
              <strong>Maharashtra State Board of Secondary and Higher Secondary Education</strong><br />
              Shivajinagar, Pune - 411004<br />
              Maharashtra, India<br /><br />
              
              <i className="fas fa-phone"></i> <strong>Phone:</strong> +91-20-25651240<br />
              <i className="fas fa-envelope"></i> <strong>Email:</strong> info@mahahsscboard.in<br />
              <i className="fas fa-globe"></i> <strong>Website:</strong> https://mahahsscboard.in
            </address>
          </div>
          
          <div className="card mt-4">
            <h2>Regional Offices</h2>
            <ul className="regional-offices">
              <li>
                <strong>Mumbai Division:</strong> +91-22-26541234
              </li>
              <li>
                <strong>Nagpur Division:</strong> +91-712-2564123
              </li>
              <li>
                <strong>Aurangabad Division:</strong> +91-240-2334123
              </li>
              <li>
                <strong>Nashik Division:</strong> +91-253-2574123
              </li>
              <li>
                <strong>Kolhapur Division:</strong> +91-231-2665123
              </li>
            </ul>
          </div>
          
          <div className="card mt-4">
            <h2>Emergency Helpline</h2>
            <p>For examination-related emergencies during exam periods:</p>
            <p className="helpline-number">
              <i className="fas fa-phone-alt"></i> 1800-123-4567 (Toll Free)
            </p>
            <p>Available from 8:00 AM to 8:00 PM during examination months</p>
          </div>
        </div>
      </div>
      
      <div className="map-container card mt-4">
        <h2>Location</h2>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.041562056497!2d73.8473133148935!3d18.52973398740579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c065144d8edf%3A0x3703b8095866c54b!2sMaharashtra%20State%20Board%20of%20Secondary%20and%20Higher%20Secondary%20Education!5e0!3m2!1sen!2sin!4v1624456789015!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
            title="MSBSHSE Location"
          ></iframe>
        </div>
      </div>
    </div>
  )
}

export default Contact