import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.bck}>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1 className={styles.respondidos}>Respondidos!</h1>
          <h3 className={styles.slogan}>Ganhe, ou seja explodido!</h3>
          <h2 className={styles.playbutton}>Jogar!</h2>
        </div>
        <div className={styles.div2}>
          <img src="/Logo.png" className={styles.bombalogo}></img>
        </div>
      </div>
    </div>
  )
}
