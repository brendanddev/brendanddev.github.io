
/**
 * @file Projects.jsx
 * @author Brendan Dileo 
 * 
 * The projects page for my portfolio-website
*/

import { motion } from "framer-motion";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { projectData } from "../projectData";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
    const { isDarkMode } = useTheme();

    return (
        <motion.div 
            initial={false} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }} 
            className={`w-full min-h-screen flex flex-col items-center relative ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}
        >
            <ThemeToggle />
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
                className="w-full"
            >
                <Header 
                    title="My Projects" 
                    subtitle="A showcase of my work and passion projects."
                    typedTexts={[
                        "From web applications to game development",
                        "Exploring various technologies and frameworks",
                        "Building solutions to real-world problems"
                    ]}
                />
            </motion.div>

            <motion.div 
                className="w-full max-w-7xl px-4 md:px-6 lg:px-8 py-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {projectData.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`group relative flex flex-col h-full overflow-hidden rounded-xl ${
                                isDarkMode ? 'bg-gray-800 hover:bg-gray-750' : 'bg-white hover:bg-gray-50'
                            } shadow-lg transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-[#00ffcc]/20`}
                        >
                            {/* Project Header */}
                            <div className="p-6 border-b border-gray-700/50">
                                <h3 className="text-xl font-bold text-[#00ffcc] mb-3">{project.title}</h3>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                                    {project.desc}
                                </p>
                            </div>

                            {/* Tech Stack */}
                            <div className="p-6 flex-grow">
                                <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.icons.map((icon, i) => (
                                        <i 
                                            key={i}
                                            className={`${icon} text-2xl transition-transform duration-300 hover:scale-110 ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}
                                        />
                                    ))}
                                    {project.extraIcon}
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex justify-between items-center">
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ffcc] text-black rounded-lg font-medium transition-all duration-300 hover:bg-[#00e6b8] hover:shadow-lg hover:scale-105"
                                    >
                                        <FaGithub className="text-lg" />
                                        View Project
                                    </a>
                                    <a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-[#00ffcc] transition-colors duration-300 hover:scale-110`}
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                    </a>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-[#00ffcc] opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Projects;
