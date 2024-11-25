import Image from "next/image";
import Link from "next/link";
import styles from "./PortfolioBriefPicture.module.css"

export default function PortfolioBriefPicture({name}) {
    return (
        <div>
            <picture className={styles["image-container"]}>
                <source
                srcSet={`/portfolio/desktop/image-portfolio-${name}.jpg 1x, /portfolio/desktop/image-portfolio-${name}@2x.jpg 2x`}
                media="(min-width: 1110px)"
                />
                <source
                srcSet={`/portfolio/tablet/image-portfolio-${name}.jpg 1x, /portfolio/tablet/image-portfolio-${name}@2x.jpg 2x"`}
                media="(max-width: 1110px) and (min-width: 768px)"
                />
                <source
                srcSet={`/portfolio/mobile/image-portfolio-${name}.jpg 1x, /portfolio/mobile/image-portfolio-${name}@2x.jpg 2x"`}
                media="(max-width: 768px)"
                />
                <Image
                src={`/portfolio/mobile/image-portfolio-${name}.jpg"`}
                srcSet={`/portfolio/mobile/image-portfolio-${name}@2x.jpg 2x"`}
                alt="Portfolio Image"
                fill
                />
        </picture>
    </div>
    )
}