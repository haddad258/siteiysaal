import React from "react";


function Contact() {


  return (
    <section id="contact" class="contact section">
    <div class="container section-title" data-aos="fade-up">
      <h2>Contact</h2>
      {/* <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p> */}
    </div>

    <div class="container position-relative" data-aos="fade-up" data-aos-delay="100">

      <div class="row gy-4">

        <div class="col-lg-5">
          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
            <i class="bi bi-geo-alt flex-shrink-0"></i>
            <div>
              <h3>Addresse</h3>
              <p>18 Rue Malaga Manar 1 - 2092</p>
            </div>
          </div>

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
            <i class="bi bi-telephone flex-shrink-0"></i>
            <div>
              <h3>Tél</h3>
              <p>+216 71 870 031 </p>
            </div>
          </div>

          <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
            <i class="bi bi-envelope flex-shrink-0"></i>
            <div>
              <h3>Email</h3>
              <p>contact@iysaal.com</p>
            </div>
          </div>

        </div>

        <div class="col-lg-7">
          <form action="forms/contact.php" method="post" class="php-email-form" data-aos="fade-up" data-aos-delay="500">
            <div class="row gy-4">

              <div class="col-md-6">
                <input type="text" name="name" class="form-control" placeholder="Votre nom" required=""/>
              </div>

              <div class="col-md-6 ">
                <input type="email" class="form-control" name="email" placeholder="Votre email" required=""/>
              </div>

              <div class="col-md-12">
                <input type="text" class="form-control" name="subject" placeholder="Objet" required=""/>
              </div>

              <div class="col-md-12">
                <textarea class="form-control" name="message" rows="6" placeholder="Message" required=""></textarea>
              </div>

              <div class="col-md-12 text-center">
                <div class="loading">Loading</div>
                <div class="error-message"></div>
                <div class="sent-message">Your message has been sent. Thank you!</div>

                <button type="submit">Envoyer</button>
              </div>

            </div>
          </form>
        </div>
      </div>

    </div>

  </section>
  );
}

export default Contact;
