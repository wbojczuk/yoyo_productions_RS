"use client"

import Link from 'next/link';
import styles from './find.module.css';

export default function DontStress(){
return (
 <div className={styles.find}>

    <h2>Make it an event to remember<span className="highlight">!</span></h2>

    <h3>Contact us and let’s get started today on your next event and make it a great experience!</h3>

    <div className={`center ${styles.linkWrapper}`}>
    <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Contact Now</Link>
    </div>
 
    <img src='/img/event.png' alt='Image of road' className='bg-img' />
    <div style={{backgroundColor: "rgba(0,0,0,0.65)"}} className='shader'></div>
 </div>
)};