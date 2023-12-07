// Importação de módulos e componentes necessários
'use client';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import styles from './contato.module.css'
import React, { useState, useEffect } from 'react';

// Criação do componente ContatoModule
export default function ContatoModule() {

    // Definição do estado inicial do formulário
    const initialState = {
        nome: '',
        email: '',
        mensagem: '',
    };

    const [form, setForm] = useState(initialState);

    // Definição do estado para erros e popup
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);

    // Criação da função identificador para lidar com mudanças nos campos do formulário
    const identificador = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    // Início da criação da função enviar para lidar com o envio do formulário
    const enviar = (event) => {
        event.preventDefault();

        // Adição da validação do formulário na função enviar
        const validationErrors = validate(form);

        // Atualização do estado de erros com os erros de validação
        setErrors(validationErrors);
        if (Object.keys(validationErrors).length === 0) {
            setShowPopup(true);
            setTimeout(() => setShowPopup(false), 5000);

            // Redefina o estado do formulário para o estado inicial após o envio
            setForm(initialState);
        }
    };

    // Criação da função validate para validar o formulário
    const validate = (form) => {
        let errors = {};

        if (!form.nome.trim()) {
            errors.nome = "Por favor, digite seu nome!";
        }
        if (!form.email) {
            errors.email = "Email é obrigatório!";
        } else if (!/\S+@\S+\.\S/.test(form.email)) {
            errors.email = "Email é inválido!";
        }
        if (!form.mensagem) {
            errors.mensagem = "Por favor, digite uma mensagem!";
        }
        return errors;
    };

    // Pagina de Contato
    return (
        <div className={styles.background}>
            <Header />

            <div className={styles.all}>
                <div className={styles.sbf}>
                    <div className={styles.titulo}>
                    <h1 className={styles.tsb}>Entre</h1>
                    <h1 className={styles.tsb2}>em contato</h1>
                    </div>
                    <hr className={styles.linha}></hr>
                    
                    <p className={styles.sbt}>Aqui você poderá enviar o seu Feedback sincero !</p>
                </div>

                <form onSubmit={enviar} className={styles.bdss}>
                    <label className={styles.idc}>
                        <input type="text" placeholder="Nome" name="nome" onChange={identificador} value={form.nome} className={styles.idco} />
                        {errors.nome &&
                            <p className={styles.verif}>{errors.nome}</p>}
                    </label>
                    <label className={styles.idc}>

                        <input type="text" placeholder="Email" name="email" onChange={identificador} value={form.email} className={styles.idco} />
                        {errors.email &&
                            <p className={styles.verif}>{errors.email}</p>}
                    </label>
                    <label className={styles.idc}>

                        <input type="text" placeholder="Mensagem" name="mensagem" onChange={identificador} value={form.mensagem} className={styles.idco} />
                        {errors.mensagem &&
                            <p className={styles.verif}>{errors.mensagem}</p>}
                    </label>

                    <button type="submit" className={styles.bds}>Enviar</button>
                    {showPopup && <div className={styles.verif2}>A mensagem foi enviada. Agradecemos o seu feedback!.</div>}
                </form>
            </div>
            <Footer />
        </div>
    );
}
