import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Contact.module.css';
import Aside from "./Aside";

const Contact = () => (
    <div className={styles.contenu}>
    Contact Component
        <div className={styles.aside}>
            <Aside/>
        </div>
  </div>

);

Contact.propTypes = {};

Contact.defaultProps = {};

export default Contact;
