'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import Footer from '../components/footer/Footer';
import InputMembers from '../components/inputmembers/InputMembers';
import PopupMessage from '../components/popup/PopUp';

export default function SobreNos() {
    //area de state
    const router = useRouter();
    const [members, setMembers] = useState('');
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
    const [deleteNumber, setDeleteNumber] = useState(1);
    const [createNumber, setCreateNumber] = useState(1);

    //area de funções
    const deleteMember = async (id) => {
        const url = `/api/members/${id}`;
        try {
            await axios.delete(url);
            setMembers(members.filter((member) => member.id !== id));
            setDeleteNumber(deleteNumber + 1);
            handleShowPopup(`Membro deletado com sucesso`, 'success')

        } catch (error) {
            handleShowPopup(`${error}`, 'error')
        }
    }

    const updateMember = async (id) => {
        router.push(`/sobrenos/${id}`);
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
            setPage(page + 1);
            if(members.length === 0){
                setPage(page - 1);
                return
            }

    }

    const handlePreviousPage = () => {
        if (page <= 1) {
            return;
        }
        setPage(page - 1);
        return
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/members", { name, age, description, image, github, instagram });
        setMembers([...members, response.data]);
        setCreateNumber(createNumber + 1);
        setName("");
        setAge("");
        setDescription("");
        setImage("");
        setGithub("");
        setInstagram("");
        handleShowPopup(`Membro adicionado com sucesso`, 'success')
    }
    //area de efeitos
    useEffect(() => {
        const getMembers = async () => {
            try {
                const response = await axios.get(`/api/members?page=${page}`);
                setMembers(response.data.results);
            } catch (error) {
                console.error(error);
            }
        };

        getMembers();
    }, [page, deleteNumber, createNumber]);


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
                <button className={style.btn} type="submit" >Adicionar</button>
            </form>

            <Members dados={members} onDelete={deleteMember} onEdite={updateMember} />

            <div className={style.container}>
                <button className={style.btn} onClick={handlePreviousPage}>Anterior</button>
                <button className={style.btn} onClick={handleNextPage}>Próxima</button>
            </div>
            {
                showPopup ? (
                    <PopupMessage message={popupMessage} type={popupType} />
                ) : null
            }
            <Footer className={style.footerfixed} />
        </div>
    )
}