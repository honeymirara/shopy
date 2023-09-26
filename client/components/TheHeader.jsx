import Link from 'next/link'
import style from './TheHeader.module.css'

const TheHeader = () => {
    return (
        <header className={style.container}>
            <div className={style.wrapper}>
                <p className={style.link}><Link href='/'>Home</Link> </p>
                <p className={style.link}><Link href='/products'>Products</Link></p>
                <p className={style.link}> <Link href='/about'>About</Link></p>
                <p className={style.link}> <Link href='/auth'>Sign In </Link></p>
                <p className={style.link}><Link href='/reg'>Sign Up</Link></p>

            </div>

        </header>
    )
}



export { TheHeader }