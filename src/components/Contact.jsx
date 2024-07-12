import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Icon2 from '../components/public/static/images/icon2.png'


function Contact() {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form fields
    if (!contact.username || !contact.email || !contact.subject || !contact.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        setContact({
          username: "",
          email: "",
          subject: "",
          message: "",
        });
        const data = await response.json();
        console.log(data);
        toast.success("Message sent successfully!");
      } else {
        throw new Error("Message not delivered");
      }
    } catch (error) {
      toast.error("Message not sent!");
      console.error(error.message);
    }
  };
  return (
    <div>
      <div className="page-transition"></div>
      <section className="contact-area py-100">
        <div className="container">
          <div className="row d-flex">
            <div className="contacts-area d-flex gap-5">
              <div
                className="contact-info"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <h4>Contact Info</h4>
                <ul className="contact-details">
                  <li className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="right">
                      <span>MAIL US</span>
                      <h5>avmakavana677@gmail.com</h5>
                      <h5>avmakavana640@gmail.com</h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-telephone"></i>
                    </div>
                    <div className="right">
                      <span>CONTACT US</span>
                      <h5>+91 94279 39719 </h5>
                      <h5>+91 91045 14771</h5>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="icon-box">
                      <i className="bi bi-geo-alt"></i>
                    </div>
                    <div className="right">
                      <span>Location</span>
                      <h5>
                        22 Baker Street, Texas
                        <br />
                        United States
                        <br />
                        W1U 3BW
                      </h5>
                    </div>
                  </li>
                </ul>
                <h4 data-aos="fade-up" className="aos-init aos-animate">
                  Social Info
                </h4>
                <ul className="social-links d-flex p-0 gap-3 align-items-center justify-content-center " data-aos="fade-up">
                  <li>
                    <a target="_blank" className="shadow-box" href="https://wa.me/9427939719">
                      <i className="bi bi-whatsapp"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="shadow-box" href="https://x.com/Ajaymakvana473">
                    <i className="bi bi-twitter-x"></i>
                    </a>
                  </li>
                  <li>
                    <a target="_blank" className="shadow-box" href="https://www.instagram.com/ajay_mk05/">
                    <i className="bi bi-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              <div
                className="contact-form"
                data-aos="zoom-in-down"
                data-aos-delay="200"
                data-aos-duration="1000"
              >
                <div className="shadow-box">
                  <img src={Icon2} alt="" />
                  <h2>
                    Let’s work <span>together.</span>
                  </h2>
                </div>
                <div className="forms shadow-box">
                  <form onSubmit={handleSubmit}>
                    <div className="input-group">
                      <p>
                        <span>
                          <input
                            type="text"
                            name="username"
                            value={contact.username}
                            onChange={handleInput}
                            placeholder="Name *"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="input-group">
                      <p>
                        <span>
                          <input
                            type="email"
                            name="email"
                            value={contact.email}
                            onChange={handleInput}
                            placeholder="Email *"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="input-group">
                      <p>
                        <span>
                          <input
                            type="text"
                            name="subject"
                            value={contact.subject}
                            onChange={handleInput}
                            placeholder="Your Subject *"
                          />
                        </span>
                      </p>
                    </div>
                    <div className="input-group">
                      <p>
                        <span>
                          <textarea
                            name="message"
                            value={contact.message}
                            onChange={handleInput}
                            cols="40"
                            rows="10"
                            placeholder="Your Message *"
                          ></textarea>
                        </span>
                      </p>
                    </div>
                    <div className="input-group">
                      <p>
                        <button
                          className="theme-btn submit-btn"
                          type="submit"
                          name="submit"
                        >
                          Send Message
                        </button>
                      </p>
                    </div>
                  </form>
                </div>
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
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </div>
  );
}

export default Contact;
