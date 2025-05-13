import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & Tech Creator</h3>
                        <p className="text-muted-foreground">
                            With over 2 years of experience, I have honed my skills in creating dynamic and engaging web experiences. My expertise lies in crafting intuitive interfaces, optimizing performance, and ensuring accessibility.
                        </p>

                        <p className="text-muted-foreground">
                            I am passionate about creating elegant solutions to complex problems, and I am constantly learning new technologies to stay ahead of the curve.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center sm:justify-start">
                            <a href="#contact" className="cosmic-button bg-amber-50 text-black">
                                Get in touch
                            </a>
                            <a href="#" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 self-start">
                        <div className="border-2 p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Code className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Front-End Development</h4>
                                    <p className="text-muted-foreground">
                                        I specialize in building responsive and user-friendly interfaces using modern web technologies.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <User className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">UI/UX Design</h4>
                                    <p className="text-muted-foreground">
                                        I focus on designing intuitive and accessible user experiences for all platforms.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="border-2 p-6 card-hover">
                            <div className="flex items-center gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="text-lg font-semibold">Project Experience</h4>
                                    <p className="text-muted-foreground">
                                        I've collaborated on real-world projects, delivering clean and efficient solutions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;