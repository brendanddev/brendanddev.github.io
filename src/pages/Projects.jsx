
// Projects.jsx
// Brendan Dileo

import { motion } from "framer-motion";
import { SquareTerminal, Database, PaintBucket, MessageCircle, Bot, Boxes, ScrollText } from "lucide-react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const projects = [
    {
        title: "User Management System",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
        icons: ["devicon-php-plain", "devicon-javascript-plain"],
        extraIcon: <Database size={28} />,
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System"
    },
    {
        title: "Black Ops 3 Mod Menu",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Allows various gameplay customizations.",
        icons: ["devicon-cplusplus-plain"],
        extraIcon: (
            <div style={{ display: "flex", gap: "5px", alignItems: "center" }}>
                <SquareTerminal size={28} />
                <ScrollText size={28} />
            </div>
        ),
    },
    {
        title: "Tadpole Mania",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
        icons: ["devicon-csharp-plain", "devicon-unity-plain", "devicon-godot-plain"]
    },
    {
        title: "Black Ops 1 Camo Pack",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
        icons: ["devicon-photoshop-plain", "devicon-gimp-plain"],
        extraIcon: <PaintBucket size={28} />,
    },
    {
        title: "FAQ Discord Chat Bot",
        desc: "An intelligent FAQ Discord bot that responds to user queries using fuzzy matching and heuristic techniques.",
        icons: ["devicon-python-plain"],
        extraIcon: (
            <MessageCircle size={28} />,
            <Bot size={28} />
        )
    },
    {
        title: "Minecraft Sword Mod",
        desc: "A custom Minecraft mod in Java using the Forge Modding API. Adds a unique sword with abilities, new weapon mechanics, and item registration.",
        icons: ["devicon-java-plain", "devicon-json-plain"],
        extraIcon: <Boxes size={28} />
    }
];

const Projects = () => {
    return (
        <motion.div 
            initial={false} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className="w-full min-h-screen bg-gray-900 flex flex-col items-center relative opacity-0"
        >
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
            >
                <Header title="My Projects" subtitle="A collection of my work and passion projects." />
            </motion.div>

            <motion.section 
                initial={{ y: 20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1, delay: 0.2 }} 
                className="w-2/4 mb-12"
            >
                <p className="bg-black text-sm text-green-400 p-4 rounded-md shadow-lg font-mono overflow-x-auto">
                    {`Over the last few years I have worked on several different projects, between assignments
                    for school, personal projects to help my learning, or passion projects. Below are a few
                    with brief descriptions of the projects, the tech stack used, and a link to the project.`}
                </p>
            </motion.section>

            <motion.div className="grid md:grid-cols-3 gap-6 p-6">
                {projects.map((project, index) => (
                    <motion.div 
                        key={index}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5, delay: index * 0.2 }}
                        className="w-96 min-h-[250px] bg-black border border-green-500 rounded-lg shadow-sm"
                    >
                        <div className="p-6">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-green-400">{project.title}</h5>
                            <p className="mb-4 text-sm font-normal text-gray-400">{project.desc}</p>
                            <div className="flex space-x-4 mb-3 text-green-400">
                                {project.icons.map((icon, i) => (
                                    <i key={i} className={`${icon} text-3xl`}></i>
                                ))}
                                {project.extraIcon}
                            </div>
                            <a 
                                target="_blank"
                                rel="noopener noreferrer"
                                href={project.link}
                                className="mt-4 inline-block bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600"
                            >
                                View Project
                            </a>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Projects;
