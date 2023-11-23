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
            <h1>TESTE DOS CRIA</h1>
            {
                dados.length > 0 ? (
                    <div className={styles.question}>
                        {
                            dados.map((questions) => (
                                <div key={questions.id} className={styles.cardQuesion}>
                                        <h1>{questions.question}</h1>
                                        <h2>Catégoria:{questions.category}</h2>
                                        <h3>Nivel de Dificuldade:{questions.difficulty}</h3>
                                        <h3>{questions.correct}</h3>
                                        <p>{questions.response1}</p>
                                        <p>{questions.response2}</p>
                                        <p>{questions.response3}</p>
                                        <p>{questions.response4}</p>
                            
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