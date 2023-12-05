import style from './CardRegra1.module.css'

const CardRegra1 = ({subtitle, txt }) => {
    return(
        <div className={style.cardTexto}>
                    <h2 className={style.subTitulo}>{subtitle}</h2>
                    <p className={style.introTexto}>{txt}</p>
                </div>
    );
}

export default CardRegra1;