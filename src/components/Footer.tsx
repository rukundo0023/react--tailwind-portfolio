import { ArrowUp } from "lucide-react"


export const Footer = () => {
    return <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
        <p className=" text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Rukundo.co. all rights reserved</p>
        <a href ="#hero" className = "p-2 rounded-full bg-primary hover:bg-primary/80 transition-colors duration-300">
            <ArrowUp />
        </a>
    </footer>
}