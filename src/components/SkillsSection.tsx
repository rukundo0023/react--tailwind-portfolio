import { useState } from "react";
import { cn } from "@/lib/utils";

const skills =[
    {name: "Html/Css", level: 90, catergory : "Frontend"},
    {name: "Javascript", level: 80, catergory : "Frontend"},
    {name: "Typescript", level: 80, catergory : "Frontend"},
    {name: "React", level: 80, catergory : "Frontend"},
    {name: "Nextjs", level: 80, catergory : "Frontend"},
    {name: "Tailwind", level: 80, catergory : "Frontend"},
    {name: "Nodejs", level: 80, catergory : "Backend"},
    {name: "Express", level: 80, catergory : "Backend"},
    {name: "MongoDB", level: 80, catergory : "Backend"},
    {name: "Git/github", level: 80, catergory : "Tools"},
    {name: "Docker", level: 80, catergory : "Tools"},
    {name: "vs code", level: 80, catergory : "Tools"},]

    const categories = ["all","Frontend","Backend","Tools"]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.catergory === activeCategory);
    return <section id = "skills" className = "py-24 px-4 relative bg-secondary/30">
        <div className ="container mx-auto max-w-5xl">
            <h2 className = "text-3xl md:text-4xl font-bold mb-12 text-center">My <span className = "text-primary">Skills</span></h2>
            <div className = "flex flex-wrap justify-center gap-4 mb-12">

                {categories.map((category, key) => (
                    <button key = {key} onClick = {() => setActiveCategory(category)} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize", activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary")}>{category}</button>
                ))} 

            </div>
            <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">

                {filteredSkills.map((skill, key) => (
                    <div key = {key} className = "bg-card p-6 rounded-lg shadow-xs card-hover">
                        <div className = "text-left mb-4 ">
                            <h3 className = "text-lg font-semibold">{skill.name}</h3>
                        </div>
                        <div className ="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                            <div className ="bg-primary h-2 rounded-full orgin-left animate-[grow_1s_ease-in-out]" style={{width: `${skill.level}%`}}/>
                        </div>
                        <div className = "text-right mt-1">
                            <span className = "text-sm text-muted-foreground">{skill.level}</span>
                        <div/>
                        </div>
                    </div>

                ))}

            </div>

        </div>

    </section>
}