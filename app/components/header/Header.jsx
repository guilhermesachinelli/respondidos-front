'use client'
import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logocontainer}>
                <img src="logo header.png" alt="Logo" width={45} height={40} />
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li><a href="/">Página inicial</a></li>
                    <li><a href="/sobrenos">Sobre nós</a></li>
                    <li><a href="/regras">Regras</a></li>
                    <li><a href="/curiosidades">Curiosidades</a></li>
                    <li><a href="/contatos">Contatos</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

