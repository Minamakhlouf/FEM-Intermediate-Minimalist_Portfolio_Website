import styles from "./ContactCTA.module.css"; 
import Link from "next/link";
import LinkButton from "./LinkButton";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"], 
  weight: "400"
})

export default function ContactCTA() {
    return (
        <section className={styles.contact}>
            <div className={styles["contact-flex"]}>
              <h2>Interested in doing a project together?</h2>
              <div></div>
              <LinkButton href="/contact" text="Contact Me"/>
            </div>
      </section>
    )
}