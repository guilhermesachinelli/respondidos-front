import style from './Subcontainer.module.css';
import Link from "next/link";
const Subcontainer = ({subtitle, txt }) => {
    return(
        <div className={style.sub_container}>
          <Link href={"/game"}>
        <h2 className={style.subtitle}>{subtitle}</h2>
        <p className={style.txt}>{txt}</p>
        </Link>
      </div>
    );
}

export default Subcontainer;