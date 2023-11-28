"use client"
import axios from "axios"
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
        <div>
            {dados ? (
                <div>
                    <form onSubmit={editQuestion}>
                        <div>
                            <label>Question</label>
                            <input value={question} onChange={(e) => setQuestion(e.target.value)} />
                        </div>
                        <div>
                            <label>Category</label>
                            <input value={category} onChange={(e) => setCategory(e.target.value)} />
                        </div>
                        <div>
                            <label>Difficulty</label>
                            <input value={difficulty} onChange={(e) => setDifficulty(e.target.value)} />
                        </div>
                        <div>
                            <label>Response 1</label>
                            <input value={response1} onChange={(e) => setResponse1(e.target.value)} />
                        </div>
                        <div>
                            <label>Response 2</label>
                            <input value={response2} onChange={(e) => setResponse2(e.target.value)} />
                        </div>
                        <div>
                            <label>Response 3</label>
                            <input value={response3} onChange={(e) => setResponse3(e.target.value)} />
                        </div>
                        <div>
                            <label>Response 4</label>
                            <input value={response4} onChange={(e) => setResponse4(e.target.value)} />
                        </div>
                        <div>
                            <label>Correct</label>
                            <input value={correct} onChange={(e) => setCorrect(e.target.value)} />
                        </div>
                        <button>Edit Question</button>
                    </form>
                </div>
            ) : (
                <div>Carregando...</div>
            )
            }
        </div>
    )
}