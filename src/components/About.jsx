import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services, socialLinks } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center text-black font-bold text-xl">
                    {title[0]}
                </div>

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case "linkedin": return <FaLinkedin className="w-6 h-6" />;
            case "github": return <FaGithub className="w-6 h-6" />;
            case "leetcode": return <SiLeetcode className="w-6 h-6" />;
            case "codeforces": return <SiCodeforces className="w-6 h-6" />;
            case "geeksforgeeks": return <SiGeeksforgeeks className="w-6 h-6" />;
            case "email": return <FaEnvelope className="w-6 h-6" />;
            default: return <FaCode className="w-6 h-6" />;
        }
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Introduction</p>
                <h2 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Overview.</h2>
            </motion.div>

            <div className="mt-4 flex flex-col md:flex-row gap-10 items-center">
                <div className="flex-1">
                    <motion.p
                        variants={fadeIn("", "", 0.1, 1)}
                        className='text-secondary text-[17px] max-w-3xl leading-[30px]'
                    >
                        I'm a passionate Full Stack Developer from India with experience in JavaScript, React, Node.js, and Java.
                        I also have a strong interest in Data Science and App Development.
                        I'm a quick learner and collaborate closely with clients to
                        create efficient, scalable, and user-friendly solutions that solve
                        real-world problems. Let's work together to bring your ideas to life!
                    </motion.p>

                    {/* Social Links in About Section */}
                    <motion.div
                        variants={fadeIn("", "", 0.2, 1)}
                        className="mt-6 flex gap-4"
                    >
                        {socialLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-[#915EFF] transition-colors text-2xl"
                                title={link.name}
                            >
                                {getIcon(link.icon)}
                            </a>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeIn("left", "", 0.3, 1)}
                    className="flex-1 flex justify-center items-center"
                >
                    <img
                        src="/Photo.jpeg"
                        alt="Het"
                        className="w-[300px] h-[300px] object-cover rounded-[20px] border-4 border-secondary shadow-card"
                    />
                </motion.div>
            </div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
