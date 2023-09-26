import { TheFooter } from "../../components/TheFooter";
import { TheHeader } from "../../components/TheHeader";
import style from './style.module.css';
import Link from 'next/link'

export default function Auth() {
  return (
    <div>
      <div className={style.wrapper}>
        <div className={style.info}>authorization</div>
        <div className={style.signIn}>
          <h1>let's authorizate yourself</h1>
          <input className={style.InpEmail} placeholder='email' />
          <input className={style.InpPassword} placeholder='password' />

          <div className={style.btn}>Sign In</div>
        </div>
        <div className={style.signUpImg}></div>

      </div>
    </div>
  )
}
