import { NavLink } from "react-router-dom";
import styles from "./navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/blogs'>Blogs</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
        <li>
          <NavLink to='/about'>About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
