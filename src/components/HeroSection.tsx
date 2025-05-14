import profile from "../assets/profile.png";
import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return <section id = "hero" className = " relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className ="container max-w-4xl mx-auto text-center z-10">
            <div className ="space-y-1">
                <h1 className = "text-4xl  md:text-6xl font-bold tracking-tight">
                    <span className = "animate-fade-in ">Hi i'm</span>
                    <span className = "text-primary animate-fade-in-dalay-1 "> Rukundo Nshimiyima</span>
                    <span className = "text-gradient ml-2animate-fade-in-delay-2"></span>
                </h1>
                <img src={profile} alt="Profile" className="w-32 h-32 rounded-full mx-auto mb-4 animate-fade-in-delay-2" />
                <p className = "text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto animate-fade-in-delay-3 ">I create stellar web experiences with modern technologies. Specialising in full-stuck development, i build interfaces that are user-friendly and visually appealing.</p>
                <div className = "pt-4 animate-fade-in-delay-4">
                    <a href = "#projects" className = "cosmic-button bg-amber-50 text-black">View my work</a>
                </div>

            </div>

        </div>
        <div className ="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className = "text-sm text-muted-foreground mb-2 ">scroll</span>
        <ArrowDown className = "h-5 w-5 text-primary"/>

        </div>
    </section>
}