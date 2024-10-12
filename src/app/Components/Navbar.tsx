// components/Navbar.tsx
"use client"
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li>
          <Link href="/" legacyBehavior>
            <a style={styles.link}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" legacyBehavior>
            <a style={styles.link}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" legacyBehavior>
            <a style={styles.link}>Contact</a>
          </Link>
        </li>
        <li>
          <Link href="/input" legacyBehavior>
            <a style={styles.link}>Input Name</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    padding: '1rem',
    backgroundColor: '#333',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    gap: '1rem',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};

export default Navbar;
