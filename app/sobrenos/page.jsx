'use client';
import style from './sobrenos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { useState, useEffect } from "react";
import axios from "axios";

export default function SobreNos() {
    //area de state
    const [members, setMembers] = useState('');

    //area de efeitos
    useEffect(() => {
        async function getMembers() {
            try {
                const response = await axios.get("/api/members");
                setMembers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMembers();
    }, []);


    return (
        <div>
            <div className={style.container}>
            {
                members ? (
                    members.data.map((member) => (
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
        </div>
    )
}