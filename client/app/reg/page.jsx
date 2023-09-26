 import { TheFooter } from "../../components/TheFooter";
import { TheHeader } from "../../components/TheHeader";
import style from './style.module.css'; 
import Link from 'next/link'

export default function Reg() {
        return (
            <div>
                
                <div className={style.wrapper}>
                    <div className={style.info}>registration</div>
                    <div className={style.signUp}>
                        <h1>let's registrate yourself</h1>
                        <input className={style.InpName} placeholder='name'/>
                        <input className={style.InpSurname} placeholder='surname' />
                        <input className={style.InpEmail} placeholder='email'/>
                        <input className={style.InpPassword} placeholder='password'/>
                       
                        <div className={style.btn}>Sign Up</div>
                    </div>
                    <div className={style.signUpImg}></div>
    
                </div>
              
            </div>
        )
    }