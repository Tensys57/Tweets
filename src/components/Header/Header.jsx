import { NavLink } from "react-router-dom";
import css from "./Header.module.css";

const Header = () => {
  return (
    <nav className={css.Header}>
      {
        <ul className={css.headerList}>
          <li>
            <NavLink className={css.navTitle} to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className={css.navTitle} to="/tweets">
              Tweets
            </NavLink>
          </li>
        </ul>
      }
    </nav>
  );
};

export default Header;
