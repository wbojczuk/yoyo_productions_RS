"use client"

import styles from './party.module.css';
import Link from 'next/link';

export default function Party(){
return (
 <div className={styles.party}>

    <h2>Let's Get The Party Started<span className="highlight">!</span></h2>
    <p>From club promotions and homecomings to weddings, church functions,  anniversaries, and more. We focus on building community cohesion by creating fun, engaging activities that celebrate diversity and provide a safe, welcoming environment for everyone to connect and enjoy.</p>
    <div className={`center ${styles.linkWrapper}`}>
        <Link className='main-link' href='/contact'>Contact Now</Link>
    </div>
    <div className="shader"></div>
    <img src='/img/party.webp' alt='Image of people partying' className='bg-img' />
 </div>
)};