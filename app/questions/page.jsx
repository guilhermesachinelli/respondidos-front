"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./questions.module.css";
import Header from "../components/header/Header";
export default function Page() {
    const [questions, setQuestions] = useState([]);
    const [dados, setDados] = useState([]);
    const [question, setQuestion] = useState("");
    const [category, setCategory] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [response1, setResponse1] = useState("");
    const [response2, setResponse2] = useState("");
    const [response3, setResponse3] = useState("");
    const [response4, setResponse4] = useState("");
    const [correct, setCorrect] = useState("");
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
    const handleSubmit = async (e) => {
        e.preventDefault();
    try{
        const response = await axios.post("/api/questions", {question, category, difficulty, response1, response2, response3, response4, correct});
        setQuestions([...dados, response.data.data]);
        setQuestion("");
        setCategory("");
        setDifficulty("");
        setResponse1("");
        setResponse2("");
        setResponse3("");
        setResponse4("");
        setCorrect("");
    }catch(error){
        console.error(error);
    }
    }
    return (
        <div>
            <Header />
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        placeholder="Questão"
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Categoria"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Dificuldade"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Resposta 1"
                        value={response1}
                        onChange={(e) => setResponse1(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Resposta 2"
                        value={response2}
                        onChange={(e) => setResponse2(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Resposta 3"
                        value={response3}
                        onChange={(e) => setResponse3(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Resposta 4"
                        value={response4}
                        onChange={(e) => setResponse4(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Resposta Correta"
                        value={correct}
                        onChange={(e) => setCorrect(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </div>
            </form>
            {
                dados.length  ? (
                    question ? (
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
                                </div>
                            ))

                        }
                    </div>
                ) : (
                    <div>
                        <h1>Carregando...</h1>
                    </div>
                )
                ) : (
                    <div>
                        <h1>Não há questões cadastradas</h1>
                    </div>
                )
            }
        </div>
    )
}