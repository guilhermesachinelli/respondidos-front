import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"

export default function Home() {
  return (
    <div className={styles.bck}>
      <Header />
      <div className={styles.container}>
        <div className={styles.containertitle}>
          <h1 className={styles.title}>Respondidos</h1>
        </div>
        <div className={styles.hold}>
        <div className={styles.sub_container} onClick="">
          <h2 className={styles.subtitle}>Jogar modo clássico</h2>
          <p className={styles.txt}>Teste seus conhecimentos gerais! As regras são simples: leia a pergunta, acerte a resposta e tente não perder.</p>
        </div>
        <div className={styles.sub_container} onClick="">
          <h2 className={styles.subtitle}>Jogar modo personalizado</h2>
          <p className={styles.txt}>Quer agitar sua noite de jogos? Personalize as perguntas e jogue com seus amigos!</p>
        </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
