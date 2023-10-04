'use client'
import { TheFooter } from "../../components/TheFooter";
import { TheHeader } from "../../components/TheHeader";
import style from './style.module.css';
import Link from 'next/link'
import { useState, useContext } from 'react';
import axios from 'axios';
import MyContext from '../../Context/Context';
import { redirect } from "next/dist/server/api-utils";


export default function Auth() {


    const { logIn } = useContext(MyContext)

    const [value, setValue] = useState({ email: '', password: '' })

    const arr = ["email", "password"];

    async function show() {
        const result = await axios.post('http://localhost:3001/api/auth', value, {
            withCredentials: true,
        });
        logIn()
        if (result.data.length) {
            redirect('/')
        }
        console.log(result);
    }

  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.info}>authorization</div>
        <div className={style.signIn}>
          <h1>let's authorizate yourself</h1>
          <input className={style.InpEmail} arr={arr} value={value} setValue={setValue} placeholder='email' />
          <input className={style.InpPassword} arr={arr} value={value} setValue={setValue} placeholder='password' />

          <div className={style.btn } onClick={show} >Sign In</div>
        </div>
        <div className={style.signUpImg}></div>

      </div>
    </div>
  )
}
