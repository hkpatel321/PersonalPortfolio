import React from "react";
import { motion } from "framer-motion";
import { socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Hero = () => {
    const getIcon = (iconName) => {
        const iconClass = "w-[18px] h-[18px]";
        switch (iconName) {
            case "linkedin": return <FaLinkedin className={iconClass} />;
            case "github": return <FaGithub className={iconClass} />;
            case "leetcode": return <SiLeetcode className={iconClass} />;
            case "codeforces": return <SiCodeforces className={iconClass} />;
            case "geeksforgeeks": return <SiGeeksforgeeks className={iconClass} />;
            case "email": return <FaEnvelope className={iconClass} />;
            default: return null;
        }
    };

    return (
        <section className="relative w-full min-h-screen flex items-center overflow-hidden">
            {/* Gradient mesh background */}
            <div className="hero-gradient" />

            <div className="max-w-7xl mx-auto w-full px-6 sm:px-16 pt-28 pb-16 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left"
                    >
                        {/* Status badge */}
                        <div className="section-label mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                            Open to opportunities
                        </div>

                        <h1 className="text-[40px] sm:text-[56px] lg:text-[68px] font-extrabold leading-[1.05] tracking-tight text-text-primary">
                            Hi, I'm{" "}
                            <span className="gradient-text">Het Patel</span>
                        </h1>

                        <p className="mt-5 text-text-secondary text-[17px] sm:text-[19px] leading-relaxed max-w-lg">
                            Full Stack Developer, Competitive Programmer, and Data Science
                            Enthusiast. B.Tech CSE at Nirma University.
                        </p>

                        {/* Social links */}
                        <div className="mt-7 flex items-center gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-text-secondary hover:text-text-primary hover:border-accent/30 hover:bg-accent/10 transition-all duration-300"
                                    title={link.name}
                                >
                                    {getIcon(link.icon)}
                                </a>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="mt-8 flex flex-wrap gap-4">
                            <a href="#projects" className="btn-primary">
                                View Projects
                            </a>
                            <a href="#contact" className="btn-secondary">
                                Contact Me
                            </a>
                        </div>
                    </motion.div>

                    {/* Right: Photo */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                        className="flex-shrink-0"
                    >
                        <div className="gradient-border">
                            <div className="gradient-border-inner">
                                <img
                                    src="/Photo.jpeg"
                                    alt="Het Patel"
                                    className="w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className='absolute bottom-8 w-full flex justify-center'>
                <a href='#about' className="group">
                    <div className='w-[30px] h-[50px] rounded-full border-2 border-text-muted/30 flex justify-center items-start p-1.5 group-hover:border-accent/50 transition-colors'>
                        <motion.div
                            animate={{ y: [0, 18, 0] }}
                            transition={{ duration: 1.8, repeat: Infinity, repeatType: "loop" }}
                            className='w-2 h-2 rounded-full bg-accent'
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
