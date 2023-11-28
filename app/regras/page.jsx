import styles from "./regras.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Regras() {
    return (
        <div className={styles.tudo}>
            <Header/>
            <div className={styles.imagemIntro}>
            <img src="/aura icon.jpg" className={styles.auraImg}></img>
            <h1 className={styles.Titulo}>Guia: Regras de Criação e Nossos Quizzes!</h1>
            <h2>Bem-vindo(a) ao mundo do Respondidos!</h2>
            <p className={styles.introTexto}>Antes de mergulhar nas perguntas, é crucial compreender as regras que regem o nosso site. Esteja preparado para testar seus conhecimentos e estratégias de escolha. Leia com atenção as diretrizes a seguir que garantirão uma jornada empolgante e justa em nosso projeto.</p>
            </div>
            <div className={styles.sobreJogo}>
            <h2 className={styles.quizInfosTitulo}>O que devo saber antes de jogar?</h2>
            <ul className={styles.quizInfoLista}>
                <li>● Cada pergunta do quiz foi cuidadosamente elaborada para oferecer quatro opções de resposta, contendo três alternativas erradas e uma correta.</li>
                <li>● Uma destas opções é a resposta correta, e as outras três são distratores.</li>
                <li>● Uma vez que a resposta é selecionada, não é possível realizar alterações.</li>
                <li>● Cada resposta correta contribui para a pontuação total do participante!</li>
                <li>● O objetivo é acumular a maior pontuação possível ao longo do quiz.</li>
                </ul>
                </div>

            <h2 className={styles.quizInfosTitulo}>Desejo criar o meu próprio quiz.</h2>
            <ul className={styles.quizInfoLista}>
                <li>● Insira quatro opções de resposta, identificando uma como correta e as restantes como incorretas.</li>
                <li>● Evite o uso de palavras ofensivas ou inadequadas nas perguntas e respostas.</li>
                <li>● Mantenha as perguntas e respostas concisas para melhor compreensão.</li>
                <li>● Garanta que as perguntas sejam formuladas de maneira clara e objetiva.</li>
                <li>● Evite ambiguidades nas opções de resposta para não confundir os participantes.</li>
            </ul>
            <p className={styles.introTexto}>Agora que você está totalmente por dentro das regras para criar quizzes incríveis, desafie seus amigos, teste seus conhecimentos e aproveite cada pergunta que preparamos para você. Divirta-se explorando, aprendendo e superando desafios. Boa sorte e que as respostas certas estejam ao seu alcance!</p>
            <Footer/>
        </div>
    )
}