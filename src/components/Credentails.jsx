import { NavLink } from 'react-router-dom';
import me from '../components/public/static/images/me.png'

function Credentails() {
    return (
      <>
        <div className="page-transition"></div>
  
        <section className="py-100 " >
          <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
              <div className="credentials  d-flex gap-5">
                <div className="credentail-sidebar-wrap ">
                  <div className="credentail-sidebar text-center">
                    <div className="shadow-box">
                      <div className="img-box">
                        <img src={me} alt="My Image" className="profile-image" />
                      </div>
                      <h3>Ajay Makavana</h3>
                      <p>@ajaymakavana</p>
                      <ul className="social-links justify-content-center d-flex">
                        <li><a href="https://wa.me/9427939719"><i className="bi bi-whatsapp"></i></a></li>
                        <li><a href="https://x.com/Ajaymakvana473"><i className="bi bi-twitter-x"></i></a></li>
                        <li><a href="https://www.instagram.com/ajay_mk05/"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="https://www.facebook.com/ajay.makavana.52643821/"><i className="bi bi-facebook"></i></a></li>
                      </ul>
                      <NavLink to="/contact" className="theme-btn text-decoration-none">Contact Me </NavLink>
                    </div>
                  </div>
                </div>
                <div>
                  <section>
                    <div className="container">
                      <div className="row">
                        <div className="credential-content">
                          <div className="credentail-about">
                            <h3>ABOUT ME</h3>
                            <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit. Scelerisque fermentum duisi faucibus in ornare quam sisd sit amet luctussd fav venenatis, lectus magna fringilla zac urna, porttitor rhoncus dolor purus non enim praesent cuz elementum sahas facilisis leot.</p>
                          </div>
                          <div className="credentail-edu-exp-item credentail-education">
                            <h3>Education</h3>
                            <div className="credentail-edu-exp">
                              <h5>2022 - 2025</h5>
                              <h4>Bachelor Degree in Computer Application</h4>
                              <h6>University of Bhagwan Mahavir</h6>
                              <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                          </div>
                          <div className="credentail-edu-exp-item credentail-education">
                            <div className="credentail-edu-exp">
                              <h5>2022 - 2024</h5>
                              <h4>Master Degree in Full Stack Development</h4>
                              <h6>Red & White Multimedia Education</h6>
                              <p>Sit amet luctussd fav venenatis, lectus magna fringilla inis urna, porttitor rhoncus dolor purus non enim praesent in elementum sahas facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etisam dignissim diam quis enim lobortis viverra orci sagittis eu volutpat odio facilisis mauris sit.</p>
                            </div>
                          </div>
                          <div className="skill-wrap">
                            <h3>SKILLS</h3>
                            <div className="skill-items d-grid flex-wrap">
                              <div className="skill-item">
                                <span className="percent">90%</span>
                                <h4 className="name">HTML</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">90%</span>
                                <h4 className="name">CSS</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">60%</span>
                                <h4 className="name">JAVASCRIPT</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">95%</span>
                                <h4 className="name">BOOTSTRAP</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">80%</span>
                                <h4 className="name">JQUERY</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">60%</span>
                                <h4 className="name">C Langauage</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">70%</span>
                                <h4 className="name">C++</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">50%</span>
                                <h4 className="name">REACT JS</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">80%</span>
                                <h4 className="name">NODE JS</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">90%</span>
                                <h4 className="name">MongoDB</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">95%</span>
                                <h4 className="name">Express JS</h4>
                              </div>
                              <div className="skill-item">
                                <span className="percent">45%</span>
                                <h4 className="name">PostgreSQL</h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        <script src="css/aos-master/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
        <script src="js/all.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      </>
    );
  }
  
  export default Credentails;
  