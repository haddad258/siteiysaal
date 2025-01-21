import React from "react";
// import "../Styles/About.css";

function About() {
  return (
    <section id="about" class="about section">

      <div class="container section-title" data-aos="fade-up">
        <h2>À propos de nous</h2>
        <p>Notre mission principale est d'offrir des outils technologiques innovants, performants et entièrement adaptés aux besoins uniques de chaque entreprise, quelle que soit sa taille ou son secteur d'activité.</p>
      </div>

      <div class="container">

        <div class="row gy-5">

          <div class="content col-xl-5 d-flex flex-column" data-aos="fade-up" data-aos-delay="100">
            <h3>Innovation</h3>
            <p>
            Chez Iysaal, nous intégrons les technologies les plus récentes pour offrir à nos clients des systèmes performants, évolutifs et durables.
            </p>
            <a href="#" class="about-btn align-self-center align-self-xl-start"><span>À props de nous</span> <i class="bi bi-chevron-right"></i></a>
          </div>

          <div class="col-xl-7" data-aos="fade-up" data-aos-delay="200">
            <div class="row gy-4">

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-briefcase"></i>
                <h4><a href="" class="stretched-link">Expérience</a></h4>
                <p>Depuis sa création en 2020, Iysaal a acquis une expertise solide dans le domaine des ERP et des applications personnalisées.</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-gem"></i>
                <h4><a href="" class="stretched-link">Solutions adaptées</a></h4>
                <p>Chaque client est unique, et nous nous engageons à fournir des solutions sur mesure qui répondent à leurs besoins précis.</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-broadcast"></i>
                <h4><a href="" class="stretched-link">Support</a></h4>
                <p>Notre équipe d'experts dévoués accompagne chaque client dans la mise en œuvre et l'utilisation optimale de leurs solutions, garantissant ainsi leur succès."</p>
              </div>

              <div class="col-md-6 icon-box position-relative">
                <i class="bi bi-easel"></i>
                <h4><a href="" class="stretched-link">Support</a></h4>
                <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;
