"use client"; 
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.css"
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default function() {
    const [mobileLinksShown, setMobileLinksShown] = useState(false); 
    const path = usePathname(); 
    return (
        <div className={styles["nav-buttons"]}>
            <div onClick={() => setMobileLinksShown(!mobileLinksShown)} className={mobileLinksShown ? styles["close-container"] : styles["burger-container"]}><Image src={mobileLinksShown ? "/icons/close.svg" : "/icons/hamburger.svg"} fill alt={mobileLinksShown ? "Close button logo" : "Hamburger icon"}/></div>
            <ul className={`${styles.links} ${mobileLinksShown ? styles.visible : ""} ${publicSans.className}`}>
                <Link className={`${styles.link} ${path === "/" ? styles.current : ""}`} href="/"><li>HOME</li></Link>
                <Link className={`${styles.link} ${path.startsWith("/portfolio") ? styles.current : ""}`} href="/portfolio"><li>PORTFOLIO</li></Link>
                <Link className={`${styles.link} ${path === "/contact" ? styles.current : ""}`} href="/contact"><li>CONTACT ME</li></Link>
            </ul>
        </div>
    )
}