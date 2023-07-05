import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <nav>
      {
        <ul className={css.headerList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/tweets">Tweets</NavLink>
          </li>
        </ul>
      }
    </nav>
  );
};

export default Header;
