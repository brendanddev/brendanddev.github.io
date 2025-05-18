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
import { FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";

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
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 via-transparent to-[#00ffcc]/5 pointer-events-none" />
            
            <ThemeToggle />
            <motion.div 
                initial={{ y: -20, opacity: 0 }} 
                animate={{ y: 0, opacity: 1 }} 
                transition={{ duration: 1 }}
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
                className="w-full max-w-7xl px-4 md:px-6 lg:px-8"
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
                            className={`group relative overflow-hidden rounded-xl ${isDarkMode ? 'bg-gray-800/80 backdrop-blur-sm' : 'bg-white/80 backdrop-blur-sm'} 
                                      shadow-lg transition-all duration-300 hover:shadow-2xl hover:shadow-[#00ffcc]/20
                                      border border-transparent hover:border-[#00ffcc]/20`}
                        >
                            {/* Project Header */}
                            <div className="p-6 border-b border-gray-700/50">
                                <div className="flex items-center gap-3 mb-3">
                                    <FaCode className="text-[#00ffcc] text-xl" />
                                    <h3 className="text-xl font-bold bg-gradient-to-r from-[#00ffcc] to-[#00e6b8] bg-clip-text text-transparent">
                                        {project.title}
                                    </h3>
                                </div>
                                <p className="text-sm text-gray-400 leading-relaxed">{project.desc}</p>
                            </div>

                            {/* Tech Stack */}
                            <div className="p-6">
                                <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-[#00ffcc] rounded-full"></span>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-4">
                                    {project.icons.map((icon, i) => (
                                        <motion.i 
                                            key={i}
                                            className={`${icon} text-2xl transition-all duration-300 hover:scale-110 hover:text-[#00ffcc]`}
                                            whileHover={{ rotate: 5 }}
                                        />
                                    ))}
                                    {project.extraIcon}
                                </div>
                            </div>

                            {/* Project Links */}
                            <div className="p-6 pt-0 flex justify-between items-center">
                                <motion.a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#00ffcc] to-[#00e6b8] text-black rounded-lg font-medium 
                                             transition-all duration-300 hover:shadow-lg hover:shadow-[#00ffcc]/20 hover:scale-105"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <FaGithub className="text-lg" />
                                    View Project
                                </motion.a>
                                <motion.a 
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-[#00ffcc] transition-colors duration-300"
                                    whileHover={{ rotate: 15 }}
                                >
                                    <FaExternalLinkAlt className="text-lg" />
                                </motion.a>
                            </div>

                            {/* Hover Effects */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/0 via-[#00ffcc]/0 to-[#00ffcc]/0 
                                          group-hover:from-[#00ffcc]/5 group-hover:via-[#00ffcc]/10 group-hover:to-[#00ffcc]/5 
                                          transition-all duration-500" />
                            
                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-[#00ffcc]/10 to-transparent opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#00ffcc]/10 to-transparent opacity-0 
                                          group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Projects;
