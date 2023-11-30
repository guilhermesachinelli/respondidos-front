"use client"
import axios from "axios"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
export default function updateQuestion({ params }) {
    const { id } = params;
    const router = useRouter();
    const [dados, setDados] = useState()
    const [question, setQuestion] = useState("")
    const [category, setCategory] = useState("")
    const [difficulty, setDifficulty] = useState("")
    const [response1, setResponse1] = useState("")
    const [response2, setResponse2] = useState("")
    const [response3, setResponse3] = useState("")
    const [response4, setResponse4] = useState("")
    const [correct, setCorrect] = useState("")
    useEffect(() => {
        async function fetchQuestion() {
            const response = await axios.get(`/api/questions/${id}`)
            setDados(response.data)
            setQuestion(response.data.question)
            setCategory(response.data.category)
            setDifficulty(response.data.difficulty)
            setResponse1(response.data.response1)
            setResponse2(response.data.response2)
            setResponse3(response.data.response3)
            setResponse4(response.data.response4)
            setCorrect(response.data.correct)
        }
        fetchQuestion()
    }, [])
    const editQuestion = (e) => {
        e.preventDefault();
        axios.put(`/api/questions/${id}`, {
            question: question,
            category: category,
            difficulty: difficulty,
            response1: response1,
            response2: response2,
            response3: response3,
            response4: response4,
            correct: correct
        })
            .then((response) => {
                console.log(response);
                router.push("/questions");
            });
    };
    return (
        <div div>
            {dados ? (
                <div className={styles.Card}>
                    <div className={styles.divTitulo}>
                        <h1 className={styles.divTitulo}>Edite a Pergunta!</h1>
                    </div>
                    <div className={styles.divInputs}>
                        <form onSubmit={editQuestion}>
                            <input className={styles.input1} type='text' placeholder=' Digite sua pergunta!' value={question} onChange={(e) => setQuestion(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite a categoria!' value={category} onChange={(e) => setCategory(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite a dificuldade!' value={difficulty} onChange={(e) => setDifficulty(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Primeira alternativa!' value={response1} onChange={(e) => setResponse1(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Segunda alternativa!' value={response2} onChange={(e) => setResponse2(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Terceira alternativa!' value={response3} onChange={(e) => setResponse3(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Quarta alternativa!' value={response4} onChange={(e) => setResponse4(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Resposta correta!' value={correct} onChange={(e) => setCorrect(e.target.value)}></input>
                            <button className={styles.divBotao}>Editar</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>Carregando...</div>
            )
            }
        </div>
    )
}