"use client"

import Link from 'next/link';
import styles from './header.module.css';

export default function Header(){
return (
 <header className={styles.header}>
    <h1>Your Event<span className="highlight">.</span><br />Our Passion<span className="highlight">.</span></h1>

    <p>Yo-yo Productions specializes in creating unforgettable entertainment experiences that bring top talent to the stage. Let us help you create memorable moments through our dynamic entertainment services!</p>

    <div className={`center main-body ${styles.linkWrapper}`}>
        <Link className='main-link' href={`/contact`}>Contact Now</Link>
    </div>

    <img src='/img/header-bg.webp' alt='Image of party' className='bg-img' />
    <div className='shader'></div>
 </header>
)};