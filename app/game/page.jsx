"use client";
import Header from "../components/header/Header"
import styles from "./game.module.css"
import PopupMessage from '../components/popup/PopUp';
import axios from "axios";
import { useEffect, useState } from "react";
import Footer from "../components/footer/Footer";
export default function Page() {
    const [randomQuestion, setRandomQuestion] = useState('');
    const [dados, setDados] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');
    const [habilitado, setHabilitado] = useState(false);
    const [points, setPoints] = useState(0);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/questions");
                setDados(response.data.questions);
                // Define a função random
                const random = () => {
                    const randomNumber = Math.floor(Math.random() * response.data.questions.length);
                    setRandomQuestion(response.data.questions[randomNumber]);
                }
                // Chama a função random após os dados serem buscados
                random();
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
    const handleShowPopup = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 1000);
    }
    const random = () => {
        const randomNumber = Math.floor(Math.random() * dados.length);
        setRandomQuestion(dados[randomNumber]);
        setHabilitado(false);
    }
    const handlePositivePoints = () => {
if(randomQuestion.difficulty == "Fácil"){
    setPoints(points + 1);
    return
}
if(randomQuestion.difficulty == "Médio"){
    setPoints(points + 2);
    return
}
if(randomQuestion.difficulty == "Difícil"){
    setPoints(points + 3);
    return
}
    }
    const handleNegativePoints = () => {
        if(randomQuestion.difficulty == "Fácil"){
            setPoints(points - 3);
            return
        }
        if(randomQuestion.difficulty == "Médio"){
            setPoints(points - 2);
            return
        }
        if(randomQuestion.difficulty == "Difícil"){
            setPoints(points - 1);
            return
        }
    }
    console.log(randomQuestion.difficulty)

    const correctResponse = (resposta) => {
        if (resposta == randomQuestion.correct) {
            handleShowPopup("Resposta correta!", 'success');
            handlePositivePoints();
            setTimeout(() => {
                setHabilitado(true);
                random();
            }, 1);
        } else {
            handleNegativePoints();
            handleShowPopup("Resposta incorreta", 'error')
        }
    }

    return (
        <div className={styles.all}>
            <Header />
            <div className={styles.container}>
                <button onClick={random} className={styles.buttonAdd}>Gerar Pergunta</button>
                <h1 className={styles.points}>Pontos: {points}</h1>
                {
                    randomQuestion ? (
                        <div className={styles.question}>
                            <h1>{randomQuestion.question}</h1>
                            <h2>{randomQuestion.category}</h2>
                            <h3>{randomQuestion.difficulty}</h3>
                            <button disabled={habilitado} onClick={() => correctResponse(randomQuestion.response1)}>{randomQuestion.response1}</button>
                            <button disabled={habilitado} onClick={() => correctResponse(randomQuestion.response2)}>{randomQuestion.response2}</button>
                            <button disabled={habilitado} onClick={() => correctResponse(randomQuestion.response3)}>{randomQuestion.response3}</button>
                            <button disabled={habilitado} onClick={() => correctResponse(randomQuestion.response4)}>{randomQuestion.response4}</button>
                        </div>
                    ) : null
                }
                {
                    showPopup ? (
                        <PopupMessage message={popupMessage} type={popupType} />
                    ) : null
                }
            </div>
            <Footer />
        </div>
    )
}