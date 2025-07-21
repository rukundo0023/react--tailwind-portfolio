import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "loanapprovalmodel",
        description: "Machine learning model for approving loans",
        image: "/projects/loanapproval.png",
        Tag: "python, machine learning",
        DemoUrl: "https://rukundo0023-loanapprovelmodel-app-pnyhin.streamlit.app/",
        GithubUrl: "https://github.com/rukundo0023/react--tailwind-portfolio",
    },
    {
        id: 2,
        title: "EmpowerherTech",
        description: "A website for learning tech basics for women",
        image: "/projects/empowerher.png",
        Tag: "react, tailwind, typescript",
        DemoUrl: "https://empowerhered-1ixh.vercel.app/",
        GithubUrl: "https://github.com/rukundo0023/empowerhered"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are a few projects I've worked on recently.
                    Each project is a unique opportunity to showcase my skills and creativity.
                    They were created with a focus on user experience and functionality.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card overflow-hidden rounded-lg shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"              
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap mb-4 gap-2">
                                    {project.Tag.split(",").map((Tag, idx) => (
                                        <span key={idx} className="px-2 py-1 text-xs border font-medium rounded-full bg-primary/20 text-primary">
                                            {Tag.trim()}
                                        </span>
                                    ))}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-3">
                                            <a href={project.DemoUrl || project.DemoLink} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <ExternalLink size={20} />
                                            </a>
                                            <a href={project.GithubUrl || project.GithubLink} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                                <Github size={20} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className ="text-center mt-12">
                    <a className = "cosmic-button w-fit flex items-center bg-amber-50 text-black mx-auto gap-2" target = "_blank" href = "https://github.com/rukundo0023">Check My Github<ArrowRight size = {16} /></a>
                </div>
            </div>
        </section>
    );
};
