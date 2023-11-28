'use client'
import React from 'react';
import styles from './Footer.module.css';
import NavImg from '../navimg/NavImg';

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.contato}>
                <h3 className={styles.h3}>Informações de Contato:</h3>
                <p className={styles.text}>Email: respondidos@gmail.com </p>
                <p className={styles.text}>Telefone: (19) 98806-5835</p>
                <p className={styles.text}>Endereço: SENAI, Valinhos</p>
            </div>
            <div>
                <ul className={styles.list}>
                    <div className={styles.text}>
                        <div className={styles.menuu}>
                    <h3 className={styles.h3}>Menu:</h3>
                        <li><a className={styles.text} href="/">Página Inicial</a></li>
                        <li><a className={styles.text} href="/sobrenos">Sobre nós</a></li>
                        <li><a className={styles.text} href="/regras">Regras</a></li>
                        <li><a className={styles.text} href="/curiosidades">Curiosidades</a></li>
                        <li><a className={styles.text} href="/contatos">Contatos</a></li>
                    </div>
                </div>
                </ul>
            </div>
            <div className={styles.h3}>
                <h3 className={styles.h3}>Redes Sociais</h3>
                <div className={styles.redessociais}>
                    <NavImg rota="https://instagram.com" img="/instagram.png" />
                    <NavImg rota="https://github.com" img="/githublogowhite.png" />
                    <NavImg rota="https://twitter.com" img="/x.png" />
                    <NavImg rota="https://facebook.com" img="/facebooklogo.png" />
                </div>
            </div>
            <div className={styles.politicastermos}>
                <h3 className={styles.h3}>Políticas e Termos</h3>
                <ul className={styles.list}>
                    <h3 className={styles.h3}>Política de Privacidade</h3>
                    <h3 className={styles.h3}>Termos de Serviço</h3>
                </ul>
            </div>
        </div>
    );
};

export default Footer;