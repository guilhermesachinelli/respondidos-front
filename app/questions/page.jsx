"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./questions.module.css"
import Link from "next/link";
export default function Page() {
    const [questions, setQuestions] = useState([]);
    const [dados, setDados] = useState([]);
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await axios.get("/api/questions");
                setQuestions(response.data.data);
                setDados(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestions();
    }, [])
    console.log(questions);
    console.log(questions);
    return (
        <div>

            {
                dados.length > 0 ? (
                    <div className={styles.question}>
                        {
                            dados.map((questions) => (
                                <div key={questions.id} className={styles.cardQuesion}>
                                        <h1>{questions.question}</h1>
                                        <h2>Catégoria:{questions.category}</h2>
                                        <h3>Nivel de Dificuldade:{questions.difficulty}</h3>
                                        <p>A - {questions.response1}</p>
                                        <p>B - {questions.response2}</p>
                                        <p>C - {questions.response3}</p>
                                        <p>D - {questions.response4}</p>
                                        <h3>Resposta Correta é :{questions.correct}</h3>
                                </div>
                            ))

                        }
                    </div>
                ) : (
                    <div>
                        <h1>Carregando...</h1>
                    </div>
                )
            }
        </div>
    )
}