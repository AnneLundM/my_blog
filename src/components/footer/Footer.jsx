import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>�� 2022 Your Company. All rights reserved.</p>
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
      <div className='social-media'>
        <a href='#'>
          <img src='facebook.png' alt='Facebook' />
        </a>
        <a href='#'>
          <img src='twitter.png' alt='Twitter' />
        </a>
        <a href='#'>
          <img src='instagram.png' alt='Instagram' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
