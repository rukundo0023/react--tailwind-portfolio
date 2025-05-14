import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NavItems = [
    {name: "Home", href: "#hero"},
    {name: "About", href: "#about"},
    {name: "Skills", href: "#skills"},
    {name: "Projects", href: "#projects"},
    {name: "Contact", href: "#contact"},
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )} role="navigation" aria-label="Main navigation">
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center" href="#hero" aria-label="Go to home section">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Rukundo</span>Portfolio
                    </span>
                </a>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-8">
                    {NavItems.map((item) => (
                        <a 
                            key={item.name} 
                            href={item.href} 
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                            aria-label={`Go to ${item.name} section`}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Mobile Menu Button */}
                <button 
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-expanded={isMobileMenuOpen}
                    aria-label="Toggle mobile menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md shadow-lg">
                    <div className="container py-4 flex flex-col space-y-4">
                        {NavItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="text-foreground/80 hover:text-primary transition-colors duration-300 px-4 py-2"
                                onClick={() => setIsMobileMenuOpen(false)}
                                aria-label={`Go to ${item.name} section`}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}