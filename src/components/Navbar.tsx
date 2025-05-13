import { cn } from "@/lib/utils";


import { useEffect, useState } from "react";

const NavItems = [
        {name: "Home", href: "#hero"},
        {name: "About", href: "#about"},
        {name: "Skills", href: "#skills"},
        {name: "Projects", href: "#projects"},
        {name : "Contact", href: "#contact"},
]


export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          setIsScrolled(window.scrollY > 10);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? " py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5")}>
            <div className ="container flex items-center justify-between ">
                <a className= "text-xl font-bold text-primary flex items-center" href = "#hero">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Rukundo</span>Portfolio
                    </span>
                </a>
                <div className ="hideen md:flex space-x-8">
                    {NavItems.map((item,key) => (
                        <a key={item.name} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                            {item.name}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    )
}