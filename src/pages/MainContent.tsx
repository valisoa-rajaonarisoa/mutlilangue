// pages/MainContent.tsx
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';

const MainContent = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Récupération de la langue actuelle depuis l'URL
  const currentLng = location.pathname.split("/")[1] || "en";

  // Mettre à jour la langue dans i18next si elle change
  useEffect(() => {
    if (currentLng !== i18n.language) {
      i18n.changeLanguage(currentLng);
    }
  }, [currentLng, i18n]);

  // Fonction pour changer la langue
  const changeLanguage = (lng: string) => {
    const pathWithoutLng = location.pathname.replace(/^\/(en|fr|ds)/, ""); // Supprimer la langue existante
    const newPath = lng === "en" ? pathWithoutLng || "/" : `/${lng}${pathWithoutLng}`; // Construire la nouvelle URL
    navigate(newPath, { replace: true });
  };

  return (
    <div className="p-16">
      {/* Sélecteur de langue */}
      <select onChange={(event) => changeLanguage(event.target.value)}>
        <option value="en">English</option>
        <option value="fr">Français</option>
        <option value="ds">Deutsch</option>
      </select>

      {/* Affichage des routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default MainContent;