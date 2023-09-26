import Link from 'next/link'
import style from './TheFooter.module.css'

const TheFooter = () => {
    return (
        <div className={style.wrapper}>
            <footer className={style.container}>
            created by Julia
        </footer>
        </div>
        
    )
}

export { TheFooter }