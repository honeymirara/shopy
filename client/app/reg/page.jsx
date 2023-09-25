import { TheFooter } from "../../components/TheFooter";
import { TheHeader } from "../../components/TheHeader";

export default function Reg() {
    return (
      <div>
        <TheHeader />
            <div className={style.wrapper}>
                <div className={style.info}></div>
                <div className={style.signUp}>
                    <h1>Sign on</h1>
                    <Input arr={arr} value={value} setValue={setValue} />
                    <div className={style.btn} onClick={show}>Sign Up</div>
                </div>
                <div className={style.signUpImg}></div>
                
            </div>

            <TheFooter />
        </div>
    )
  }