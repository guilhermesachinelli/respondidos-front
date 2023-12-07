"use client"
import axios from "axios"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Footer from "@/app/components/footer/Footer"
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
        <div className={styles.bckg}>
            {dados ? (
                <div className={styles.form}>
                    <div>
                        <h1 className={styles.form__title}>Edite o Membro!</h1>
                    </div>
                    <div className={styles.divInputs}>
                        <form onSubmit={editMember}>
                            <input
                                type="name"
                                placeholder="Nome"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="number"
                                min={1}
                                max={100}
                                placeholder="Idade"
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Descrição"
                                maxLength={100}
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Imagem"
                                value={image}
                                onChange={(e) => setImage(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Github"
                                value={github}
                                onChange={(e) => setGithub(e.target.value)}
                            />
                            <input
                                type="text"
                                placeholder="Instagram"
                                value={instagram}
                                onChange={(e) => setInstagram(e.target.value)}
                            />
                            <button className={styles.divBotao}>Adicionar</button>
                        </form>
                    </div>
                </div>
            ) : (
                <div>Carregando Membro Para Edição...</div>
            )}
            <Footer className={styles.footerfixed} />
        </div>
    )
}