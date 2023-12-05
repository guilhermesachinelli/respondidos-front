'use client'
import React from 'react';
import style from './Members.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import Bomb from '../bomb/Bomb';



const Members = ({ dados, onDelete }) => {

    return(
    <div className={style.container}>
    {
        dados ? (
            dados.length === 0 ? (
                <Bomb text="Não há membros cadastrados"/>
            ) : (
            dados.map((member) => (
                    <div className={style.card}>
                        <img className={style.card__image} src={`${member.image}`} />
                        <p className={style.card__name}>{member.name}</p>
                        <p className={style.card__name}>{member.age} Anos</p>
                        <div className={style.resume_container}>
                            <p className={style.card__desc}>{member.description}</p>
                        </div>
                        <ul className={style.social_icons}>
                            <li><a href={member.github}><i><FontAwesomeIcon icon={faGithub} /></i></a></li>
                            <li><a href={member.instagram}><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                        </ul>
                        <button className={`${style.btn} ${style.draw_border}`} onClick={() => onDelete(member.id)}>Delete</button>
                        <button className={`${style.btn} ${style.draw_border}`}>Editar</button>

                    </div>

            )))
            ) : (
                <Bomb text="Carregando membros"/>
        )
    }
    </div>
    );
}


export default Members;