import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import Subcontainer from "./components/subcontainer/Subcontainer"
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.bck}>
      <Header />
      <div className={styles.container}>
        <div className={styles.containertitle}>
          <h1 className={styles.title}>Respondidos</h1>
        </div>
        <div className={styles.hold}>
        <Subcontainer subtitle={"Jogar modo clássico"} txt={"Teste seus conhecimentos gerais! As regras são simples: leia a pergunta, acerte a resposta e tente não perder."}></Subcontainer>
        </div>
      </div>
      <Footer />
    </div>
  )
}
