// Footer.js

import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footer}>
      <p>&copy; 2023 Yoga Studio</p>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#333',
    color: 'white',
    textAlign: 'center',
    padding: '0.1em',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    minHeight: '50px', // Set a minimum height to make the footer visible
  },
};

export default Footer;
