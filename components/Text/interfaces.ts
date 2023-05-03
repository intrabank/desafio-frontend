import { ReactNode } from "react"

export interface TitleProps {
    children: ReactNode
}

export interface MediumTitleProps extends TitleProps {
}

export interface ParagraphProps extends TitleProps {
    size?: number
}