import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
    {name: "python", level: 90, category: "Frontend"},
    {name: "Html/Css", level: 90, category: "Frontend"},
    {name: "Javascript", level: 80, category: "Frontend"},
    {name: "Typescript", level: 80, category: "Frontend"},
    {name: "React", level: 80, category: "Frontend"},
    {name: "Nextjs", level: 80, category: "Frontend"},
    {name: "Tailwind", level: 80, category: "Frontend"},
    {name: "Nodejs", level: 80, category: "Backend"},
    {name: "Express", level: 80, category: "Backend"},
    {name: "MongoDB", level: 80, category: "Backend"},
    {name: "Git/github", level: 80, category: "Tools"},
    {name: "Docker", level: 80, category: "Tools"},
    {name: "vs code", level: 80, category: "Tools"},
];

const categories = ["all", "Frontend", "Backend", "Tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => 
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30" aria-label="Skills section">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>
                
                <div className="flex flex-wrap justify-center gap-4 mb-12" role="tablist">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground" 
                                    : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                            role="tab"
                            aria-selected={activeCategory === category}
                            aria-controls={`${category}-panel`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill) => (
                        <div 
                            key={skill.name}
                            className="bg-card p-6 rounded-lg shadow-xs card-hover"
                            role="tabpanel"
                            id={`${skill.category}-panel`}
                            aria-label={`${skill.name} skill level`}
                        >
                            <div className="text-left mb-4">
                                <h3 className="text-lg font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div 
                                    className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out"
                                    style={{
                                        width: `${skill.level}%`,
                                        transform: 'translateX(0)',
                                        opacity: 1,
                                    }}
                                />
                            </div>
                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};