
/**
 * @file Terminal.jsx
 * @author Brendan Dileo
 * 
 * This terminal component acts as the main interactive component for my portfolio-website.
 * It mimics the behaviour of a real terminal in linux or macOS enviroments, allowing users to enter
 * predefined commands and receive a relevant response. The terminal will support basic commands like
 * 'help', or 'home'. Additionally it makes use of the Framer Motion library for fade in effects and
 * animations when the page first loads.
 * 
 * Inspired by https://github.com/jonmbake/react-terminal-ui, but built my own with custom behaviour and styles.
*/


import { useState } from "react";
import { motion } from "framer-motion";

/**
 * Terminal Functional Component
 * 
 * This component renders and simulates a terminal onto the home page of the portfolio-website. 
 * It makes use of Reacts 'useState' hook to manage two states, the terminals next output, and
 * the users command. The terminal will support very basic commands and update dynamically based
 * on user input. 
 * 
 * @returns {JSX.Element} - The JSX structure making the Terminal component.
 */
const Terminal = () => {
    {/* Array of JSX elements which is the default output shown by the terminal */}
    const defaultOutput = [
        <div key="1" className="flex">
            <span className="mr-2">
                <span className="text-[#00ff00]">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white">Welcome to Brendan's Terminal!</span>
        </div>,
        <div key="2" className="flex">
            <span className="mr-2">
                <span className="text-[#00ff00]">brendan@portfolio</span>
                <span className="text-white">:</span>
                <span className="text-blue-400">~</span>
                <span className="text-white">$</span>
            </span>
            <span className="text-white">Type a command to start. Ex: 'help' or 'home'</span>
        </div>
    ];

    // State var and fucntion to manage the terminals output
    const [output, setOutput] = useState(defaultOutput);

    // Manages the command state based on user input
    const [command, setCommand] = useState("");

    /**
     * Function that is executed when the user submits a command into the terminal.
     * 
     * It generates the terminals response depending on what the user has entered.
     * The response is determined using a switch case, checking if the command is 
     * valid or not. If the command is valid, a predefined response is set as the
     * output, otherwise a generic response is set as the output.
     *
     * @param {Event} event - The submisson of a command into the terminal.
     * @returns {void} - Does not return anything, updates the state of the component.
     */
    const handleCommandSubmission = (event) => {
        event.preventDefault();

        // First the terminal will show the users command simulating a terminal enviroment
        const newCommandOutput = (
            <div className="flex">
                <span className="mr-2">
                    <span className="text-[#00ff00]">brendan@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                </span>
                <span className="text-white">{command}</span>
            </div>
        );

        // Response displayed by the terminal based on the user input
        let response = "";
        switch (command.toLowerCase()) {
            case "help":
                response = <div className="flex">
                                <span className="text-white">
                                    Oh no! You need help?! Have you tried the Tooltip in your bottom left?
                                    <br />
                                    Anyways, here is a list of supported commands: 
                                    <br />
                                        'help' - Ask for help
                                        <br />
                                        'home' - Are you home?
                                        <br />
                                        'about' - About the creator
                                        <br /> 
                                        'projects' - About the creators projects 
                                        <br />
                                        'contatct' - Can you contact the creator?
                                        <br />
                                        'clear' - Clear the terminal 
                                        <br />
                                </span>
                            </div>;
                break;
            case "home":
                response = <div className="flex"><span className="text-white">You are Home!</span></div>;
                break;
            case "about":
                response = <div className="flex">
                                <span className="text-white">
                                    Hey! My name is Brendan and Im an aspiring Full Stack Software Developer passionate about technology and creating!
                                    If youd like to know even more about me, click the '[about]' in the top right corner of the page.
                                </span>
                            </div>;
                break;
            case "projects":
                response = <div className="flex">
                                <span className="text-white">
                                    I have worked on various types of projects, whether it be academically or for my own personal benefit.
                                    I have used a variety of languages, on front end, back end, and database development. 
                                    If you want to know more about projects I have worked on, checkout the projects page!
                                </span>
                            </div>
                break;
            case "contact":
                response = <div className="flex">
                                <span className="text-white">
                                    Email: brendan.dileo@mohawkcollege.ca
                                    See the 'Contact' page to contact me.
                                </span>
                            </div>
                break;
            case "clear":
                // Clears the terminal output
                setOutput([]);
                // Clears the input
                setCommand("");
                return;
            case "greet":
                response = <div className="flex"><span className="text-white">Hello, welcome to Brendans Portfolio Website!</span></div>
                break;
            default:
                response = <div className="flex"><span className="text-white">
                                Uhhh... I dont know how to respond to that. Try 'help'.
                                </span>
                            </div>;
        }

        // Appends the command entered and the response to that command
        // to the current output state
        setOutput([...output, newCommandOutput, response]);
        // Clears input
        setCommand("");
    };

    return (
        // Framer motion animation to fade in and up when the terminal is rendered
        <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }}  
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="w-3/5 h-[600px] bg-black rounded-lg shadow-lg flex flex-col border border-gray-700 overflow-hidden font-mono"
        >
            <div className="h-8 bg-gray-800 flex items-center justify-center relative text-white text-sm font-bold">
                <div className="absolute left-4 flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-center w-full">brendans@website-terminal: ~</span>
            </div>
            <div className="flex-1 p-3 text-white overflow-y-auto">{output}</div>
            {/* Calls the 'handleCommandSubmisson' function to handle the command entered */}
            <form className="flex p-3 border-t border-gray-700" onSubmit={handleCommandSubmission}>
                <span className="mr-2">
                    <span className="text-[#00ff00]">brendan@portfolio</span>
                    <span className="text-white">:</span>
                    <span className="text-blue-400">~</span>
                    <span className="text-white">$</span>
                </span>
                {/* Updates and stores the command entered into the state var */}
                <input
                    className="flex-1 bg-transparent border-none text-white text-lg focus:outline-none"
                    type="text"
                    value={command}
                    onChange={(event) => setCommand(event.target.value)}
                />
            </form>
        </motion.div>
    );
};

// Exports the Terminal component so it can be used
// in the home page
export default Terminal;
