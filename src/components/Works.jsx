import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, tags, source_code_link, live_demo_link, gradient }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.12, 0.6)}
            className="glow-card group overflow-hidden"
        >
            {/* Top gradient stripe */}
            <div className={`h-1 w-full bg-gradient-to-r ${gradient}`} />

            <div className="p-6 sm:p-7">
                {/* Header: title + links */}
                <div className="flex items-start justify-between gap-4 mb-4">
                    <h3 className="text-text-primary font-semibold text-[18px] leading-snug group-hover:text-accent transition-colors">
                        {name}
                    </h3>
                    <div className="flex gap-2 flex-shrink-0">
                        {source_code_link && (
                            <a
                                href={source_code_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/10 transition-all"
                                title="Source Code"
                            >
                                <FaGithub className="w-4 h-4" />
                            </a>
                        )}
                        {live_demo_link && (
                            <a
                                href={live_demo_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-emerald-500/30 hover:bg-emerald-500/10 transition-all"
                                title="Live Demo"
                            >
                                <FaExternalLinkAlt className="w-3.5 h-3.5" />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-[14px] leading-relaxed mb-5">
                    {description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span
                            key={`${name}-${tag.name}`}
                            className={`text-[12px] font-medium px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] ${tag.color}`}
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">My Work</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Projects<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-text-secondary text-[16px] max-w-2xl leading-relaxed'
            >
                Each project showcases real-world problem solving across full-stack development,
                AI/ML, and cloud-native architectures. Links to code repositories and live demos included.
            </motion.p>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-2 gap-6'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "projects");
