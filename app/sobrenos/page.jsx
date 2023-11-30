'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import Footer from '../components/footer/Footer';
import PopupMessage from '../components/popup/PopUp';

export default function SobreNos() {
    //area de state
    const [members, setMembers] = useState('');
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');

    //area de funções
    const deleteMember = async (id) => {
        const url = `/api/members/${id}`;
        try {
            await axios.delete(url);
            setMembers(dados.filter((member) => member.id !== id));
            handleShowPopup('Membro deletado com sucesso', 'success')
        } catch (error) {
            console.error("error deleting member", error);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("/api/members", { name, age, description, image, github, instagram });
            console.log(response.data);
            setMembers([...members, response.data.data]);
            setName("");
            setAge("");
            setDescription("");
            setImage("");
            setGithub("");
            setInstagram("");
            handleShowPopup(`Membro adicionado com sucesso, ${response.data.message}`, 'success')
        } catch (error) {
            console.error(error);
            handleShowPopup(`Erro ao adicionar membro: ${error.message}`, 'error')
        }
    }

    //area de efeitos
    useEffect(() => {
        async function getMembers() {
            try {
                const response = await axios.get("/api/members");
                setMembers(response.data);
            } catch (error) {
                console.log(error);
            }
        }
        getMembers();
    }, [deleteMember, handleSubmit]);

    //area popUp
    const handleShowPopup = (message, type,) => {
        setPopupMessage(message)
        setPopupType(type)
        setShowPopup(true)
        setTimeout(() => {
            setShowPopup(false)
        }, 4000)
    }

    //area de retorno

    return (
        <div className={style.bckg}>
            <Header />


                <div className={style.container}>
                    <h1 className={style.title}>Sobre Nós</h1>
                    <p className={style.text}>Aqui você pode encontrar um pouco sobre nós, os integrantes do grupo!</p>
                </div>


            <form onSubmit={handleSubmit} className={style.form}>
                <h3 className={style.form__title}>Adicionar Membro</h3>
                <div className={style.form__container}>
                    <input
                        type="name"
                        placeholder="Nome"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Idade"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Descrição"
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
                    <button className={style.btn} type="submit" onClick={handleSubmit}>Adicionar</button>
                </div>
            </form>

            <Members dados={members} onDelete={deleteMember} />
            {
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} />
                ) : null
            }
            <Footer className={style.footerfixed} />
        </div>
    )
}