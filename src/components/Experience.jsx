import React from "react";
import { motion } from "framer-motion";

import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.7)}
            className="relative pl-12 sm:pl-16 pb-10 last:pb-0"
        >
            {/* Timeline line */}
            {index < experiences.length - 1 && (
                <div className="absolute left-[19px] sm:left-[23px] top-[40px] bottom-0 w-[2px] bg-gradient-to-b from-accent/30 to-transparent" />
            )}

            {/* Timeline dot */}
            <div className="absolute left-[14px] sm:left-[18px] top-[24px] w-3 h-3 rounded-full bg-accent border-[3px] border-primary shadow-[0_0_10px_rgba(59,130,246,0.4)]" />

            {/* Card */}
            <div className="glass-card p-6 sm:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-4">
                    <div>
                        <h3 className="text-text-primary text-[18px] sm:text-[20px] font-semibold">
                            {experience.title}
                        </h3>
                        <p className="text-accent text-[14px] font-medium mt-0.5">
                            {experience.company_name}
                        </p>
                    </div>
                    <span className="text-text-muted text-[13px] font-medium whitespace-nowrap">
                        {experience.date}
                    </span>
                </div>

                <ul className="space-y-2.5">
                    {experience.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-text-secondary text-[14px] leading-relaxed">
                            <span className="mt-2 w-1 h-1 rounded-full bg-text-muted flex-shrink-0" />
                            <span>{point}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">What I've done</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Experience<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <div className="mt-12 relative">
                {experiences.map((experience, index) => (
                    <ExperienceCard
                        key={`experience-${index}`}
                        experience={experience}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
