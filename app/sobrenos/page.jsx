'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import Footer from '../components/footer/Footer';
import InputMembers from '../components/inputmembers/InputMembers';
import PopupMessage from '../components/popup/PopUp';
import { changePage } from '../api/members/route';

export default function SobreNos() {
    //area de state
    const [members, setMembers] = useState('');
    const [errorMsg, setError] = useState('');
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [age, setAge] = useState("");
    const [image, setImage] = useState("");
    const [github, setGithub] = useState("");
    const [instagram, setInstagram] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');
    const [page, setPage] = useState(1);

    //area de funções
    const deleteMember = async (id) => {
        const url = `/api/members/${id}`;
        try {
            await axios.delete(url);
            setMembers(members.filter((member) => member.id !== id));
        } catch (error) {

            handleShowPopup(`${error}`, 'error')
        }
    }

    const handleShowPopup = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setShowPopup(true);
        setTimeout(() => {
            setShowPopup(false);
        }, 3000);
    }

    const handleNextPage = () => {
        if (page > members.length / 3) {
            if (members.length % 3 !== 0) {
                return;
            } else {
                setPage(page + 1);
                changePage(page);
            }
        }
        setPage(page + 1);
        changePage(page);
    }

    const handlePreviousPage = () => {
        if (page <= 1) {
            return;
        }
        setPage(page - 1);
        changePage(page);
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(name, description, image, github, instagram);
if(members.data.errors !== true){
            const response = await axios.post("/api/members", { name, description, image, github, instagram });
            console.log(response.data);
            setMembers([...members, response.data.results]);
            handleShowPopup(`Membro adicionado com sucesso`, 'success')
} else {
            const response = await axios.get("/api/members/errors");
            console.log(response.data.message);
            setError(response.data.message);
            handleShowPopup(`${errorMsg}`, 'error')
}
    }
    //area de efeitos
    useEffect(() => {
        const getMembers = async () => {
            const response = await axios.get(`/api/members`);
            setMembers(response.data.results);
        }
        getMembers();
    }, [page, deleteMember, handleSubmit]);


    //area de retorno

    return (
        <div className={style.bckg}>
            <Header />

            <div className={style.container}>
                <h1 className={style.title}>Sobre Nós</h1>
                <p className={style.text}>Aqui você pode encontrar um pouco sobre nós, os integrantes do grupo!</p>
            </div>

            <form onSubmit={handleSubmit} className={style.form}>
                <InputMembers name={name} setName={setName} age={age} setAge={setAge} description={description} setDescription={setDescription} image={image} setImage={setImage} github={github} setGithub={setGithub} instagram={instagram} setInstagram={setInstagram} />
                <button className={style.btn} type="submit" onClick={handleSubmit}>Adicionar</button>
            </form>

            <Members dados={members} onDelete={deleteMember} />

            <div className={style.container}>
                <button className={style.btn} onClick={handlePreviousPage}>Anterior</button>
                <button className={style.btn} onClick={handleNextPage}>Próxima</button>
            </div>
            {
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} /> // Certifique-se de que PopupMessage está sendo importado corretamente
                ) : null
            }
            <Footer className={style.footerfixed} />
        </div>
    )
}