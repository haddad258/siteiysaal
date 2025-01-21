import React from "react";

function Stats() {
  return (
    <section id="stats" class="stats section">
      <div class="container" data-aos="fade-up" data-aos-delay="100">
        <div class="row gy-4 align-items-center">
          <div class="col-lg-5">
            <img src="assets/img/stats-img.svg" alt="" class="img-fluid" />
          </div>

          <div class="col-lg-7">
            <div class="row gy-4">
              <div class="col-lg-6">
                <div class="stats-item d-flex">
                  <i class="bi bi-emoji-smile flex-shrink-0"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="232"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Clients Satisfaits: </strong>{" "}
                      <span>Notre priorité est de répondre aux attentes de nos clients et de dépasser leurs exigences en leur offrant des solutions qui font réellement la différence.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="stats-item d-flex">
                  <i class="bi bi-journal-richtext flex-shrink-0"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="521"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Projets: </strong>{" "}
                      <span>Chaque projet est une nouvelle opportunité pour nous de livrer des solutions innovantes qui apportent une réelle valeur ajoutée à nos clients.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="stats-item d-flex">
                  <i class="bi bi-headset flex-shrink-0"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="1453"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Support Flexible:</strong>{" "}
                      <span>Nous offrons un support dédié à nos clients, disponible pendant des heures étendues pour répondre à leurs besoins et résoudre rapidement leurs problèmes.</span>
                    </p>
                  </div>
                </div>
              </div>

              <div class="col-lg-6">
                <div class="stats-item d-flex">
                  <i class="bi bi-people flex-shrink-0"></i>
                  <div>
                    <span
                      data-purecounter-start="0"
                      data-purecounter-end="32"
                      data-purecounter-duration="1"
                      class="purecounter"
                    ></span>
                    <p>
                      <strong>Des Professionnels Passionnés</strong>{" "}
                      <span>Chez Iysaal, notre équipe travaille sans relâche pour garantir des résultats exceptionnels, en mettant tout en œuvre pour dépasser vos attentes.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
