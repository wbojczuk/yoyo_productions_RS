import styles from './contactinfo.module.css';

export default function ContactInfo(){
return (
 <div className={styles.contactInfo}>
    <div className={styles.infoWrapper}>

    <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><path fill="currentColor" d="M152.27 37.93a8 8 0 0 1 9.8-5.66a86.22 86.22 0 0 1 61.66 61.66a8 8 0 0 1-5.66 9.8a8.23 8.23 0 0 1-2.07.27a8 8 0 0 1-7.73-5.94a70.35 70.35 0 0 0-50.33-50.33a8 8 0 0 1-5.67-9.8m-2.33 41.8c13.79 3.68 22.65 12.54 26.33 26.33A8 8 0 0 0 184 112a8.23 8.23 0 0 0 2.07-.27a8 8 0 0 0 5.66-9.8c-5.12-19.16-18.5-32.54-37.66-37.66a8 8 0 1 0-4.13 15.46m81.94 95.35A56.26 56.26 0 0 1 176 224C96.6 224 32 159.4 32 80a56.26 56.26 0 0 1 48.92-55.88a16 16 0 0 1 16.62 9.52l21.12 47.15v.12A16 16 0 0 1 117.39 96c-.18.27-.37.52-.57.77L96 121.45c7.49 15.22 23.41 31 38.83 38.51l24.34-20.71a8.12 8.12 0 0 1 .75-.56a16 16 0 0 1 15.17-1.4l.13.06l47.11 21.11a16 16 0 0 1 9.55 16.62m-15.88-2h-.11l-47-21.05l-24.35 20.71a8.44 8.44 0 0 1-.74.56a16 16 0 0 1-15.75 1.14c-18.73-9.05-37.4-27.58-46.46-46.11a16 16 0 0 1 1-15.7a6.13 6.13 0 0 1 .57-.77L104 87.15l-21-47a.61.61 0 0 1 0-.12A40.2 40.2 0 0 0 48 80a128.14 128.14 0 0 0 128 128a40.21 40.21 0 0 0 40-34.93Z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Phone</h2>
                <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUM}`}>{process.env.NEXT_PUBLIC_PHONE_NUM_FORMATTED}</a>
            </div>
        </div>

        <div className={styles.info}>
            <div className={styles.iconWrapper}>
                <div className={styles.icon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"></path></svg>
                </div>
            </div>
            <div className={styles.textInfo}>
                <h2>Email</h2>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS}`}>{process.env.NEXT_PUBLIC_EMAIL_ADDRESS}</a>
            </div>
        </div>

        

    </div>
 </div>
)};