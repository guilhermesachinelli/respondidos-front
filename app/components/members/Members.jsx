import style from './Members.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faPenToSquare, faTrash} from '@fortawesome/free-solid-svg-icons'
import Bomb from '../bomb/Bomb';



const Members = ({ dados, onDelete, onEdite}) => {

    console.log("Componente");
    console.log(dados);

    return(
    <div className={style.container}>
    {
        dados ? (
            dados.length === 0 ? (
                <Bomb text="Não há mais membros cadastrados"/>
            ) : (
            dados.map((member) => (
                    <div className={style.card} key={member.id}>
                        <img className={style.card__image} src={member.image} alt={member.name} />
                        <p className={style.card__name}>{member.name}</p>
                        <p className={style.card__name}>{member.age} Anos</p>
                        <div className={style.resume_container}>
                            <p className={style.card__desc}>{member.description}</p>
                        </div>
                        <ul className={style.social_icons}>
                            <li><a href={member.github}><i><FontAwesomeIcon icon={faGithub} /></i></a></li>
                            <li><a href={member.instagram}><i><FontAwesomeIcon icon={faInstagram} /></i></a></li>
                        </ul>
                        <ul className={style.social_icons}>
                        <li><button  onClick={() => onEdite(member.id)}><i><FontAwesomeIcon icon={faPenToSquare}/></i></button></li>
                        <li><button onClick={() => onDelete(member.id)}><i><FontAwesomeIcon icon={faTrash} /></i></button></li>
                        </ul>
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