/**
 * @file projectData.jsx
 * @author Brendan Dileo
 * 
 * Exports an array of data containing information about some of my projects
 */

import { Database } from "lucide-react";
import { FaPaintBrush, FaRobot, FaGamepad, FaCode } from "react-icons/fa";
import { PiTerminalWindowDuotone } from "react-icons/pi";

export const projectData = [
    {
        title: "Black Ops 3 Mod Menu",
        desc: "A mod menu for Call of Duty: Black Ops 3, built in GSC (Game Script Code). Allows various gameplay customizations.",
        icons: ["devicon-cplusplus-plain"],
        extraIcon: [
            <PiTerminalWindowDuotone key="terminal" size={24} />,
            <FaGamepad key="gamepad" size={24} />
        ],
        link: "https://github.com/brendandddev/Black-Ops-3-GSC-Mod-Menu"
    },
    {
        title: "Multimodal Chatbot",
        desc: "A sophisticated multimodal chatbot system that can process and respond to both text and image inputs using advanced AI models.",
        icons: ["devicon-python-plain", "devicon-tensorflow-plain"],
        extraIcon: <FaRobot size={24} />,
        link: "https://github.com/brendanddev/multimodal-chatbot"
    },
    {
        title: "Gamelog - Video Game Collection App",
        desc: "A full-stack application for managing a video game collection. Built with React Native, Node.js, Express, and SQLite.",
        icons: ["devicon-react-plain", "devicon-nodejs-plain", "devicon-express-original"],
        extraIcon: <Database size={24} />,
        link: "https://github.com/brendanddev/gamelog"
    },
    {
        title: "Tadpole Mania",
        desc: "A 2D side-scrolling game built in Unity using C#. Features sprite animations, collision detection, and scrolling backgrounds.",
        icons: ["devicon-csharp-plain", "devicon-unity-plain", "devicon-godot-plain"],
        extraIcon: <FaGamepad size={24} />,
        link: "https://github.com/brendanddev/Tadpole-Mania-Unity-Game"
    },
    {
        title: "User Management System",
        desc: "A mock user management system featuring authentication and role-based access control. Built with PHP, JavaScript, and MySQL.",
        icons: ["devicon-php-plain", "devicon-javascript-plain"],
        extraIcon: <Database size={24} />,
        link: "https://github.com/brendanddev/Full-Stack-Mock-User-Management-System"
    },
    {
        title: "Black Ops 1 Camo Pack",
        desc: "A custom camo pack for Call of Duty: Black Ops 1, using Photoshop/GIMP and game asset conversion tools.",
        icons: ["devicon-photoshop-plain", "devicon-gimp-plain"],
        extraIcon: <FaPaintBrush size={24} />,
        link: "https://github.com/brendanddev/Black-Ops-1-Camo-Pack"
    }
];

export default projectData;

