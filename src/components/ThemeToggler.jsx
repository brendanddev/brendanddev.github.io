
// ThemeToggler.jsx
// Brendan Dileo
// To change from dark and light theme on webpage

import { Sun } from "lucide-react";

const ThemeToggler = () => {
    return (
        <button className="fixed bottom-4 left-20 p-2 rounded-full bg-gray-300 dark:bg-gray-800 text-gray-900 dark:text-white">
            <Sun size={24} />
        </button>
    )
}

export default ThemeToggler;