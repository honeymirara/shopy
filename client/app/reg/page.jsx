'use client'
/* 'use client'
import { TheFooter } from "../../components/TheFooter";
import { TheHeader } from "../../components/TheHeader";
import style from './style.module.css';
import Link from 'next/link';
import axios from 'axios';
import { useState, useContext } from 'react';
import { redirect } from "next/dist/server/api-utils";
import MyContext from '../../Context/Context';
import Input from '../../components/Input/Input'


export default function Reg() {

    const { logIn } = useContext(MyContext);
    const [value, setValue] = useState({ name: '', surname: '', email: '', password: '' });
    const arr = ['name', 'surname', 'email', 'password'];

    async function show() {
        const result = await axios.post('http://localhost:3001/api/reg', value, {
            withCredentials: true,
        });
        if (result.data.length) {
            logIn()
            redirect('/');
            console.log(result);
        }
    }



    /* const nameInputHandle = (event) => {
        setValue({ ...value, name: event.target.value })

    }

    const surnameInputHandle = (event) => {
        setValue({ ...value, surname: event.target.value })
    }

    const emailInputHandle = (event) => {
        setValue({ ...value, email: event.target.value })
    }

    const passwordInputHandle = (event) => {
        setValue({ ...value, password: event.target.value })

    } 
 
    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.info}>registration</div>
                <div className={style.signUp}>
                    <h1>let's registrate yourself</h1>
                    {/*  <input  className={style.InpName} placeholder='name'  arr={arr} value={value} setValue={setValue} onChange={nameInputHandle}/>
                    <input  onChange ={surnameInputHandle} className={style.InpSurname} arr={arr} value={value} setValue={setValue} placeholder='surname' />
                    <input arr={arr} value={value} setValue={setValue} onChange ={emailInputHandle}className={style.InpEmail} placeholder='email' />
                    <input  arr={arr} value={value} setValue={setValue} onChange ={passwordInputHandle} className={style.InpPassword} placeholder='password' /> 
                    <Input arr={arr} value={value} setValue={setValue} />
                    <div className={style.btn} onClick={show}>Sign Up</div>
                </div>
                <div className={style.signUpImg}></div>

            </div>

        </div>
    ) 
}*/

import React, { useState, useContext } from 'react';
import Link from 'next/link';
import axios from 'axios';
import MyContext from '../../Context/Context';
import Input from '../../components/Input/Input';
import style from './style.module.css'
import {logIn, logOut} from '../../App'

export default function Reg() {
    const { logIn } = useContext(MyContext);
    const [value, setValue] = useState({ name: '', surname: '', email: '', password: '' });
    const arr = ['name', 'surname', 'email', 'password'];

    async function show() {
        const result = await axios.post('http://localhost:3001/api/reg', value, {
            withCredentials: true,
        });
        if (result.data.length) {
            logIn();
            // Перенаправьте пользователя на главную страницу после успешной регистрации
            window.location.href = '/';
            console.log(result);
        }
    }

    return (
        <div>
            <div className={style.wrapper}>
                <div className={style.info}>Registration</div>
                <div className={style.signUp}>
                    <h1>Let's register yourself</h1>
                    <Input arr={arr} value={value} setValue={setValue} />
                    <div className={style.btn} onClick={show}>Sign Up</div>
                </div>
                <div className={style.signUpImg}></div>
            </div>
        </div>
    )
}










