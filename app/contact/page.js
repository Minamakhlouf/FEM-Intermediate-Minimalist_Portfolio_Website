import styles from "./page.module.css"; 
import IconContainer from "@/components/IconContainer";
import FormController from "@/components/FormController";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default function Contact() {
    return (
        <main className={styles.page}>
            <section className={styles.intro}>
                <h1>Get in Touch</h1>
                <div>
                    <p className={publicSans.className}>I&apos;d love to hear about what you&apos;re working on and how I could help. I&apos;m currently looking for a new role and am open to a wide range of opportunities. My preference would be to find a position in a company in London. But I&apos;m also happy to hear about opportunities that don&apos;t fit that description. I&apos;m a hard-working and positive person who will always approach each task with a sense of purpose and attention to detail. Please do feel free to check out my online profiles below and get in touch using the form.</p>
                    <IconContainer isLight={false} isFooter={false}/>
                </div>
            </section>
            <section className={styles["form-container"]}>
                <h2>Contact Me</h2>
                <FormController/>
            </section>
        </main>
    )
}