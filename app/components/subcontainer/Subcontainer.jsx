import style from './Subcontainer.module.css'

const Subcontainer = ({subtitle, txt }) => {
    return(
        <div className={style.sub_container}>
        <h2 className={style.subtitle}>{subtitle}</h2>
        <p className={style.txt}>{txt}</p>
      </div>
    );
}

export default Subcontainer;