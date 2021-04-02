import React from "react";

const Contact = () => {
  return (
    <div>
      <section className="contact" id="contact">
        <div className="max-width">
          <h2 className="title">Contact me</h2>
          <div className="contact-content">
            <div className="column left">
              <div className="text">Get in Touch</div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis
                aliquam ut ratione exercitationem ab, voluptatem ex numquam quam
                at tempore!
              </p>
              <div className="icons">
                <div className="row">
                  <i className="fas fa-user"></i>
                  <div className="info">
                    <div className="head">Name</div>
                    <div className="sub-title">Ramanes Ramalingam</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-map-marker-alt"></i>
                  <div className="info">
                    <div className="head">Address</div>
                    <div className="sub-title">selangor malaysia</div>
                  </div>
                </div>
                <div className="row">
                  <i className="fas fa-envelope"></i>
                  <div className="info">
                    <div className="head">Email</div>
                    <div className="sub-title">ramanes3822@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="column right">
              <div className="text">Message me</div>
              <form autocomplete="off" method="post" name="google-sheet">
                <div className="fields">
                  <div className="field name">
                    <input
                      type="text"
                      placeholder="Name"
                      name="Name"
                      required
                    />
                  </div>
                  <div className="field email">
                    <input
                      type="email"
                      placeholder="Email"
                      name="Email"
                      required
                    />
                  </div>
                </div>
                <div className="field">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="Subject"
                    required
                  />
                </div>
                <div className="field textarea">
                  <textarea
                    cols="30"
                    rows="10"
                    placeholder="Describe project.."
                    required
                    name="Describe"
                  ></textarea>
                </div>
                <div className="button">
                  <button type="submit" name="submit">
                    Send message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
