"use client"; 
import styles from "./FormModal.module.css"; 
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default function FormModal(props) {
    const closeModalHandler = (e) => {
        props.setModalVisibility({modalIsVisible: false, username: ""})
    }

    return (
        <div className={`${styles.backdrop} ${props.modalState ? styles.active : ""}`} onClick={closeModalHandler}>
            <section className={styles.message} onClick={(e) => {e.stopPropagation()}}>
                <h2>Message Received!</h2>
                <p className={`${publicSans.className}`}>Hello, {props.username}!</p>
                <p className={`${publicSans.className}`}>Thank you for reaching out, I really appreciate you making the time to get in contact wtih me.</p>
                <p className={`${publicSans.className}`}>Your message has been successfully received and I will be making contact with you in 24-48 hours.</p>
                <button className={`${publicSans.className}`} onClick={closeModalHandler}>I understand</button>
            </section>
        </div>
    )
}