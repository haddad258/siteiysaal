import React from "react";
function Features() {

  return (
    <section id="features" class="features section">
      <div class="container section-title" data-aos="fade-up">
        <h2>Fonctionnalités</h2>
        <p>
        IYSAAL offre une suite complète de solutions pour la gestion d'entreprise
        </p>
      </div>

      <div class="container">
        <div class="row gy-4">
          <div
            class="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="features-item">
              <i class="bi bi-eye" style={{color: "#ffbb2c"}}></i>
              <h3>
                <a href="" class="stretched-link">
                  Stratégiques
                </a>
              </h3>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div class="features-item">
              <i class="bi bi-infinity" style={{color: "#5578ff"}}></i>
              <h3>
                <a href="" class="stretched-link">
                   Opérationnels
                </a>
              </h3>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div class="features-item">
              <i class="bi bi-mortarboard" style={{color: "#e80368"}}></i>
              <h3>
                <a href="" class="stretched-link">
                  Humains
                </a>
              </h3>
            </div>
          </div>

          <div
            class="col-lg-3 col-md-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div class="features-item">
              <i class="bi bi-nut" style={{color:" #e361ff"}}></i>
              <h3>
                <a href="" class="stretched-link">
                  Financiers
                </a>
              </h3>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
}

export default Features;
