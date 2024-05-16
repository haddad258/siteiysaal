import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/LegalDocs.css";

function LegalDocs() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <div className="legal-section-title">
      <h1 className="legal-siteTitle">
        <Link to="/">
          Logistic <span className="legal-siteSign">&</span> E-Commerce
        </Link>
      </h1>

      <div className="legal-text-content">
        <p className="legal-title">Informations Générales</p>
        <p className="legal-description">
          Bienvenue sur notre plateforme de logistique et e-commerce. Nous nous
          engageons à offrir des services logistiques efficaces et des
          expériences d'achat en ligne fluides. En utilisant notre plateforme,
          vous acceptez les termes énoncés dans notre Politique de Confidentialité
          et nos Conditions Générales d'Utilisation.
        </p>

        <p className="legal-title">Politique de Confidentialité</p>
        <p className="legal-description">
          Votre confidentialité est primordiale pour nous. Notre Politique de
          Confidentialité décrit comment nous collectons, utilisons et protégeons
          vos informations personnelles. Nous garantissons une gestion sécurisée
          des données et vous pouvez avoir confiance que vos informations sont
          traitées avec la plus grande confidentialité.
        </p>

        <p className="legal-title">Conditions Générales d'Utilisation</p>
        <p className="legal-description">
          En utilisant notre plateforme, vous acceptez nos Conditions Générales
          d'Utilisation. Cela inclut les directives pour l'utilisation de notre
          site, les interactions avec les vendeurs et les responsabilités des
          deux parties. Il est essentiel de comprendre ces termes pour assurer
          une expérience fluide pour tous les utilisateurs.
        </p>

        <p className="legal-title">Livraisons</p>
        <p className="legal-description">
          Notre plateforme vous connecte à des services de livraison rapides et
          fiables. Nous nous efforçons de garantir que vos produits arrivent à
          temps et en bon état. Il est crucial de fournir des informations exactes
          pour assurer la meilleure expérience de livraison possible.
        </p>

        <p className="legal-title">Comment ça marche</p>
        <p className="legal-description">
          Notre plateforme est conçue pour simplifier l'accès aux services de
          logistique et d'e-commerce. Vous pouvez choisir un produit, planifier
          une livraison et suivre votre commande en ligne. Nos spécialistes
          offrent des conseils personnalisés et des plans de traitement adaptés à
          vos besoins. En cas d'urgence, veuillez contacter votre service médical
          local immédiatement.
        </p>
      </div>

      <div className="legal-footer">
        <p>© 2022-2024 Iysaal. Tous droits réservés.</p>
      </div>
    </div>
  );
}

export default LegalDocs;
