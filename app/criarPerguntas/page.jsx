'use client'
import styles from './page.module.css'
import React from 'react'

function page() {


    return (
        <div className={styles.boxCard}>
            <h1 className={styles.titulo}>Crie seu Quiz!</h1>
            <div className={styles.divInput}>
            <div className={styles.input1}>
                    <input type='text' placeholder='Digite sua pergunta!'></input>
                </div>
                <div className={styles.input2}>
                    <input type='text' placeholder='Primeira alternativa!'></input>
                </div>
                <div className={styles.input3}>
                    <input type='text' placeholder='Segunda alternativa!'></input>
                </div>
                <div className={styles.input4}>
                    <input type='text' placeholder='Terceira alternativa!'></input>
                </div>
                <div className={styles.input5}>
                    <input type='text' placeholder='Quarta alternativa!'></input>
                </div>
                <div className={styles.divBotao}>
                    <button>Adicionar</button>
                </div>
            </div>
            <div className={styles.imagem}>
                <img src='Logo2.png' width={250} height={250}></img>
            </div>
            <div className={styles.texto}>Jogue com seus amigos perguntas que apenas o seu grupo acertaria!</div>
        </div>
    )
}

export default page