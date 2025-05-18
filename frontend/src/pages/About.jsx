
/**
 * @file About.jsx
 * @author Brendan Dileo
 * 
 * The About page for my portfolio-website
*/

import Sidebar from "../components/Sidebar";
import { GraduationCap, FileText } from "lucide-react";
import Header from "../components/Header";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";

const About = () => {
  const { isDarkMode } = useTheme();
  
  return (
    <motion.div 
      initial={false}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={`relative w-full min-h-screen flex flex-col items-center ${
        isDarkMode 
            ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
            : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
      } text-white transition-colors duration-300`}
      style={{
        backgroundColor: isDarkMode ? '#111827' : '#f9fafb'
      }}
    >
      <div className="fixed top-4 right-4 z-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`p-2 rounded-xl backdrop-blur-md ${
            isDarkMode 
              ? 'bg-gray-800/50 border border-gray-700/50' 
              : 'bg-white/50 border border-gray-200/50'
          } shadow-lg`}
        >
          <ThemeToggle />
        </motion.div>
      </div>

      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 w-full max-w-5xl text-center"
      >
        <Header 
            title="About Me" 
            subtitle="Who am I? Here's a bit about me."
        />
        
        <motion.a
          href="/about.txt"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 mt-6 mb-6 text-lg font-semibold text-black bg-[#00ffcc] rounded-full shadow-[0_0_10px_#00ffcc] hover:bg-[#00e6b8] hover:shadow-[0_0_20px_#00ffcc] transition duration-300"
        >
          Read My Story
        </motion.a>
      </motion.div>

      <section className="w-full mb-12 px-4">
        <motion.div
          className="w-full max-w-4xl mx-auto p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm"
          initial={{ opacity: 0, x: 500 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          style={{
            background: isDarkMode 
                ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
          }}
        >
          <h2 className="text-4xl font-bold flex items-center justify-center gap-2 text-[#00ffcc]">
            <GraduationCap size={28} /> Education
          </h2>

          <div className="text-center mt-6">
            <p className="text-lg font-semibold italic text-white">
              Advanced Ontario Diploma in Software Development
            </p>
            <p className="text-gray-400 italic">Mohawk College | Expected Graduation: May 2026</p>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
              className="p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
              style={{
                background: isDarkMode 
                    ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
              }}
            >
              <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">Achievements</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li><span className="font-bold">GPA:</span> 93.5</li>
                <li><span className="font-bold">99%</span> in Programming in Java</li>
                <li><span className="font-bold">99%</span> in Mobile Web Programming</li>
                <li><span className="font-bold">100%</span> in Systems Analysis & Design</li>
                <li><span className="font-bold">96%</span> in Programming in C#.NET</li>
              </ul>
            </motion.div>

            <motion.div 
              whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
              className="p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
              style={{
                background: isDarkMode 
                    ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                    : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
              }}
            >
              <h3 className="text-xl font-semibold text-[#00ffcc] mb-4">Honors & Awards</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Dean's Honors List (Every Semester: 2023 & 2024)</li>
                <li>Ontario Scholar Award (2021)</li>
                <li>TA Blakelock Honor Roll</li>
                <li>TA Blakelock Tiger Award</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </section>

      <motion.div
        className="w-full max-w-4xl mx-auto p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm mb-10"
        initial={{ opacity: 0, x: -500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{
          background: isDarkMode 
              ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
        }}
      >
        <h2 className="text-4xl sm:text-3xl font-bold text-center mb-8 text-[#00ffcc]">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            className="p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
            style={{
              background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-6">Programming Languages</h3>
            <div className="flex justify-center flex-wrap gap-6 md:gap-8">
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-java-plain text-4xl md:text-5xl hover:text-[#ff9900] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-python-plain text-4xl md:text-5xl hover:text-[#306998] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-csharp-plain text-4xl md:text-5xl hover:text-[#9b4f96] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-dot-net-plain text-4xl md:text-5xl hover:text-[#512bd4] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-php-plain text-4xl md:text-5xl hover:text-[#777bb3] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-swift-plain text-4xl md:text-5xl hover:text-[#fa7343] transition-colors" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            className="p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
            style={{
              background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-6">Web Development & Frameworks</h3>
            <div className="flex justify-center flex-wrap gap-6 md:gap-8">
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-javascript-plain text-4xl md:text-5xl hover:text-[#f7df1e] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-typescript-plain text-4xl md:text-5xl hover:text-[#007acc] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-react-original text-4xl md:text-5xl hover:text-[#61dafb] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-nodejs-plain-wordmark text-4xl md:text-5xl hover:text-[#68a063] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-tailwindcss-original text-4xl md:text-5xl hover:text-[#38b2ac] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-bootstrap-plain text-4xl md:text-5xl hover:text-[#563d7c] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-html5-plain text-4xl md:text-5xl hover:text-[#e34c26] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-css3-plain text-4xl md:text-5xl hover:text-[#1572b6] transition-colors" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            className="p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
            style={{
              background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-6">Databases & Game Dev</h3>
            <div className="flex justify-center flex-wrap gap-6 md:gap-8">
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-microsoftsqlserver-plain text-4xl md:text-5xl hover:text-[#cc2927] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-mysql-plain text-4xl md:text-5xl hover:text-[#00758f] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-bash-plain text-4xl md:text-5xl hover:text-[#4eaa25] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-unity-plain text-4xl md:text-5xl hover:text-[#ffffff] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-godot-plain text-4xl md:text-5xl hover:text-[#478cbf] transition-colors" />
            </div>
          </motion.div>

          <motion.div 
            whileHover={{ scale: 1.02, rotateX: 2, rotateY: 2 }}
            className="col-span-1 sm:col-span-2 lg:col-span-3 p-6 rounded-xl shadow-lg backdrop-blur-sm border border-[#00ffcc]/20 transition-all duration-300"
            style={{
              background: isDarkMode 
                  ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                  : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
            }}
          >
            <h3 className="text-xl md:text-2xl font-semibold text-[#00ffcc] mb-6">Tools & Software</h3>
            <div className="flex justify-center flex-wrap gap-6 md:gap-8">
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-git-plain text-4xl md:text-5xl hover:text-[#f34f29] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-vscode-plain text-4xl md:text-5xl hover:text-[#007acc] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-pycharm-plain text-4xl md:text-5xl hover:text-[#21d789] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-json-plain text-4xl md:text-5xl hover:text-[#f7df1e] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-intellij-plain text-4xl md:text-5xl hover:text-[#000000] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-gimp-plain text-4xl md:text-5xl hover:text-[#5c5543] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-xcode-plain text-4xl md:text-5xl hover:text-[#1575f3] transition-colors" />
              <motion.i whileHover={{ scale: 1.2, rotate: 5 }} className="devicon-linux-plain text-4xl md:text-5xl hover:text-[#fcc624] transition-colors" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    
      <motion.div
        className="w-full max-w-4xl mx-auto p-6 md:p-8 rounded-2xl shadow-lg backdrop-blur-sm mb-10 border border-[#00ffcc]/30 hover:border-[#00ffcc]/50 transition-all duration-300"
        initial={{ opacity: 0, x: 500 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        style={{
          background: isDarkMode 
              ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.9), rgba(17, 24, 39, 0.9))'
              : 'linear-gradient(145deg, rgba(255, 255, 255, 0.9), rgba(249, 250, 251, 0.9))'
        }}
      >
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold text-[#00ffcc] flex items-center justify-center gap-2">
            <FileText size={28} /> Resume
          </h2>

          <p className="text-lg mt-4 text-gray-300">Click below to download my resume.</p>
          <motion.a
            href="/BrendanDileo_Resume.pdf"
            download="BrendanDileo_Resume.pdf"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 inline-block px-8 py-4 text-lg font-semibold text-black bg-[#00ffcc] rounded-lg 
                      transition-all duration-300 ease-in-out
                      hover:bg-[#00ddaa] hover:shadow-[0_0_25px_rgba(0,255,204,0.6)]
                      border border-[#00ffcc]/50 hover:border-[#00ffcc]"
          >
            Download Resume
          </motion.a>
        </div>
      </motion.div>
      <Sidebar />
    </motion.div>
  );
};

export default About;
