import Link from 'next/link';
import styles from './servicearea.module.css';

export default function ServiceArea(){
return (
 <div className={styles.serviceArea}>
    <div className={styles.textWrapper}>
        <h2>
            <span className="underline">Serving Fayetteville,</span> <br />
            <span className="underline">Raleigh, and</span> <br />
            <span className="underline">Charlotte, NC</span>
        </h2>
        <Link className='main-link' href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>Contact Now</Link>
    </div>
    <div className={styles.mapWrapper}>
    <iframe src="https://www.google.com/maps/d/embed?mid=196wtBSoh9MFwzreGkn4dslYfZTjeExE&hl=en&ehbc=2E312F" style={{"border":0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
 </div>
)};