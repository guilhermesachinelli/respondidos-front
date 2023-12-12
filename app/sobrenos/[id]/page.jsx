"use client"
import axios from "axios"
import styles from "./page.module.css"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Footer from "@/app/components/footer/Footer"
import Header from "@/app/components/header/Header"
import Bomb from "@/app/components/bomb/Bomb"
import PopupMessage from "@/app/components/popup/PopUp"
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
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');


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

    const handleShowPopup = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    const editMember = (e) => {
        e.preventDefault();
        if (!name || !age || !description || !image || !github || !instagram) {
            handleShowPopup(`Preencha todos os campos`, 'error')
            return
        }
        if (name.length < 3) {
            handleShowPopup(`Nome deve conter pelo menos 3 caracteres`, 'error')
            return;
        }
        if (isNaN(age)) {
            handleShowPopup(`Idade inválida`, 'error')
            return;
        }
        if (age < 15 || age > 100) {
            handleShowPopup(`Idade inválida`, 'error')
            return;
        }
        if (description.length < 10 || description.length > 100) {
            handleShowPopup(`Descrição deve conter entre 10 e 100 caracteres`, 'error')
            return;
        }
        if (image.match(/\.(jpeg|jpg|gif|png)$/) == null) {
            handleShowPopup(`URL da imagem inválida`, 'error')
            return;
        }
        axios.put(`/api/members/${id}`, {
            name: name,
            age: age,
            description: description,
            image: image,
            github: github,
            instagram: instagram
        }
        )
            .then((response) => {
                console.log(response);
                handleShowPopup(`Membro editado com sucesso`, 'success')
                router.push("/sobrenos");
            });
    };

    const returnToPage = () => {
        router.push("/sobrenos");
    }
    return (
        <div className={styles.bckg}>
            <Header />
            {dados ? (
                <div className={styles.form}>
                    <div>
                        <h1 className={styles.form__title}>Edite o Membro!</h1>
                    </div>
                    <div className={styles.form__container}>
                        <form>
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

                        </form>
                        <button className={styles.btn} onClick={editMember}>Adicionar</button>
                            <button className={styles.btn} onClick={returnToPage}>Voltar</button>
                    </div>
                </div>
            ) : (
                <Bomb text={"Carregando membro para edição"} />
            )}
{
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} />
                ) : null
            }
            <Footer className={styles.footerfixed} />
        </div>
    )
}