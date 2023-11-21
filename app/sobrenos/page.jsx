import style from './sobrenos.module.css'

export default function SobreNos() {
    return (
        <div>
            <div className={style.container}>
                <div className={style.card}>
<img className={style.card__image} src="https://pbs.twimg.com/profile_images/1366977708115300353/1qo2VGKi_400x400.jpg"/>
                    <p className={style.card__name}>Lily-Grace Colley</p>
                    <div className={style.grid_container}>

                        <div>
                            156 Post
                        </div>

                        <div>
                            1012 Likes
                        </div>

                    </div>
                    <ul className={style.social_icons}>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        <li><a href="#"><i className="fa fa-codepen"></i></a></li>
                    </ul>
                    <button className="btn draw-border">Follow</button>
                    <button className="btn draw-border">Message</button>

                </div>

            </div>
        </div>
    )
}