import styles from "./page.module.css"

export default function Home() {
  return (
    <div className={styles.bck}>
      <div className={styles.container}>
        <div className={styles.div1}>
          <h1 className={styles.respondidos}>Respondidos!</h1>
          <h3 className={styles.slogan}>Ganhe, ou seja explodido!</h3>
          <div className={styles.playcontainer}>
            <h2 className={styles.playbutton}>Jogar!</h2>
          </div>
        </div>
        <div className={styles.div2}>
          <img src="/Logo.png" className={styles.bombalogo}></img>
        </div>
      </div>
      <div className={styles.container2}>
        <div className={styles.boxcard} >
          <div className={styles.imgbox}>
            <img src="/Logo.png" width={64} height={64}></img>
          </div>
          <div className={styles.txtbox}>
            <h1 className={styles.title}>Sobre o jogo</h1>
            <p className={styles.txt}>Repondidos é um jogo de perguntas de conhecimentos gerais, onde você testa sua bagagem intelectual! 
            As regras são simples: Leia a pergunta e responda a opção correta. Mas cuidado! você só tem 3 vidas...</p>
              </div>
        </div>
        <div className={styles.boxcard}>
            <div className={styles.txtbox}>
            <h1 className={styles.title}>Crie o seu quizz!</h1>
            <p className={styles.txt}>Quer criar fazer uma noite de jogos com seus amigos, onde o tema é: O que vocês quiserem!? Produza seus cards 
            e veja quem dos seus amigos conhece mais... quer uma dica? Faça o tema "Quem conhece mais sobre o grupo de amigos?" e se divirta com as 
            respostas! OBS: Não nos responsabilizamos por eventuais tretas!</p>
              </div>
              <div className={styles.imgbox}>
            <img src="Logo.png" width={64} height={64}></img>
          </div>
          </div>
        </div>
      </div>
  )
}
