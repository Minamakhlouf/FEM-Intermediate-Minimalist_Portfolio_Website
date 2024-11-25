import styles from "./ProjectDetailImage.module.css"
import Image from "next/image"

export default function ProjectDetailImage({projectName, projectPurpose}) {
    return (
        <picture>
            <source
            srcSet={`/detail/desktop/image-${projectName}-${projectPurpose}.jpg 1x, /detail/desktop/image-${projectName}-${projectPurpose}@2x.jpg 2x`}
            media="(min-width: 1110px)"
            />
            <source
            srcSet={`/detail/tablet/image-${projectName}-${projectPurpose}.jpg 1x, /detail/tablet/image-${projectName}-${projectPurpose}@2x.jpg 2x`}
            media="(max-width: 1110px) and (min-width: 768px)"
            />
            <source
            srcSet={`/detail/mobile/image-${projectName}-${projectPurpose}.jpg 1x, /detail/mobile/image-${projectName}-${projectPurpose}@2x.jpg 2x"`}
            media="(max-width: 768px)"
            />
            <Image
            src={`/detail/mobile/image-${projectName}-${projectPurpose}.jpg`}
            srcSet={`/detail/mobile/image-${projectName}-${projectPurpose}@2x.jpg 2x`}
            alt="Hero Image"
            fill
            />
        </picture>
    )
}