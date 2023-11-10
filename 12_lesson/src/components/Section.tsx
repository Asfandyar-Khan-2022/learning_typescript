import { ReactNode } from "react"

type SectionProps = {
    title?: string,
    children: ReactNode
}

export const Section = ({ children, title = "My Subheading" }: SectionProps) => {
    return (
        <section>
            <h2>{title}</h2>
            <h1>{children}</h1>
        </section>
    )
}
