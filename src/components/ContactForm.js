import React from "react";
import contactInfo from "../../public/DB/contact.json"

export default function ContactForm() {
  return (
    <section id="contact" class="contact section">
      <div class="container">
        <div class="row gy-4">
          {
            contactInfo.contactDetail.map((item) => (
              <div key={item.title} class="col-lg-4">
                <div class="info-item d-flex flex-column justify-content-center align-items-center">
                  <i class={item.icon}></i>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </div>
            ))
          }
        </div>

        <div class="row gy-4 mt-1">
          <div class="col-lg-6 map">
            <iframe src={contactInfo.googleMap} frameborder="0" ></iframe>
          </div>

          <div class="col-lg-6">
            <form action="forms/contact.php" method="post" class="php-email-form">
              <div class="row gy-4">

                <div class="col-md-6">
                  <input type="text" name="name" class="form-control" placeholder="Your Name" required="" />
                </div>

                <div class="col-md-6 ">
                  <input type="email" class="form-control" name="email" placeholder="Your Email" required="" />
                </div>

                <div class="col-md-12">
                  <input type="text" class="form-control" name="subject" placeholder="Subject" required="" />
                </div>

                <div class="col-md-12">
                  <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
                </div>

                {/* <div class="col-md-12 text-center">
                    <div class="loading">Loading</div>
                    <div class="error-message"></div>
                    <div class="sent-message">Your message has been sent. Thank you!</div>
                    <button type="submit">Send Message</button>
                  </div> */}

              </div>
            </form>
          </div>

        </div>

      </div>

    </section>
  )
}
