import styles from "./regras.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function Regras() {
    return (
        <div className={styles.tudo}>
            <Header />
            <div className={styles.cardsAll}>
                <div className={styles.cardTexto}>
                    <h2 className={styles.subTitulo}>Bem-vindo(a) ao mundo do Respondidos!</h2>
                    <p className={styles.introTexto}>Antes de mergulhar nas perguntas, é crucial compreender as regras que regem 
                    o nosso site. Esteja preparado para testar seus conhecimentos e estratégias de escolha. Leia com atenção as 
                    diretrizes a seguir que garantirão uma jornada empolgante e justa em nosso projeto.</p>
                </div>

                <div className={styles.cardTextoResp}>
                    <h2 className={styles.quizInfosTitulo}>O que devo saber antes de jogar?</h2>
                    <div className={styles.quizInfoLista}>
                        <p className={styles.quizInfoLista}> ● Cada pergunta do quiz foi cuidadosamente elaborada para oferecer quatro opções de resposta, contendo três alternativas erradas e uma correta.</p>
                        <p className={styles.quizInfoLista}> ● Uma destas opções é a resposta correta, e as outras três são distratores.</p>
                        <p className={styles.quizInfoLista}> ● Uma vez que a resposta é selecionada, não é possível realizar alterações.</p>
                        <p className={styles.quizInfoLista}> ● Cada resposta correta contribui para a pontuação total do participante!</p>
                        <p className={styles.quizInfoLista}> ● O objetivo é acumular a maior pontuação possível ao longo do quiz.</p>
                    </div>
                </div>

                <div className={styles.cardTextoResp}>
                    <h2 className={styles.quizInfosTitulo}>Desejo criar o meu próprio quiz.</h2>
                    <div className={styles.quizInfoLista}>
                        <p className={styles.quizInfoLista}> ● Insira quatro opções de resposta, identificando uma como correta e as restantes como incorretas.</p>
                        <p className={styles.quizInfoLista}> ● Evite o uso de palavras ofensivas ou inadequadas nas perguntas e respostas.</p>
                        <p className={styles.quizInfoLista}> ● Mantenha as perguntas e respostas concisas para melhor compreensão.</p>
                        <p className={styles.quizInfoLista}> ● Garanta que as perguntas sejam formuladas de maneira clara e objetiva.</p>
                        <p className={styles.quizInfoLista}> ● Evite ambiguidades nas opções de resposta para não confundir os participantes.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
} 