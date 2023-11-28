'use client'
import React from 'react';
import style from './Bomb.module.css'

const Bomb = ({text}) => {
    return (
        <div className={style.loading_image}>
            <img src="/Logo.png" className={style.dancing_image} />
            <h2 className={style.loading_text}>{text}</h2>
        </div>
    );
}

export default Bomb;