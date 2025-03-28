// utils/LanguageSwitcher.tsx
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LanguageSwitcher = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const pathParts = location.pathname.split("/");
    const currentLng = pathParts[1];

    // Si la route n'a pas de langue ou que la langue n'est pas supportée, rediriger vers /en
    if (!["en", "fr", "ds"].includes(currentLng)) {
      const newPath = `/en${location.pathname}`;
      navigate(newPath, { replace: true });
    }
  }, [location, navigate]);

  return null;
};

export default LanguageSwitcher;