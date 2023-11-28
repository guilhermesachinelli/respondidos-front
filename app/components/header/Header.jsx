'use client'
import React from 'react';
import styles from './Header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logocontainer}>
                <img src="Logo.png" alt="Logo" width={45} height={45} />
            </div>
            <nav className={styles.menu}>
                <ul>
                    <li className={styles.rota}><a className={styles.rota} href="/">Página inicial</a></li>
                    <li className={styles.rota}><a href="/sobrenos">Sobre nós</a></li>
                    <li className={styles.rota}><a href="/regras">Regras</a></li>
                    <li className={styles.rota}><a href="/curiosidades">Curiosidades</a></li>
                    <li className={styles.rota}><a href="/contatos">Contatos</a></li>
                    <li className={styles.rota}><a href="/questions">Perguntas</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;

