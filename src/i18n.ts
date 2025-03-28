// i18n.ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(initReactI18next) // Intégration avec React
  .use(LanguageDetector) // Utilisation du détecteur de langue automatique
  .use(HttpApi) // Utilisation du backend pour charger les traductions externes
  .init({
    // Liste des langues supportées par l'application
    supportedLngs: ['en', 'fr', 'ds'],

    // Langue par défaut (utilisée si la langue du navigateur n'est pas prise en charge)
    fallbackLng: "en",

    // Configuration de l'interpolation (permet d'insérer des variables dans les textes traduits)
    interpolation: {
      escapeValue: false, // Évite d'échapper les caractères spéciaux
    },

    // Paramètres de détection de la langue de l'utilisateur
    detection: {
      order: ["navigator", "path", "cookie", "localStorage"], // Priorité à la détection via le navigateur
      lookupFromPathIndex: 0, // Recherche la langue dans l'URL (index 0 correspond au premier segment de l'URL)
      caches: ["cookie"], // Stocke la langue choisie dans un cookie
    },

    // Configuration du backend pour charger les fichiers JSON contenant les traductions
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },

    // Optimisation pour React
    react: {
      useSuspense: false, // Désactive le mode Suspense pour éviter des erreurs de chargement
    },
  });

export default i18n;