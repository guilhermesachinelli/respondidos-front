'use client'
import React from 'react';
import styles from './Footer.module.css';
import NavImg from '../navimg/NavImg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.h3}>
                <div className={styles.redessociais}>
                    <NavImg rota="https://instagram.com" img="/instagram.png" />
                    <NavImg rota="https://github.com" img="/githublogowhite.png" />
                    <NavImg rota="https://twitter.com" img="/x.png" />
                    <NavImg rota="https://facebook.com" img="/facebooklogo.png" />
                </div>
            </div>
            <div className={styles.politicastermos}>
                <h3 className={styles.h3}>Copyright ©️ 2023</h3>
            </div>
        </div>
    );
};

export default Footer;