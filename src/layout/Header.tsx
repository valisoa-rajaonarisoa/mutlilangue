import { Link } from "react-router-dom";
import i18n from "../i18n";

type Props = {};

const Header = ({}: Props) => {
  const handleChangeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("i18nextLng", lng);
  };

  return (
    <div>
      <div>
        <select
          value={i18n.language}
          onChange={(event) => handleChangeLanguage(event.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
          <option value="ds">Deutsch</option>
        </select>
      </div>

      <div style={{ display:"flex", flexDirection:"column"}}>
        <Link to="/" >Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default Header;
