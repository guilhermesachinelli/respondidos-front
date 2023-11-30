"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./questions.module.css";
import Header from "../components/header/Header";
import { useRouter } from "next/navigation";
import Link from "next/link";
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
        <div>
            <Header />
            <Link href={"/questions/register"}>
                <button>Criar Pergunta</button>
                </Link>
            {
                dados.length? (
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
                                    <h3>Resposta Correta é : {questions.correct}</h3>
                                    <button onClick={() => deleteQuestion(questions.id)}>Deletar</button>
                                    <button onClick={() => updateQuestion(questions.id)}>Editar</button>
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