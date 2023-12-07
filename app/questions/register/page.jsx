"use client"
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./register.module.css";
import Link from "next/link";
export default function Register() {
    const [dados, setDados] = useState([]);
    const [question, setQuestion] = useState("");
    const [category , setCategory] = useState('');
    const [difficulty, setDifficulty] = useState("");
    const [response1, setResponse1] = useState("");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [response4, setResponse4] = useState("");
    const [correct, setCorrect] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/questions", { question, category, difficulty, response1, response2, response3, response4, correct });
            setDados([...dados, response.data.questions]);
            setQuestion("");
            setCategory("");
            setDifficulty("");
            setResponse1("");
            setResponse2("");
            setResponse3("");
            setResponse4("");
            setCorrect("");
        } catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        async function fetchQuestions() {
            try {
                const response = await axios.get("/api/questions");
                setDados(response.data.questions);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestions();
    }, [])
    return (
        <div className={styles.Card}>
            <div className={styles.divTitulo}>
                <h1 className={styles.divTitulo}>Crie seu Quiz!</h1>
            </div>
            <div className={styles.divInputs}>
                <form onSubmit={handleSubmit}>
                    <input className={styles.input1} type='text' placeholder=' Digite sua pergunta!' value={question} onChange={(e) => setQuestion(e.target.value)}></input>
                    <select onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Selecione uma categoria</option>
                        <option value="Geografia">Geografia</option>
                        <option value="História">História</option>
                        <option value="Ciências">Ciências</option>
                        <option value="Cultura">Cultura</option>
                        <option value="Esportes">Esportes</option>
                    </select>
                    <input className={styles.input1} type='text' placeholder=' Digite a dificuldade!' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}></input>
                    <input className={styles.input1} type='text' placeholder=' Primeira alternativa!' value={response1} onChange={(e) => setResponse1(e.target.value)}></input>
                    <input className={styles.input1} type='text' placeholder=' Segunda alternativa!' value={response2} onChange={(e) => setResponse2(e.target.value)}></input>
                    <input className={styles.input1} type='text' placeholder=' Terceira alternativa!' value={response3} onChange={(e) => setResponse3(e.target.value)}></input>
                    <input className={styles.input1} type='text' placeholder=' Quarta alternativa!' value={response4} onChange={(e) => setResponse4(e.target.value)}></input>
                    <input className={styles.input1} type='text' placeholder=' Resposta correta!' value={correct} onChange={(e) => setCorrect(e.target.value)}></input>
                    <button className={styles.divBotao}>Adicionar</button>
                </form>
                <Link href={"/questions"}>
                    <button className={styles.divBotao}>Voltar</button>
                </Link>
            </div>
        </div>
    )
}