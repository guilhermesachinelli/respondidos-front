"use client";
import axios from "axios";
import { useState, useEffect } from "react";
import styles from "./questions.module.css";
import Header from "../components/header/Header";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
export default function Page() {
    const router = useRouter();
    const [dados, setDados] = useState([]);
    const [selectCategory, setSelectCategory] = useState('');
    const [selectDifficulty, setSelectDifficulty] = useState('');

    const fetchCategory = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get(`/api/questions?category=${selectCategory}&difficulty=${selectDifficulty}`);
            setDados(response.data);
        }
        catch (error) {
            console.error(error);
        }
    }
    useEffect(() => {
        async function fetchQuestions() {
            try {
                let queryParams = '';
                if (selectCategory) {
                    queryParams += `category=${selectCategory}`;
                }
                if (selectDifficulty) {
                    queryParams += `difficulty=${selectDifficulty}`;
                }
                if(queryParams.length > 0){
                    queryParams = queryParams.slice(0, -1);
                }
                const response = await axios.get(`/api/questions?${queryParams}`);
                console.log(response.data)
                setDados(response.data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchQuestions();
    }, [selectCategory, selectDifficulty]);
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
            <form onSubmit={fetchCategory}>
                <select onChange={(e) => setSelectCategory(e.target.value)}>
                    <option value="">Selecione uma categoria</option>
                    <option value="Geografia">Geografia</option>
                    <option value="História">História</option>
                    <option value="Ciências">Ciências</option>
                    <option value="Cultura">Cultura</option>
                    <option value="Esportes">Esportes</option>
                </select>
                <button type="submit">Buscar</button>
            </form>
            <form onSubmit={fetchCategory}>
                <select onChange={(e) => setSelectDifficulty(e.target.value)}>
                    <option value="">Selecione uma dificuldade</option>
                    <option value="Fácil">Fácil</option>
                    <option value="Médio">Médio</option>
                    <option value="Difícil">Difícil</option>
                </select>
                <button type="submit">Buscar</button>
            </form>
            <Link href={"/questions/register"}>
                <div className={styles.buttonAdd}>
                    <button><FontAwesomeIcon icon={faPlus} /></button>
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
                    <div className={styles.load}>
                        <h1 className={styles.upload}>Carregando...</h1>
                    </div>
                )
            }
        </div>
    )
}