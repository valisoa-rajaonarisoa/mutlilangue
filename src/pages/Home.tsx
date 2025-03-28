// pages/Home.tsx
import { useTranslation } from "react-i18next";
import Header from "../layout/Header";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Header />
      <h1>{t("home")}</h1>
    </div>
  );
};

export default Home;
