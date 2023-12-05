import style from './CardRegra2.module.css'

const CardRegra2 = ({subtitle, topico1, topico2, topico3, topico4, topico5 }) => {
    return(
        <div className={style.cardTextoResp}>
                    <h2 className={style.quizInfosTitulo}>{subtitle}</h2>
                    <div className={style.quizInfoLista}>
                        <p className={style.quizInfoLista}>{topico1}</p>
                        <p className={style.quizInfoLista}>{topico2}</p>
                        <p className={style.quizInfoLista}>{topico3}</p>
                        <p className={style.quizInfoLista}>{topico4}</p>
                        <p className={style.quizInfoLista}>{topico5}</p>
                    </div>
                </div>

    );
}

export default CardRegra2;