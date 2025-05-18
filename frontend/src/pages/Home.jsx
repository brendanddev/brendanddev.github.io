
/**
 * @file Home.jsx
 * @author Brendan Dileo 
 * 
 * The home page to my portfolio-website
*/

import HelpTooltip from "../components/HelpTooltip";
import Terminal from '../components/Terminal';
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import { useTheme } from "../context/ThemeContext";
import { motion } from "framer-motion";

const Home = () => {
    const { isDarkMode } = useTheme();
    
    return (
        <motion.div 
            initial={false}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className={`w-full min-h-screen ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
            } flex flex-col items-center transition-colors duration-300`}
            style={{
                backgroundColor: isDarkMode ? '#111827' : '#f9fafb'
            }}
        >
            <ThemeToggle />
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="w-full max-w-7xl mx-auto px-4"
            >
                <Header 
                    title="Brendan Dileo" 
                    subtitle="Software Developer | Tech Enthusiast"
                    typedTexts={[
                        "Welcome to my portfolio-website!", 
                        "Want to know more about me? Enter a command into the terminal!",
                        "I am passionate about technology, coding, and solving complex problems."
                    ]}
                />
            </motion.div>
            <motion.div 
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-full flex justify-center px-4"
            >
                <Terminal />
            </motion.div>
            <HelpTooltip />
            <Sidebar />
        </motion.div>
    );
};

export default Home;