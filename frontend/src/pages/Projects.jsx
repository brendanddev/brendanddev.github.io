
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
            className={`w-full min-h-screen flex flex-col items-center relative ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
            } transition-colors duration-300`}
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                    {projectData.map((project, index) => (
                        <motion.div 
                            key={index}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ 
                                scale: 1.02,
                                rotateX: 2,
                                rotateY: 2,
                                transition: { duration: 0.2 }
                            }}
                            className={`group relative flex flex-col h-full overflow-hidden rounded-2xl ${
                                isDarkMode 
                                    ? 'bg-gray-800/80 backdrop-blur-sm hover:bg-gray-750' 
                                    : 'bg-white/80 backdrop-blur-sm hover:bg-gray-50'
                            } shadow-lg transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-[#00ffcc]/20`}
                        >
                            <div className="p-6 border-b border-gray-700/50">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-[#00ffcc] mb-3">{project.title}</h3>
                                    {project.category && (
                                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                            isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            {project.category}
                                        </span>
                                    )}
                                </div>
                                <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} line-clamp-3`}>
                                    {project.desc}
                                </p>
                            </div>

                            <div className="p-6 flex-grow">
                                <h4 className={`text-sm font-semibold ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4 flex items-center gap-2`}>
                                    <span className="w-1 h-4 bg-[#00ffcc] rounded-full"></span>
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-4 items-center">
                                    {project.icons.map((icon, i) => (
                                        <motion.i 
                                            key={i}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            className={`${icon} text-2xl transition-all duration-300 ${
                                                isDarkMode ? 'text-gray-400' : 'text-gray-600'
                                            }`}
                                        />
                                    ))}
                                    {project.extraIcon}
                                </div>
                            </div>

                            <div className="p-6 pt-0 mt-auto">
                                <div className="flex justify-between items-center">
                                    <motion.a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-[#00ffcc] text-black rounded-lg font-medium transition-all duration-300 hover:bg-[#00e6b8] hover:shadow-lg"
                                    >
                                        <FaGithub className="text-lg" />
                                        View Project
                                    </motion.a>
                                    <motion.a 
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, rotate: 5 }}
                                        className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} hover:text-[#00ffcc] transition-colors duration-300`}
                                    >
                                        <FaExternalLinkAlt className="text-lg" />
                                    </motion.a>
                                </div>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-br from-[#00ffcc]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    ))}
                </div>
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Projects;
