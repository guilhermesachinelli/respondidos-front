import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <div className={styles.bck}>
      <Header/>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1 className={styles.respondidos}>Respondidos!</h1>
          <h3 className={styles.slogan}>Ganhe! Ou seja explodido!</h3>
          <h2 className={styles.playbutton}>Jogar!</h2>
        </div>
        <div className={styles.div2}>
          <img src="/Logo.png" className={styles.bombalogo}></img>
        </div>
      </div>
      <Footer/>
    </div>
  )
}
