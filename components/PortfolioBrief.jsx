import styles from "./PortfolioBrief.module.css"; 
import PortfolioBriefPicture from "./PortfolioBriefPicture";
import PortfolioBriefText from "./PortfolioBriefText";

export default function PortfolioBrief({id, name, title, description}) {
    return (
        <section>
            <div className={`${styles["grid-container"]} ${id % 2 === 0 ? styles.even : styles.odd} `}>
                <PortfolioBriefPicture name={name}/> 
                <PortfolioBriefText name={name} title={title} description={description}/>
            </div>
        </section>
    )
}