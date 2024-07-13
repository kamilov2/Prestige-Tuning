import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import logo from '../../../../public/img/logo.png'

const Footer = () => {
    const { lan } = React.useContext(Context);

    const [link] = React.useState([
        {
            id: 1,
            link: '/',
            icon: 'fa-brands fa-telegram',
        },
        {
            id: 2,
            link: '/',
            icon: 'fa-brands fa-instagram',
        },
        {
            id: 3,
            link: '/',
            icon: 'fa-brands fa-youtube',
        },
        {
            id: 4,
            link: '/',
            icon: 'fa-brands fa-tiktok',
        },
    ])

    return (
        <footer className={styles.footer}>
            <div className={styles.footer__content}>
                <Link href={'/'}>
                    <Image
                        src={logo}
                        alt='footer'
                    />
                </Link>
                <ul className={styles.footer__content__list}>
                    {
                        link.map((item) => (
                            <li key={item.id}>
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <i className={item.icon}></i>
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <span></span>
                <p>Copyright © ООО «Prestige Tuning» 2024. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer;