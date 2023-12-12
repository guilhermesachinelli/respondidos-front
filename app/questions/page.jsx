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
    const [selectCategory, setSelectCategory] = useState('');
    const [selectDifficulty, setSelectDifficulty] = useState('');

    useEffect(() => {
        async function fetchData() {
            try {
                let queryParams = '';
                if (selectCategory) {
                    queryParams += `category=${selectCategory}&`;
                }
                if (selectDifficulty) {
                    queryParams += `difficulty=${selectDifficulty}`;
                }

                const response = await axios.get(`/api/questions?${queryParams}`);
                setDados(response.data.questions);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();


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
                <div className={styles.buttonAdd}>
                <Link href={"/questions/register"}>
                    <button>Criar Pergunta</button>
                    </Link>
                    <select onChange={(e) => setSelectCategory(e.target.value)}>
                <option value="">Selecione uma categoria</option>
                <option value="Geografia">Geografia</option>
                <option value="História">História</option>
                <option value="Ciências">Ciências</option>
                <option value="Cultura">Cultura</option>
                <option value="Esportes">Esportes</option>
            </select>
            <select onChange={(e) => setSelectDifficulty(e.target.value)}>
                <option value="">Selecione uma dificuldade</option>
                <option value="Fácil">Fácil</option>
                <option value="Médio">Médio</option>
                <option value="Difícil">Difícil</option>
            </select>
                </div>
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
                                    <div className={styles.buttonAdd}>
                                        <button onClick={() => deleteQuestion(questions.id)}>Deletar</button>
                                        <button onClick={() => updateQuestion(questions.id)}>Editar</button>
                                    </div>
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