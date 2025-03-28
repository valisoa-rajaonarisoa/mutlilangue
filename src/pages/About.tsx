// pages/About.tsx
import { useTranslation } from 'react-i18next';
import Header from '../layout/Header';

const About = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header/>
      <h1>{t("about")}</h1>
    </div>
  
  );
};

export default About;