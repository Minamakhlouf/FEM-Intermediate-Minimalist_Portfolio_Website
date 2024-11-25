import styles from "./page.module.css"; 
import ContactCTA from "@/components/ContactCTA";
import details from "@/data/details.json"
import ProjectDetailImage from "@/components/ProjectDetailImage";
import LinkButton from "@/components/LinkButton";
import Link from "next/link";
import Image from "next/image";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
    subsets: ["latin"], 
    weight: "400"
})

export default async function Project({params}) {
    const projectName = await params.project
    const projectInformation = details.filter(element => element.name === projectName); 
    const currentIndex = details.findIndex(project => project.name === projectName); 
    const nextIndex = currentIndex + 1 < details.length ? details[currentIndex + 1] : details[0]; 
    const prevIndex = currentIndex - 1 >= 0 ? details[currentIndex - 1] : details[details.length - 1];

    return (
        <main className={styles.page}>
            <section className={styles.hero}>
                <div className={styles["image-container"]}>
                    <ProjectDetailImage projectName={projectName} projectPurpose={"hero"}/>
                </div>
            </section>
            <div className={styles["grid-large"]}>
                <section className={styles.description}>
                    <h2>{projectInformation[0].title}</h2>
                    <p className={publicSans.className}>{projectInformation[0].projectDescription}</p>
                    <div className={styles.languages}>
                        <p className={publicSans.className}>{projectInformation[0].projectCategories}</p>
                        <p className={publicSans.className}>{projectInformation[0].projectLanguages}</p>
                    </div>
                    <LinkButton className={styles["description-button"]} href="" text="visit website"/>
                </section>
                <div>
                    <section className={styles.background}>
                        <h2>Project Background</h2>
                        <p className={publicSans.className}>{projectInformation[0].projectBackground}</p>
                    </section>
                    <section className={styles["image-preview"]}>
                        <h2>Static Previews</h2>
                        <div className={styles["image-container"]}>
                            <ProjectDetailImage projectName={projectName} projectPurpose={"preview-1"}/>
                        </div>
                        <div className={styles["image-container"]}>
                            <ProjectDetailImage projectName={projectName} projectPurpose={"preview-2"}/>
                        </div>
                    </section>
                </div>
            </div>
            <section className={styles["other-projects"]}>
                <Link className={styles.button} href={`/portfolio/${prevIndex.name}`}>
                    <div>
                        <Image src="/icons/arrow-left.svg" width={8} height={16} alt="Left Arrow"/>
                        <h2>{prevIndex.title}</h2>
                        <p className={publicSans.className}>Previous Project</p>
                    </div>
                </Link>
                <Link className={styles.button} href={`/portfolio/${nextIndex.name}`}>
                    <div>
                        <Image className={styles["arrow-right"]} src="/icons/arrow-right.svg" width={8} height={16} alt="Right Arrow"/>
                        <h2>{nextIndex.title}</h2>
                        <p className={publicSans.className}>Next Project</p>
                    </div>
                </Link>
            </section>
            <ContactCTA/>
        </main>
    )
}