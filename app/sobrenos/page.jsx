'use client';
import style from './sobrenos.module.css'
import { useState, useEffect } from "react";
import axios from "axios";
import Header from '../components/header/Header';
import Members from '../components/members/Members';

export default function SobreNos() {
    //area de state
    const [members, setMembers] = useState('');

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
    }, []);


    return (
        <div>
            <Header></Header>
<Members dados={members}></Members>
        </div>
    )
}