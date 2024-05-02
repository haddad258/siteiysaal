import React, { useEffect, useState } from "react";
import Doctor from "../Assets/doctor-picture.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section ">
        <div className="text-section">
          <p className="text-headline">❤️ ❤️ Health comes first</p>
          <h5 className="text-title">
            Find your Doctor and make an Appointments
          </h5>
          <p className="text-descritpion">
          Notre société se spécialise dans le développement de solutions innovantes pour le suivi logistique et la gestion de la chaîne d'approvisionnement.
          </p>
          <p className="text-descritpion">
           Grâce à notre expertise technologique de pointe, nous offrons des outils robustes pour optimiser l'efficacité opérationnelle, réduire les coûts et améliorer la visibilité tout au long du processus logistique.
          </p>
          <p className="text-descritpion">
           Avec notre approche centrée sur la satisfaction client et l'innovation continue, nous sommes le partenaire idéal pour répondre aux défis complexes de la gestion de la supply chain.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Book Appointment
          </button>
          <div className="text-stats">
            <div className="text-stats-container">
              <p>IoT</p>
              <p> dans le secteur de la logistique</p>
            </div>

            <div className="text-stats-container">
              <p>Big data</p>
              <p>chaîne d'approvisionnement,améliorer les opérations</p>
            </div>

            <div className="text-stats-container">
              <p>technologie Cloud</p>
              <p>Solutions logistiques basées sur des solutions DevOps modernes </p>
            </div>
          </div>
          
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={Doctor} alt="Doctor" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
