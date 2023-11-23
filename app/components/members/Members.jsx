'use client';

import React from 'react';
import style from './Members.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'



const Members = ({dados}) => {
const membros = dados.data;

    <div className={style.container}>
    {
        membros ? (
            membros.map((member) => (
                    <div className={style.card}>
                        <img className={style.card__image} src={`${member.image}`} />
                        <p className={style.card__name}>{member.name}</p>
                        <div className={style.resume_container}>
                            <p className={style.card__desc}>{member.description}</p>
                        </div>
                        <ul className={style.social_icons}>
                            <li><a href={member.github}><i><FontAwesomeIcon icon={faGithub} /></i></a></li>
                            <li><a href={member.instagram}><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                        </ul>
                        <button className={`${style.btn} ${style.draw_border}`} >Follow</button>
                        <button className={`${style.btn} ${style.draw_border}`}>Message</button>

                    </div>

            ))
            ) : (
            <p>Carregando...</p>
        )
    }
    </div>
}

export default Members;