import style from './sobrenos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons'

export default function SobreNos() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.card}>
<img className={style.card__image} src="https://pbs.twimg.com/profile_images/1366977708115300353/1qo2VGKi_400x400.jpg"/>
                    <p className={style.card__name}>Xaropinho</p>
                    <div className={style.grid_container}>

                        <div>
                            156 Post
                        </div>

                        <div>
                            1012 Likes
                        </div>

                    </div>
                    <ul className={style.social_icons}>
                        <li><a href="#"><i></i></a></li>
                        <li><a href="#"><i><FontAwesomeIcon icon={faGithub} /></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                    </ul>
                    <button className={`${style.btn} ${style.draw_border}`} >Follow</button>
                    <button className={`${style.btn} ${style.draw_border}`}>Message</button>

                </div>

            </div>
        </div>
    )
}