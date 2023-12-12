"use client";
import Header from "../components/header/Header"
import styles from "./game.module.css"
import PopupMessage from '../components/popup/PopUp';
import axios from "axios";
import { useEffect, useState } from "react";
export default function Page() {
    const [randomQuestion, setRandomQuestion] = useState('');
    const [dados, setDados] = useState([]);
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get("/api/questions");
                setDados(response.data.questions);
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
        }, 4000);
    }
    const random = () => {
        const randomNumber = Math.floor(Math.random() * dados.length);
        setRandomQuestion(dados[randomNumber]);
    }
    const correctResponse = (resposta) => {
        if(resposta == randomQuestion.correct){
            handleShowPopup("Resposta correta!", 'success');
        }else{
            handleShowPopup("Resposta incorreta", 'error' )
        }
    }
    return (
        <div className={styles.container}>
            <Header />
        <button onClick={random}>Randomizar</button>
        <div className={styles.question}>
            <h1>{randomQuestion.question}</h1>
            <h2>{randomQuestion.category}</h2>
            <h3>{randomQuestion.difficulty}</h3>
            <button onClick={() => correctResponse(randomQuestion.response1)}>{randomQuestion.response1}</button>
            <button onClick={() => correctResponse(randomQuestion.response2)}>{randomQuestion.response2}</button>
            <button onClick={() => correctResponse(randomQuestion.response3)}>{randomQuestion.response3}</button>
            <button onClick={() => correctResponse(randomQuestion.response4)}>{randomQuestion.response4}</button>
            </div>
            {
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} />
                ) : null
            }
        </div>
    )
}