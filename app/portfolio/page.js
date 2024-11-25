import portfolio from "@/data/portfolio.json"; 
import PortfolioBrief from "@/components/PortfolioBrief";
import styles from "./page.module.css"
import ContactCTA from "@/components/ContactCTA";

export default function Portfolio() {
    console.log(portfolio)
    return (
        <main>
            <div className={styles["project-container"]}>
                {portfolio.map((portfolio, index) => {
                    return <PortfolioBrief key={`${portfolio.name}${index}`} {...portfolio}/>
                })}
            </div>
            <ContactCTA/>
        </main>
    )
}