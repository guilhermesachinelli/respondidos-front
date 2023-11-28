'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';
import Footer from '../components/footer/Footer';

export default function SobreNos() {
    //area de state
    const [members, setMembers] = useState('');

        //area de funções
        const deleteMember = async (id) => {
            const url = `/api/members/${id}`;
            try {
                await axios.delete(url);
                setMembers(dados.filter((member) => member.id !== id));
            } catch (error) {
                console.error("error deleting member", error);
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
    }, [deleteMember]);


    //area de retorno

    return (
        <div className={style.bckg}>
            <Header />
            <Members dados={members} onDelete={deleteMember}/>
            <Footer className={style.footerfixed}/>
        </div>
    )
}