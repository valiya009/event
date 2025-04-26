import '../Pages/Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          {/* Logo & Tagline */}
          <div className="footer-brand">
            <h2 className="brand-title">Harmoni</h2>
            <p className="brand-tagline">
              Creating unforgettable event experiences with style and simplicity.
            </p>
          </div>
  
          {/* Navigation Links */}
          <div className="footer-nav">
            <h3 className="nav-title">Quick Links</h3>
            <ul className="nav-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div className="footer-social">
            <h3 className="social-title">Follow Us</h3>
            <div className="social-links">
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-instagram"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
  
        {/* Divider */}
        <div className="footer-bottom">
          © {new Date().getFullYear()} Harmoni. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;