// Navbar.js
import React from 'react';

const Navbar = () => {
  const styles = {
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#333',
      padding: '1rem',
      margin:'0px',
      height:'30px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      width:'1376px',
    },
    logo: {
      color: 'white',
      fontSize: '1.5rem',
      textDecoration: 'none',
    },
    navLinks: {
      display: 'flex',
      gap: '20px',
    },
    navLink: {
      color: 'white',
      textDecoration: 'none',
      fontSize: '1rem',
    },
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Mantra Yoga</div>
      <div style={styles.navLinks}>
        <a href="/" style={styles.navLink}>
          Home
        </a>
        <a href="/Users/yuvrajaggarwal/Desktop/Task/yoga-admission-form/client/src/classes.html" style={styles.navLink}>
          Classes
        </a>
        <a href="#" style={styles.navLink}>
          About Us
        </a>
        {/* Add more links as needed */}
      </div>
    </nav>
  );
};

export default Navbar;
