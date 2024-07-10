import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from '../components/public/static/images/logo.svg'

function Footer() {
  const [isOnline, setIsOnline] = useState(true); // Assuming online by default
  const [error, setError] = useState(false); 
  
  useEffect(() => {
    // Check if the device is online
    const checkOnlineStatus = () => {
        setIsOnline(navigator.onLine); // Update state based on navigator.onLine
    };

    // Listen for changes in online status
    window.addEventListener('online', checkOnlineStatus);
    window.addEventListener('offline', checkOnlineStatus);

    // Initial check
    checkOnlineStatus();

    // Cleanup: remove event listeners when component unmounts
    return () => {
        window.removeEventListener('online', checkOnlineStatus);
        window.removeEventListener('offline', checkOnlineStatus);
    };
}, []);

useEffect(() => {
    // Display error message when offline
    if (!isOnline) {
        setError(true);
    } else {
        setError(false);
    }
}, [isOnline]);


const renderError = () => {
    if (error) {
       null
    }
    return null;
};
  return (
    <>
     {renderError()}
     {isOnline && (
      <footer className="footer-area mt-5">
        <div className="container">
          <div
            className="footer-content text-center"
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img src={logo} alt="Logo" />
            <nav>
              <ul className="footer-menu justify-content-center align-items-center mt-5 mb-5">
                <li>
                  <NavLink to="/" exact activeClassName="active">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/about" activeClassName="active">
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/works" activeClassName="active">
                    Works
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" activeClassName="active">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </nav>
            <p className="copyright mb-4">
              © All rights reserved by{" "}
              <span>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://themeforest.net/user/wordpressriver/portfolio"
                >
                  WordPressRiver
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
         )}
    </>
  );
}

export default Footer;
