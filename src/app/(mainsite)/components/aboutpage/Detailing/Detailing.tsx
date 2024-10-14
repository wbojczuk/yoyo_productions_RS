import Link from 'next/link';
import styles from './detailing.module.css';

export default function Detailing(){
return (
 <div className={styles.detailing}>
    <div className={styles.textWrapper}>
        <h2>About Us</h2>
        <p>Yo-Yo Productions combines nightclub comedy show promotions with a strong commitment to community activism. We create events that not only entertain but also foster community engagement, offering a safe and inclusive space where people can come together and celebrate diversity. Whether you're enjoying a night out or connecting with others, Yo-Yo Productions is all about bringing people closer in a fun and meaningful way.</p>
        <Link className='main-link' href={`/contact`}>Contact Now</Link>
    </div>
    <div className={styles.imgWrapper}>
        <img src="/img/about.webp" alt="image of a party" className="bg-img" />
        <div className={`shader ${styles.shader}`}></div>
    </div>
 </div>
)};