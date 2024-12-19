import Link from "next/link";
import styles from "./LinkButton.module.css"; 
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"], 
  weight: "400"
})

export default function LinkButton({href, text}) {
    return (
        <Link href={href} className={`${publicSans.className} ${styles.link}`}>
            {text}
        </Link>
    )
}