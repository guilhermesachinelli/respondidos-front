"use client"
import axios from "axios"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
export default function updateMember({ params }) {
    const { id } = params;
    const router = useRouter();
    const [dados, setDados] = useState()
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [github, setGithub] = useState("")
    const [instagram, setInstagram] = useState("")

    console.log(dados)

    useEffect(() => {
        async function fetchMember() {
            const response = await axios.get(`/api/members/${id}`)
            setDados(response.data)
            setName(response.data.name)
            setAge(response.data.age)
            setDescription(response.data.description)
            setImage(response.data.image)
            setGithub(response.data.github)
            setInstagram(response.data.instagram)
        }
        fetchMember()
    }, [])

    const editMember = (e) => {
        e.preventDefault();
        axios.put(`/api/members/${id}`, {
            name: name,
            age: age,
            description: description,
            image: image,
            github: github,
            instagram: instagram
        })
            .then((response) => {
                console.log(response);
                router.push("/sobrenos");
            });
    };
    return (
        <div div>
            {dados ? (
                <div className={styles.Card}>
                    <div className={styles.divTitulo}>
                        <h1 className={styles.divTitulo}>Edite o Membro!</h1>
                    </div>
                    <div className={styles.divInputs}>
                        <form onSubmit={editMember}>
                            <input className={styles.input1} type='text' placeholder=' Digite o nome!' value={name} onChange={(e) => setName(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite a idade!' value={age} onChange={(e) => setAge(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite a descrição!' value={description} onChange={(e) => setDescription(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite a imagem!' value={image} onChange={(e) => setImage(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite o github!' value={github} onChange={(e) => setGithub(e.target.value)}></input>
                            <input className={styles.input1} type='text' placeholder=' Digite o instagram!' value={instagram} onChange={(e) => setInstagram(e.target.value)}></input>
                            <button className={styles.divBotao}>Adicionar</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>Carregando...</div>
            )}
        </div>
    )
}