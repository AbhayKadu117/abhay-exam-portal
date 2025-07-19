import '../App.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="grid grid-4">
          <div className="footer-section">
            <h3>About SSC Maharashtra</h3>
            <p>The Maharashtra State Board of Secondary and Higher Secondary Education is a statutory and autonomous body established under the Maharashtra Secondary Boards Act.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/standards">Standards</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Important Links</h3>
            <ul>
              <li><a href="https://mahahsscboard.in/" target="_blank" rel="noopener noreferrer">Official Website</a></li>
              <li><a href="https://mahahsscboard.in/syllabus.html" target="_blank" rel="noopener noreferrer">Syllabus</a></li>
              <li><a href="https://mahahsscboard.in/result.html" target="_blank" rel="noopener noreferrer">Results</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <address>
              Maharashtra State Board of Secondary and Higher Secondary Education<br />
              Shivajinagar, Pune - 411004<br />
              Maharashtra, India<br />
              <i className="fas fa-phone"></i> +91-20-25651240<br />
              <i className="fas fa-envelope"></i> info@mahahsscboard.in
            </address>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} SSC Maharashtra Board. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer