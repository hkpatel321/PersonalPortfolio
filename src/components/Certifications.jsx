import React from "react";
import { motion } from "framer-motion";

import { certifications } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

const colorMap = {
    rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
    blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
    violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
    cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
};

const Certifications = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">Credentials</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Certifications<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-text-secondary text-[16px] max-w-2xl leading-relaxed"
            >
                Professional certifications and credentials that validate my expertise
                across cloud computing, software engineering, and open source contributions.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {certifications.map((cert, index) => {
                    const colors = colorMap[cert.color] || colorMap.blue;
                    const [textColor, bgColor, borderColor] = colors.split(" ");

                    return (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "spring", index * 0.1, 0.6)}
                            className="glow-card p-6 flex flex-col justify-between min-h-[160px]"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-3 mb-3">
                                    <div className={`w-9 h-9 rounded-lg ${bgColor} border ${borderColor} flex items-center justify-center ${textColor} flex-shrink-0`}>
                                        <FaCertificate className="w-4 h-4" />
                                    </div>
                                    {cert.link && (
                                        <a
                                            href={cert.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-text-muted hover:text-accent transition-colors"
                                            title="View Certificate"
                                        >
                                            <FaExternalLinkAlt className="w-3.5 h-3.5" />
                                        </a>
                                    )}
                                </div>
                                <h3 className="text-text-primary text-[15px] font-semibold leading-snug">
                                    {cert.name}
                                </h3>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="text-text-secondary text-[13px]">{cert.issuer}</span>
                                <span className="text-text-muted text-[12px]">{cert.date}</span>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(Certifications, "certifications");
