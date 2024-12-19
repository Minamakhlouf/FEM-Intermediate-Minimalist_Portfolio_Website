import Image from "next/image";
import styles from "./page.module.css"
import ContactCTA from "@/components/ContactCTA";
import LinkButton from "@/components/LinkButton";
import { Public_Sans } from "next/font/google";

const publicSans = Public_Sans({
  subsets: ["latin"], 
  weight: "400"
})

export default function Home() {
  return (
    <main>
      <section className={styles["hero-section"]}>
        <div className={styles["content-container"]}>
          <picture className={styles["image-container"]}>
            <source
              srcSet="/homepage/desktop/image-homepage-hero.jpg 1x, /homepage/desktop/image-homepage-hero@2x.jpg 2x"
              media="(min-width: 1110px)"
            />
            <source
              srcSet="/homepage/tablet/image-homepage-hero.jpg 1x, /homepage/tablet/image-homepage-hero@2x.jpg 2x"
              media="(max-width: 1110px) and (min-width: 768px)"
            />
            <source
              srcSet="/homepage/mobile/image-homepage-hero.jpg 1x, /homepage/mobile/image-homepage-hero@2x.jpg 2x"
              media="(max-width: 768px)"
            />
            <Image
              src="/homepage/mobile/image-homepage-hero.jpg"
              srcSet="/homepage/mobile/image-homepage-hero@2x.jpg 2x"
              alt="Hero Image"
              fill
            />
          </picture>
          <div className={styles["hero-text"]}>
            <h1 className={styles.heading}>Hey, I&apos;m Alex Spencer and I love building beautiful websites</h1>
            <a className={styles["about-link"]} href="#about"><span><Image src="/icons/down-arrows.svg" width="16" height="12" alt="down arrow"/></span><span className={publicSans.className}>ABOUT ME</span></a>
          </div>
        </div>
      </section>
      <section id={"about"} className={styles.about}>
        <picture className={styles["image-container"]}>
          <source
            srcSet="/homepage/desktop/image-homepage-profile.jpg 1x, /homepage/desktop/image-homepage-profile@2x.jpg 2x"
            media="(min-width: 1110px)"
          />
          <source
            srcSet="/homepage/tablet/image-homepage-profile.jpg 1x, /homepage/tablet/image-homepage-profile@2x.jpg 2x"
            media="(max-width: 1110px) and (min-width: 768px)"
          />
          <source
            srcSet="/homepage/mobile/image-homepage-profile.jpg 1x, /homepage/mobile/image-homepage-profile@2x.jpg 2x"
            media="(max-width: 768px)"
          />
          <Image
            src="/homepage/mobile/image-homepage-profile.jpg"
            srcSet="/homepage/mobile/image-homepage-profile@2x.jpg 2x"
            alt="Profile Image"
            fill
          />
        </picture>
        <div className={styles["about-text"]}>
          <h2>About Me</h2>
          <p className={publicSans.className}>I&apos;m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. I&apos;m based in London, UK, but I&apos;m happy working remotely and have experience in remote teams. When I&apos;m not coding, you&apos;ll find me outdoors. I love being out in nature whether that&apos;s going for a walk, run or cycling. I&apos;d love you to check out my work.</p>
          <LinkButton href="/portfolio" text="Go to Portfolio"/>
        </div>
      </section>
      <ContactCTA/>
    </main>
  );
}
