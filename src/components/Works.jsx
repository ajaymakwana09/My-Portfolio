
import project1 from '../components/public/static/images/project1.jpeg';
import project2 from '../components/public/static/images/project2.jpeg';
import project3 from '../components/public/static/images/project3.jpeg';
import project4 from '../components/public/static/images/project4.jpeg';
import project5 from '../components/public/static/images/project5.jpeg';
import project6 from '../components/public/static/images/project6.jpeg';
import icon from '../components/public/static/images/icon.svg';
import star2 from '../components/public/static/images/star-2.png';

function Works() {
    return (
        <section className="project py-100">
            <div className="container">
                <div className="projectses d-flex gap-3 justify-content-center">
                    <div className=" project-items">
                        <div className="project-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                            <div className="project-img">
                                <img src={project1} alt="" />
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <p className="m-0">WEB DESIGNING</p>
                                    <h2>Dynamic</h2>
                                </div>
                                <a href="#" className="project-btn">
                                    <img src={icon} alt="" />
                                </a>
                            </div>
                        </div>
                        <div className="project-item" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                            <div className="project-img">
                                <img src={project2} alt="" />
                            </div>
                            <div className="d-flex justify-content-between mt-3">
                                <div>
                                    <p className="m-0">PHOTOGRAPHY</p>
                                    <h2>Disel 1</h2>
                                </div>
                                <a href="#" className="project-btn">
                                    <img src={icon} alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="project-items1 col-8">
                        <h1 className="section-heading" data-aos="zoom-in-left" data-aos-delay="200" data-aos-duration="1000">
                            <img src={star2} alt=""/>
                            ALL PROJECTS
                            <img src={star2} alt=""/>
                        </h1>
                        <div className="project1 d-flex gap-3 mt-4 justify-content-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                            <div className="project-item mb-0">
                                <div className="project-img">
                                    <img src={project3} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p className="m-0">WEB DESIGNING</p>
                                        <h2>Dynamic</h2>
                                    </div>
                                    <a href="#" className="project-btn">
                                        <img src={icon} alt=""/>
                                    </a>
                                </div>
                            </div>
                            <div className="project-item mb-0">
                                <div className="project-img">
                                    <img src={project4} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p className="m-0">WEB DESIGNING</p>
                                        <h2>Dynamic</h2>
                                    </div>
                                    <a href="#" className="project-btn">
                                        <img src={icon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="project2 d-flex gap-3 mt-4 justify-content-center" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="2000">
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={project5} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p className="m-0">MOBILE DESIGNING</p>
                                        <h2>Submarine</h2>
                                    </div>
                                    <a href="#" className="project-btn">
                                        <img src={icon} alt="" />
                                    </a>
                                </div>
                            </div>
                            <div className="project-item">
                                <div className="project-img">
                                    <img src={project6} alt="" style={{ width: '100%' }} />
                                </div>
                                <div className="d-flex justify-content-between mt-3">
                                    <div>
                                        <p className="m-0">WEB DESIGNING</p>
                                        <h2>Hydra Merc</h2>
                                    </div>
                                    <a href="#" className="project-btn">
                                        <img src={icon} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}


export default Works;
