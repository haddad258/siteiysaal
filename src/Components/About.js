import React from "react";
import Doctor from "../Assets/doctor-group.png";
import SolutionStep from "./SolutionStep";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={Doctor} alt="Doctor Group" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>À propos de nous</span>
        </h3>
        <p className="about-description">
          IYSAAL est une start-up dynamique spécialisée dans le développement d'applications logistiques avancées.
          Leur plateforme offre des solutions innovantes pour optimiser la chaîne d'approvisionnement, améliorer
          la gestion des stocks et rationaliser les opérations logistiques pour les entreprises de toutes tailles.
          Leur équipe de développeurs expérimentés combine une expertise technique approfondie avec une compréhension
          approfondie des défis logistiques modernes pour offrir des solutions sur mesure et évolutives.
        </p>

        <h4 className="about-text-title">Notre solutions</h4>

        <SolutionStep
          title="Solutions Logistiques Innovantes"
          description="Nous offrons des solutions logistiques innovantes pour simplifier la gestion des flux de marchandises et améliorer l'efficacité des chaînes d'approvisionnement."
        />
        <SolutionStep
          title="Optimisation des Stocks avec nos Solutions de Gestion"
          description="Avec notre expertise en gestion de stock, nous aidons les entreprises à optimiser leurs niveaux de stock, réduire les coûts de stockage et éviter les pénuries."
        />

        <SolutionStep
          title="Gestion Logistique Simplifiée avec nos Applications Mobiles"
          description="Notre équipe de développement d'applications mobiles crée des applications conviviales et intuitives pour faciliter la gestion logistique sur le terrain, où que vous soyez."
        />
        <SolutionStep
          title="Gestion Intégrée grâce à nos Solutions ERP Complètes"
          description="Nous proposons des solutions ERP complètes qui intègrent toutes les facettes de votre entreprise, de la logistique à la comptabilité, pour une gestion globale et transparente de vos opérations. "
        />
        <SolutionStep
          title="Gestion Précise grâce à nos Solutions d'Étiquetage"
          description="Nos solutions d'étiquetage facilitent l'identification et le suivi des produits tout au long de leur parcours, garantissant une gestion précise et efficace des stocks."
        />


      </div>
    </div>
  );
}

export default About;
