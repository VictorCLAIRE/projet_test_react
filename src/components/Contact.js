import React from 'react';

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


export default Contact;
