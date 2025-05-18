
/**
 * @file Contact.jsx
 * @author Brendan Dileo
 * 
 * The Contact page for the portfolio website, allowing users to contact me.
*/

import Header from '../components/Header';
import Sidebar from "../components/Sidebar";
import { motion } from "framer-motion"
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "../components/ThemeToggle";
import { submitContactForm } from '../api/contact';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        comment: '',
    });

    const [status, setStatus] = useState(null);
    const { isDarkMode } = useTheme();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await submitContactForm(formData);
            console.log('Submission Success: ', response);
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', comment: '' });
        } catch (error) {
            console.error('Submission Failed: ', error);
            setStatus('error');
        }
    };

    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`w-full min-h-screen flex flex-col items-center ${
                isDarkMode 
                    ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
                    : 'bg-gradient-to-br from-gray-50 via-white to-gray-50'
            } transition-colors duration-300`}
        >
            <ThemeToggle />
            <motion.div 
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="w-full max-w-5xl text-center"
            >
                <Header 
                    title="Contact Me" 
                    subtitle="Let's get in touch!"
                    typedTexts={[
                        "I would love to hear from you!", 
                        "Feel free to reach out with any questions or comments.",
                        "Your feedback is important to me."
                    ]}
                />
            </motion.div>
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="w-[95%] md:w-4/5 lg:w-3/5 h-[450px] rounded-2xl shadow-lg flex flex-col border border-[#00ffcc]/20 overflow-hidden font-mono mx-auto backdrop-blur-sm"
                style={{
                    background: isDarkMode 
                        ? 'linear-gradient(145deg, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))'
                        : 'linear-gradient(145deg, rgba(255, 255, 255, 0.8), rgba(249, 250, 251, 0.8))'
                }}
            >
                <div className="h-8 bg-[#00ffcc] flex items-center justify-between px-4 text-sm text-black">
                    <span>Contact-Brendan-2</span>
                    <div className="flex gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                </div>

                <div className="flex-1 p-6 overflow-y-auto">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <label htmlFor="name" className="text-sm font-medium text-[#00ffcc]">fullName:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-[#00ffcc]/20 rounded-lg focus:border-[#00ffcc] focus:ring-2 focus:ring-[#00ffcc]/20 outline-none transition-all duration-300"
                                placeholder="Enter your name"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                        >
                            <label htmlFor="email" className="text-sm font-medium text-[#00ffcc]">emailAddress:</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-[#00ffcc]/20 rounded-lg focus:border-[#00ffcc] focus:ring-2 focus:ring-[#00ffcc]/20 outline-none transition-all duration-300"
                                placeholder="Enter your email"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <label htmlFor="comment" className="text-sm font-medium text-[#00ffcc]">extraComment:</label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                className="w-full p-3 mt-2 bg-gray-800/50 text-white border border-[#00ffcc]/20 rounded-lg focus:border-[#00ffcc] focus:ring-2 focus:ring-[#00ffcc]/20 outline-none transition-all duration-300"
                                rows="4"
                                placeholder="Type your comment"
                            />
                        </motion.div>

                        <motion.div 
                            className="flex justify-center"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            <button
                                type="submit"
                                className="bg-[#00ffcc] text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-[#00e6b8] hover:shadow-lg hover:scale-105 active:scale-95"
                            >
                                submitForm
                            </button>
                        </motion.div>

                        {status === 'success' && (
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-[#00ffcc] mt-4 text-center font-medium"
                            >
                                Thank You! Your message has been sent!
                            </motion.p>
                        )}
                        {status === 'error' && (
                            <motion.p 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-red-400 mt-4 text-center font-medium"
                            >
                                Oops! Something went wrong. Please try again.
                            </motion.p>
                        )}
                    </form>
                </div>
            </motion.div>
            <Sidebar />
        </motion.div>
    );
};

export default Contact;
