'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import Footer from '../components/footer/Footer';
import PopupMessage from '../components/popup/PopUp';
import InputMembers from '../components/inputmembers/InputMembers';

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
            handleShowPopup(`${error}`, 'error')
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
            handleShowPopup(`Membro adicionado com sucesso`, 'success')
        } catch (error) {
            console.error(error);
            handleShowPopup(`${error}`, 'error')
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
                <p className={style.text}>Aqui você pode encontrar um pouco sobre nós, os integrantes do grupo.</p>
            </div>

            <form onSubmit={handleSubmit} className={style.form}>
            <InputMembers name={name} setName={setName} age={age} setAge={setAge} description={description} setDescription={setDescription} image={image} setImage={setImage} github={github} setGithub={setGithub} instagram={instagram} setInstagram={setInstagram} />
            <button className={style.btn} type="submit" onClick={handleSubmit}>Adicionar</button>
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