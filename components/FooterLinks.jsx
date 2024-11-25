import Link from "next/link";
import { Public_Sans } from "next/font/google";
import styles from "./FooterLinks.module.css"

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default function FooterLinks() {
    return (
        <ul className={`${styles["footer-links"]} ${publicSans.className}`}>
            <Link className={styles.link} href="/"><li>HOME</li></Link>
            <Link className={styles.link} href="/portfolio"><li>PORTFOLIO</li></Link>
            <Link className={styles.link} href="/contact"><li>CONTACT ME</li></Link>
        </ul>
    )
}