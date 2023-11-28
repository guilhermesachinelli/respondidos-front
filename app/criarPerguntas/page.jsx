'use client'
import styles from './page.module.css'
import React from 'react'

function page() {


    return (
        <div className={styles.Card}>
            <div className={styles.divTitulo}>
            <h1 className={styles.divTitulo}>Crie seu Quiz!</h1>
            </div>
            <div className={styles.divInputs}>
                    <input className={styles.input1} type='text' placeholder='  Digite sua pergunta!'></input>
                    <input  className={styles.input1} type='text' placeholder=' Primeira alternativa!'></input>
                    <input className={styles.input1} type='text' placeholder='  Segunda alternativa!'></input>
                    <input className={styles.input1} type='text' placeholder='  Terceira alternativa!'></input>
                    <input className={styles.input1} type='text' placeholder='  Quarta alternativa!'></input>
                    <button className={styles.divBotao}>Adicionar</button>
            </div>
        </div>
    )
}

export default page