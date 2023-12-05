"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./questions.module.css";
import Header from "../components/header/Header";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-brands-svg-icons";

export default function Page() {
    const router = useRouter();
    const [dados, setDados] = useState([]);
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await axios.get("/api/questions");
                setDados(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestions();
    }, [])
    const deleteQuestion = async (id) => {
        const url = `/api/questions/${id}`;
        try {
            await axios.delete(url);
            setDados(dados.filter((question) => question.id !== id));
        } catch (error) {
            console.error("error deleting question", error);
        }
    }
    const updateQuestion = async (id) => {
        router.push(`/questions/${id}`);
    }
    return (
        <div className={styles.all}>
            <Header />
            <Link href={"/questions/register"}>
                <div className={styles.buttonAdd}>
                    <button><FontAwesomeIcon icon={ faPlus } /></button>

                </div>
            </Link>

            {
                dados.length ? (
                    <div className={styles.question}>
                        {
                            dados.map((questions) => (
                                <div key={questions.id} className={styles.cardQuesion}>
                                    <h1 className={styles.titleQuestion}>{questions.question}</h1>
                                    <h2 className={styles.card2}>Categoria: {questions.category}</h2>
                                    <h3 className={styles.card2}>Nivel de Dificuldade: {questions.difficulty}</h3>
                                    <div className={styles.options}>
                                        <p>A - {questions.response1}</p>
                                        <p>B - {questions.response2}</p>
                                        <p>C - {questions.response3}</p>
                                        <p>D - {questions.response4}</p>
                                    </div>
                                    <button onClick={() => deleteQuestion(questions.id)}>Deletar</button>
                                   
                                    <button onClick={() => updateQuestion(questions.id)}>Editar</button>
                                </div>
                            ))
                        }
                    </div>
                ) : (
                    <div>
                        <h1 className={styles.upload}>Carregando...</h1>
                    </div>
                )
            }
        </div>
    )
}