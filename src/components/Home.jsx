import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import me from '../components/public/static/images/me.png'
import icon from '../components/public/static/images/icon.svg';
import bg1 from '../components/public/static/images/bg1.png'
import sign from '../components/public/static/images/sign.png';
import myworks from '../components/public/static/images/my-works.png';
import gFonts from '../components/public/static/images/gfonts.png';
import Icon2 from '../components/public/static/images/icon2.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'aos/dist/aos.js';
import '../index.css'
import '../media.css'
import './ErrorPage.css';
import { NavLink } from 'react-router-dom';


function Home() {
    const [isLoading, setIsLoading] = useState(true);
    const [isOnline, setIsOnline] = useState(true); // Assuming online by default
    const [error, setError] = useState(false); // State to track internet error

    useEffect(() => {

        const visited = localStorage.getItem('visited');

        if (visited) {
            setIsLoading(false);
        } else {
            AOS.init();

            window.addEventListener('load', () => {
                setTimeout(() => {
                    document.querySelector('.loading-area').style.display = 'none';
                    document.body.classList.remove('hidden');
                    localStorage.setItem('visited', true);
                    setIsLoading(false);
                }, 3000);
            });

            return () => {
                window.removeEventListener('load', () => { });
            };
        }

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
            return (
                <div className="error-container">
                    <div className="error-content">
                        <h1 className="animated-text">Oops!</h1>
                        <p className="animated-text">It seems you &apos;re offline.</p>
                        <p className="animated-text">Please check your internet connection.</p>
                    </div>
                </div>
            );
        }

        return null;
    };

    return (

        <div>
            {isLoading && (
                <div>
                    <div className="page-transition"></div>
                    {/* <div className="loading-area">
                        <div className="loader"></div>
                    </div> */}
                </div>
            )}


            {renderError()}
            {isOnline && (
                <section className="about-area py-100">
                    <div className="container">
                        <div className="row">
                            <section className="d-flex gap-3 justify-content-center">
                                <div className="d-flex about-me col-12 col-sm-6 position-rel shadow-box" data-aos="zoom-out" data-aos-delay="200"
                                    data-aos-duration="1000" >
                                    <div className="about-wrap">
                                        <img src={bg1} alt="" className="bg-img" />
                                        <div className="img-box" >
                                            <img src={me} alt="Black and White Image"
                                                className="full-width full-size bw-effect" />
                                        </div>
                                    </div>

                                    <div className="infos mt-4">
                                        <h5>A WEB DEVELOPER</h5>
                                        <h1>AJAY MAKAVANA</h1>
                                        <p>I am a Web Developer based in Pune.</p>
                                        <a href="#" className="about-btn">
                                            <img src={icon} alt="" className="mt-4" />
                                        </a>
                                    </div>
                                </div>
                                <div className='col-12 col-lg-6'>
                                    <div className="about-credentail-wrap " data-aos="zoom-in" data-aos-delay="200"
                                        data-aos-duration="1500">
                                        <div className="banner">
                                            <span>LATEST WORK AND FEATURED@LATEST WORK AND FEATURED-LATEST@</span>
                                        </div>
                                        <div className="about-flex col-12 col-lg-6 d-flex gap-3 mt-4">
                                            <NavLink to="/credentails" className="text-decoration-none">
                                                <div className="info-box">
                                                    <img src={sign} alt="" />
                                                    <div className="inform d-flex">
                                                        <div className="infos mt-3">
                                                            <h5>MORE ABOUT ME</h5>
                                                            <h2>Credentials</h2>
                                                        </div>
                                                        <div style={{ marginLeft: '80px', marginTop: '25px' }}>
                                                            <a href="#" className="about-btn">
                                                                <img src={icon} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </NavLink>
                                            <NavLink to="/works" className="text-decoration-none">
                                                <div className="info-box">
                                                    <img src={myworks} alt="" />
                                                    <div className="inform d-flex">
                                                        <div className="infos mt-3">
                                                            <h5>SHOWCASE</h5>
                                                            <h2>Projects</h2>
                                                        </div>
                                                        <div style={{ marginLeft: '80px', marginTop: '25px' }}>
                                                            <a href="#" className="about-btn">
                                                                <img src={icon} alt="" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div></NavLink>

                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="col-12 d-flex mt-4 gap-2  justify-content-center ">
                                <div className="blog col-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                                    <img src={gFonts} alt="Work" />
                                    <div className="inform d-flex">
                                        <div className="infos mt-5">
                                            <h5>BLOG</h5>
                                            <h2>GFonts</h2>
                                        </div>
                                        <div style={{ marginLeft: '100px', marginTop: '55px' }}>
                                            <a href="#" className="about-btn">
                                                <img src={icon} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="icons col-6" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2500">
                                    <div className="icon-box d-flex gap-5 mt-5 justify-content-center">
                                        <i className="bi bi-camera icon-stroke"></i>
                                        <i className="bi bi-pencil-fill icon-stroke"></i>
                                        <i className="bi bi-filter-circle-fill icon-stroke"></i>
                                        <i className="bi bi-phone-flip icon-stroke"></i>
                                    </div>
                                    <div className="case d-flex mt-4">
                                        <div className="infos mt-5">
                                            <h5>SPECIALIZATION</h5>
                                            <h2>Services Offering</h2>
                                        </div>
                                        <div style={{ marginLeft: '55%', marginTop: '55px' }}>
                                            <a href="#" className="about-btn">
                                                <img src={icon} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="profile col-3" data-aos="fade-up" data-aos-delay="200" data-aos-duration="2000">
                                    <div className="inener-profile">
                                        <a href="https://wa.me/9427939719"><i className="bi bi-whatsapp"></i></a>
                                        <a href="https://www.instagram.com/ajay_mk05/"><i className="bi bi-instagram"></i></a>
                                    </div>
                                    <div className=" inform d-flex">
                                        <div className="infos mt-3">
                                            <h5>STAY WITH ME</h5>
                                            <h2>Profiles</h2>
                                        </div>
                                        <div style={{ marginLeft: '70px', marginTop: '25px' }}>
                                            <a href="#" className="about-btn">
                                                <img src={icon} alt="" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <section className="d-flex mt-4 position-rel gap-3 justify-content-center ">
                                <div className=" info-box col-6  d-flex  justify-content-center align-items-center gap-2 "
                                    data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                                    <div className="client-item col-4">
                                        <h2>00</h2>
                                        <p>Years <br />Experience</p>
                                    </div>
                                    <div className="client-item col-4">
                                        <h2>+00</h2>
                                        <p>CLIENTS <br />WORLDWIDE</p>
                                    </div>
                                    <div className="client-item col-4">
                                        <h2>+50</h2>
                                        <p>TOTAL <br />PROJECTS</p>
                                    </div>
                                </div>
                                <NavLink to='/contact' className="about-contact-box text-decoration-none" data-aos="zoom-in" data-aos-delay="200"
                                    data-aos-duration="2000">
                                    <div className="about-contact-box col-6 position-rel" >
                                        <img src={Icon2} alt="" />
                                        <div className=" inform d-flex mt-1">
                                            <div className="" style={{ marginLeft: '40px', width: '350px' }}>
                                                <h2>Lets <br />work <span>together.</span></h2>
                                            </div>
                                            <img src={icon} alt="Me" className="about-btn" />
                                        </div>
                                    </div>
                                </NavLink>

                            </section>
                        </div>
                    </div>
                </section>
            )
            }
        </div>
    );
}



export default Home;
