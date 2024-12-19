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
            <li><Link className={styles.link} href="/">HOME</Link></li>
            <li><Link className={styles.link} href="/portfolio">PORTFOLIO</Link></li>
            <li><Link className={styles.link} href="/contact">CONTACT ME</Link></li>
        </ul>
    )
}