import styles from "./PortfolioBriefText.module.css"
import { Public_Sans } from "next/font/google"; 
import LinkButton from "./LinkButton";

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default function PortfolioBriefText({name, title, description}) {
    return (
        <div className={styles.container}>
            <h2>{title}</h2>
            <p className={publicSans.className}>{description}</p>
            <LinkButton href={`/portfolio/${name}`} text="View Project"/>
        </div>
    )
}