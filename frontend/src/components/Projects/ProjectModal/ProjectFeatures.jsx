
/**
 * @file ProjectFeatures.jsx
 * @author Brendan Dileo, July 2025
 * 
 * Project features component with animated feature list
 */

import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { featureVariants } from "../../../utils/variants/projects";

const ProjectFeatures = ({ project }) => {

    // Check to make sure project has features defined
    if (!project.features || project.features.length === 0) {
        return null;
    }

    return (
        <div>
            <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
            <div className="space-y-2">
                {/* Map through the project features and render each one for the project */}
                {project.features.map((feature, i) => (
                    
                    // Uses animation for each feature item
                    <motion.div 
                        key={i}
                        custom={i}
                        variants={featureVariants}
                        className="flex items-center gap-3 text-gray-300"
                    >
                        <FaCheckCircle className="text-[#00ff00] flex-shrink-0" size={16} />
                        <span>{feature}</span>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ProjectFeatures;
