
function About() {
    return (
        <>
            <section className="about py-100 justify-content-center  d-flex align-items-center">
                <div className="container">
                    <div className="row">
                        <section className="about-outer   gap-3 justify-content-center d-flex">
                            <div className="about-in" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                                <div className="about-img">
                                    <div className="about-inner">
                                        <img src="/public/static/images/me.png" alt="Me" />
                                    </div>
                                </div>
                            </div>
                            <div className="justify-content-center align-items-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                                <div className="about-content">
                                    <h1 className="section-heading">
                                        <img src="/public/static/images/star-2.png" alt="" />
                                        Self-summary
                                        <img src="/public/static/images/star-2.png" alt="" />
                                    </h1>
                                </div>
                                <div className="about-contents-box">
                                    <img src="/public/static/images/icon2.png" alt="" />
                                    <div className="about-more mt-4">
                                        <h2>Ajay Makavana</h2>
                                        <p>
                                            I am Ajay Makavana, and I am currently in my second year at Bhagwan Mahavir
                                            University, pursuing a Bachelor degree in Computer Applications. I have a strong
                                            passion for web development and coding, and I am continually honing my skills in
                                            these areas.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="education mt-4 justify-content-center align-items-center d-flex" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="about-edu">
                                            <h4>EDUCATION</h4>
                                            <ul>
                                                <li className="mt-4">
                                                    <p className="date">2022 - 2025</p>
                                                    <h3>Bachelor Degree in Computer Application</h3>
                                                    <p className="type">University of Bhagwan Mahavir</p>
                                                </li>
                                                <li>
                                                    <p className="date">2022 - 2024</p>
                                                    <h3>Master Degree in Full Stack Development</h3>
                                                    <p className="type">Red & White Multimedia Education</p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="about-profile-box mt-4 d-flex gap-3">
                            <div className="profile col-3" data-aos="fade-right">
                                <div className="inner-profile">
                                    <a href="https://wa.me/9427939719"><i className="bi bi-whatsapp"></i></a>
                                    <a href="https://x.com/Ajaymakvana473"><i className="bi bi-twitter"></i></a>
                                </div>
                                <div className="pro d-flex">
                                    <div className="infos mt-3">
                                        <h5>STAY WITH ME</h5>
                                        <h2>Profiles</h2>
                                    </div>
                                    <div style={{ marginLeft: '70px', marginTop: '25px' }}>
                                        <a href="#" className="about-btn">
                                            <img src="/public/static/images/icon.svg" alt="" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="about-contact-box col-6 position-rel" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1000">
                                <img src="/public/static/images/icon2.png" alt="" />
                                <div className="d-flex mt-5">
                                    <div style={{ marginLeft: '40px', width: '350px' }}>
                                        <h2>Let <br />work <span>together.</span></h2>
                                    </div>
                                    <img src="/public/static/images/icon.svg" alt="Me" className="about-btn" />
                                </div>
                            </div>
                            {/* <a href="credential.html" className="text-decoration-none"> */}
                                <div className="infos-box">
                                    <div className="info-box" data-aos="fade-left">
                                        <img src="/public/static/images/sign.png" alt="" />
                                        <div className="pro d-flex">
                                            <div className="infos mt-3">
                                                <h5>MORE ABOUT ME</h5>
                                                <h2>Credentials</h2>
                                            </div>
                                            <div style={{ marginLeft: '80px', marginTop: '25px' }}>
                                                <a href="#" className="about-btn">
                                                    <img src="/public/static/images/icon.svg" alt="" />
                                                </a>
                                            </div>
                                        </div>
                                        <a href="/public/static/images/icon.svg"></a>
                                    </div>
                                </div>
                            {/* </a> */}
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About