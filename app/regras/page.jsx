import styles from "./regras.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import CardRegra1 from "../components/cardRegra1/CardRegra1"
import CardRegra2 from "../components/cardRegra2/CardRegra2"

export default function Regras() {
    return (
        <div className={styles.tudo}>
            <Header />
            <div className={styles.cardsAll}>
                <CardRegra1 subtitle={"Bem-vindo(a) ao mundo do Respondidos!"} txt={"Antes de mergulhar nas perguntas, é crucial compreender as regras que regem o nosso site. Esteja preparado para testar seus conhecimentos e estratégias de escolha. Leia com atenção as diretrizes a seguir que garantirão uma jornada empolgante e justa em nosso projeto."}></CardRegra1>
                <CardRegra2 subtitle={"O que devo saber antes de jogar?"}
                    topico1={"● Cada pergunta do quiz foi cuidadosamente elaborada para oferecer quatro opções de resposta, contendo três alternativas erradas e uma correta."}
                    topico2={"● Uma destas opções é a resposta correta, e as outras três são distratores."}
                    topico3={"● Uma vez que a resposta é selecionada, não é possível realizar alterações."}
                    topico4={"● Cada resposta correta contribui para a pontuação total do participante!"}
                    topico5={"● O objetivo é acumular a maior pontuação possível ao longo do quiz."}>
                </CardRegra2>
                <CardRegra2 subtitle={"Desejo criar o meu próprio quiz."}
                    topico1={"● Insira quatro opções de resposta, identificando uma como correta e as restantes como incorretas."}
                    topico2={"● Evite o uso de palavras ofensivas ou inadequadas nas perguntas e respostas."}
                    topico3={"● Mantenha as perguntas e respostas concisas para melhor compreensão."}
                    topico4={"● Garanta que as perguntas sejam formuladas de maneira clara e objetiva."}
                    topico5={"● Evite ambiguidades nas opções de resposta para não confundir os participantes."}>
                </CardRegra2>
            </div>
            <Footer />
        </div>
    )
} 