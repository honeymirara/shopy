import Link from 'next/link'
import style from './TheHeader.module.css'
import { Navigation } from '../components/Navigation'


const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products' },
    { label: 'About', href: '/about' },
    { label: 'Sign In', href: '/auth' },
    { label: 'Sign Up', href: '/reg' },

]

const TheHeader = () => {
    return (
        <header className={style.container}>
            <div className={style.wrapper}>
                <div className={style.link}><Navigation navLinks={navItems} /></div>
            </div>
        </header>
    )
}





export { TheHeader }