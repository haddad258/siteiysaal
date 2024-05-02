import React from "react";
import InformationCard from "./InformationCard";
import {  faCircleArrowUp, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons/faSearchPlus";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>Solutions technologiques de la logistique.</span>
        </h3>
        <p className="info-description">
        Les avancées dans le développement de logiciels dédiés à la logistique transforment fondamentalement la manière dont la gestion de la chaîne d'approvisionnement est abordée.
         Ces solutions offrent une gestion efficace du transport, un suivi en temps réel, un contrôle des stocks et une intégration fluide avec d'autres systèmes. Elles permettent aux entreprises de prendre des décisions basées sur les données,
          d'améliorer la satisfaction client et d'optimiser leurs opérations. 
        Découvrez comment les fonctionnalités robustes des logiciels de logistique peuvent rationaliser votre entreprise, assurer des livraisons ponctuelles et réduire les coûts
        </p>
        <p className="info-description">
        Une évaluation précise des coûts de mise en œuvre d'un logiciel nécessite une anticipation des besoins de votre entreprise et une définition claire de la portée du projet.
         Si vous êtes encore dans la phase d'idéation, nos développeurs expérimentés peuvent vous fournir une estimation précise des coûts, adaptée à vos besoins et objectifs spécifiques.
         Cela garantit une mise en œuvre rentable et réussie. Le prix final dépendra de divers facteurs.</p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Optimisation des Processus"
          description="Concevoir des solutions logicielles qui automatisent et optimisent les processus logistiques,
           de la gestion des stocks à la planification des itinéraires en passant par la gestion des entrepôts.
           L'objectif est d'améliorer l'efficacité opérationnelle, de réduire les coûts et d'augmenter la productivité."
          icon={faCircleArrowUp}
        />

        <InformationCard
          title="Traçabilité et Visibilité "
          description="Développer des systèmes qui offrent une traçabilité complète des produits tout au long de la chaîne d'approvisionnement,
           en utilisant des technologies telles que la RFID, les codes-barres et l'IoT. Ces solutions fournissent une visibilité en temps réel sur les marchandises, 
          ce qui permet aux entreprises de prendre des décisions plus éclairées et de répondre rapidement aux problèmes éventuels."
          icon={faMapLocation}
        />

        <InformationCard
          title="Intégration et Interopérabilité"
          description=" Créer des logiciels qui peuvent être facilement intégrés aux systèmes existants des clients et qui sont compatibles avec une variété de dispositifs et de plateformes.
           L'interopérabilité permet une collaboration transparente entre les différents acteurs de la chaîne d'approvisionnement, 
          améliorant ainsi la communication et la coordination entre les partenaires commerciaux."
          icon={faSearchPlus}
        />
      </div>
    </div>
  );
}

export default Info;
