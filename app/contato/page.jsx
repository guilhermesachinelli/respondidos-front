// Importação de módulos e componentes necessários
'use client';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import style from './contato.module.css'
import React, { useState, useEffect } from 'react';


// Criação do componente ContatoModule
export default function ContatoModule() {

    // Definição do estado inicial do formulário
    const [form, setForm] = useState({
        nome: '',
        email: '',
        mensagem: '',
        data: '',
    });

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
        }
    };

    // Criação da função validate para validar o formulário
    const validate = (form) => {
        let errors = {};

        if (!form.nome.trim()) {
            errors.nome = "Por favor, escreva/digite seu nome!";
        }
        if (!form.email) {
            errors.email = "Email é obrigatório!";
        } else if (!/\S+@\S+\.\S/.test(form.email)) {
            errors.email = "Email é inválido!";
        }
        if (!form.mensagem) {
            errors.mensagem = "Por favor, digite uma mensagem!";
        }
        if (!form.data) {
            errors.data = "Por favor, digite a data!";
        }
        return errors;
    };

    return (
        <div className={style.background}>
            <Header />

            <div className={style.sbf}>
                <h1 className={style.tsb}>Contato</h1>
                <p className={style.sbt}>Aqui você podera enviar o seu Feedback</p>
            </div>

            <form onSubmit={enviar} className={style.bdss}>
                <label className={style.idc}>
                    Nome:
                    <input type="text" name="nome" onChange={identificador} value={form.nome} className={style.idco} />
                    {errors.nome && <p>{errors.nome}</p>}
                </label>
                <label className={style.idc}>
                    Email:
                    <input type="text" name="email" onChange={identificador} value={form.email} className={style.idco} />
                    {errors.email && <p>{errors.email}</p>}
                </label>
                <label className={style.idc}>
                    Mensagem:
                    <textarea name="mensagem" onChange={identificador} value={form.mensagem} className={style.idco} />
                    {errors.mensagem && <p>{errors.mensagem}</p>}
                </label>
                <label className={style.idc}>
                    Data:
                    <input type="date" name="data" onChange={identificador} value={form.data} className={style.idco} />
                    {errors.data && <p>{errors.data}</p>}
                </label>
                <button type="submit" className={style.bds}>Enviar</button>
                {showPopup && <div className={style.sbf}>A mensagem foi enviada. Agradecemos o seu feedback!.</div>}
            </form>

            <Footer className={style.fofix} />
        </div>
    );
}