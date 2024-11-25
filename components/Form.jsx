"use client"; 
import { useState } from "react";
import styles from "./Form.module.css"; 
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"],
    weight: "400"
})

export default function Form(props) {
    const [formData, setFormData] = useState({
        name: "", 
        email: "", 
        message: ""
    })

    const [isError, setIsError] = useState({
        name: false, 
        email: false, 
        message: false
    })  

    const inputChangeHandler = (e) => {
        const {name, value} = e.target; 
        setFormData(prevState => {
            return {...prevState, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault(); 
        const newErrors = {
            name: false, 
            email: false, 
            message: false
        }

        if (!formData.name.trim()) {
            newErrors.name = true; 
        }
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            newErrors.email = true; 
        }
      
        if (!formData.message.trim()) {
            newErrors.message = true; 
        }
        
        if (!newErrors.name && !newErrors.email && !newErrors.message) {
            setFormData({
                name: "", 
                email: "", 
                message: ""
            }); 
            setIsError({
                name: false, 
                email: false, 
                message: false
            })
            props.setModalVisibility({modalIsVisible: true, username: formData.name})
        } else {
            setIsError(newErrors); 
        }
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div>
                <label className={publicSans.className} htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Jane Appleseed" 
                    value={formData.name}
                    onChange={inputChangeHandler}
                    className={`${isError.name ? styles.invalid : ""} ${publicSans.className}`}
                />
                <p className={styles.error}>{isError.name ? "Name is required" : ""}</p>
            </div>
            <div>
                <label className={publicSans.className} htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    placeholder="email@example.com" 
                    value={formData.email}
                    onChange={inputChangeHandler}
                    className={`${isError.email ? styles.invalid : ""} ${publicSans.className}`}
                />
                <p className={styles.error}>{isError.email ? "Please enter valid email address" : ""}</p>
            </div>
            <div>
                <label className={publicSans.className} htmlFor="message">Message</label>
                <textarea 
                    id="message" 
                    name="message" 
                    placeholder="How can I help?" 
                    value={formData.message}
                    onChange={inputChangeHandler}
                    className={`${isError.message ? styles.invalid : ""} ${publicSans.className}`}
                />
                <p className={styles.error}>{isError.message ? "Message area cannot be blank" : ""}</p>
            </div>
            <div>
                <input className={`${styles.submit} ${publicSans.className}`} type="submit" value="SEND MESSAGE"/>
            </div>
        </form>
    )
}