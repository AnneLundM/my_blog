import { Link } from "react-router-dom";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>2022 Your Company. All rights reserved.</p>
      <ul>
        <li>
          <Link href='#'>About</Link>
        </li>
        <li>
          <Link href='#'>Contact</Link>
        </li>
        <li>
          <Link href='#'>Terms & Conditions</Link>
        </li>
      </ul>
      <div className={styles.some}>
        <a href='#'>
          <FaFacebook />
        </a>
        <a href='#'>
          <FaTwitter />
        </a>
        <a href='#'>
          <FaInstagram />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
