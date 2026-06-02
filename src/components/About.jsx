import React from "react";
import { motion } from "framer-motion";

import { services, education } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLaptopCode, FaMobileAlt, FaBrain, FaTerminal, FaGraduationCap } from "react-icons/fa";

const serviceIcons = {
    fullstack: <FaLaptopCode className="w-7 h-7" />,
    mobile: <FaMobileAlt className="w-7 h-7" />,
    datascience: <FaBrain className="w-7 h-7" />,
    competitive: <FaTerminal className="w-7 h-7" />,
};

const ServiceCard = ({ index, title, description, icon }) => (
    <motion.div
        variants={fadeIn("up", "spring", index * 0.15, 0.6)}
        className="glow-card p-6 flex-1 min-w-[220px]"
    >
        <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-4">
            {serviceIcons[icon]}
        </div>
        <h3 className="text-text-primary text-[17px] font-semibold mb-2">{title}</h3>
        <p className="text-text-secondary text-[14px] leading-relaxed">{description}</p>
    </motion.div>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">Introduction</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    About Me<span className="text-accent">.</span>
                </h2>
            </motion.div>

            {/* Bio + Education Grid */}
            <div className="mt-8 grid grid-cols-1 lg:grid-cols-5 gap-6">
                {/* Bio Card - spans 3 columns */}
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="glass-card p-8 lg:col-span-3"
                >
                    <p className="text-text-secondary text-[16px] leading-[1.8]">
                        I'm a passionate <span className="text-text-primary font-medium">Full Stack Developer</span> and{" "}
                        <span className="text-text-primary font-medium">Computer Science</span> student at Nirma University, Ahmedabad.
                        With a strong foundation in Java, Python, JavaScript, and modern frameworks like React and Spring Boot,
                        I build robust, scalable applications that solve real-world problems.
                    </p>
                    <p className="mt-4 text-text-secondary text-[16px] leading-[1.8]">
                        Beyond development, I'm deeply invested in <span className="text-text-primary font-medium">Data Science & AI</span> — 
                        having built ML models with PyTorch and TensorFlow — and <span className="text-text-primary font-medium">Competitive Programming</span>,
                        where I hold a Knight badge on LeetCode (Top 6% globally) and Expert rating on Codeforces.
                    </p>
                </motion.div>

                {/* Education Card - spans 2 columns */}
                <motion.div
                    variants={fadeIn("left", "", 0.2, 1)}
                    className="glass-card p-8 lg:col-span-2"
                >
                    <div className="flex items-center gap-3 mb-5">
                        <FaGraduationCap className="w-5 h-5 text-accent" />
                        <h3 className="text-text-primary font-semibold text-[17px]">Education</h3>
                    </div>
                    <div className="space-y-5">
                        {education.map((edu, i) => (
                            <div key={i} className={i > 0 ? "pt-5 border-t border-white/[0.06]" : ""}>
                                <h4 className="text-text-primary font-medium text-[15px]">{edu.degree}</h4>
                                <p className="text-text-secondary text-[13px] mt-1">{edu.institution}</p>
                                <div className="flex items-center justify-between mt-2">
                                    <span className="text-accent text-[13px] font-semibold">{edu.grade}</span>
                                    <span className="text-text-muted text-[12px]">{edu.date}</span>
                                </div>
                                {edu.coursework && (
                                    <p className="text-text-muted text-[12px] mt-2 leading-relaxed">
                                        <span className="text-text-secondary">Coursework:</span> {edu.coursework}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Service Cards */}
            <div className='mt-10 flex flex-wrap gap-5'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
