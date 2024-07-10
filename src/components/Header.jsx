import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { NavLink } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from '../components/public/static/images/logo.svg'
import './Header.css';
import '../media.css'

const Header = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isOnline, setIsOnline] = useState(true); // Assuming online by default
    const [error, setError] = useState(false);

    useEffect(() => {
        AOS.init();
    }, []);


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

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div>
            <div className="page-transition"></div>
            {renderError()}
            {isOnline && (
                <header className="header">
                    <div className="container">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-3">
                                <div className="logo" data-aos="fade-down">
                                    <NavLink to="/">
                                    <img src={logo} alt="My Logo" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className="col-6 text-end">
                                <nav className="navbar" data-aos="fade-down" data-aos-delay="200" data-aos-duration="1000">
                                    <ul className="d-flex justify-content-center m-0">
                                        <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
                                        <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
                                        <li><NavLink to="/works" activeClassName="active">Works</NavLink></li>
                                        <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="button col-3 text-right" data-aos="fade-down">
                                <NavLink to="/contact" className="theme-btn text-decoration-none">Let&apos;s talk</NavLink>
                            </div>
                        </div>
                    </div>

                    <button onClick={toggleSidebar} className="toggle-btn d-block d-lg-none">
                        <i className={`bi bi-list${isSidebarOpen ? '-x' : ''}`}></i>
                    </button>

                </header>
            )}
            <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
                <button className="close-btn" onClick={() => setIsSidebarOpen(false)}>&times;</button>
                <nav>
                    <ul>
                        <li><NavLink exact to="/" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>Home</NavLink></li>
                        <li><NavLink to="/about" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>About</NavLink></li>
                        <li><NavLink to="/works" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>Works</NavLink></li>
                        <li><NavLink to="/contact" activeClassName="active" onClick={() => setIsSidebarOpen(false)}>Contact</NavLink></li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Header;
