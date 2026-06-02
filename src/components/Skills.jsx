import React from "react";
import { motion } from "framer-motion";

import { skills } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import {
    FaJava, FaPython, FaJs, FaReact, FaNodeJs, FaDocker, FaGit, FaAws, FaBootstrap, FaFigma, FaHtml5,
} from "react-icons/fa";
import {
    SiTypescript, SiCplusplus, SiDart, SiGo, SiNextdotjs, SiTailwindcss, SiMui,
    SiSpringboot, SiExpress, SiFastapi, SiFlask,
    SiPostgresql, SiMongodb, SiMysql, SiRedis, SiFirebase,
    SiKubernetes, SiGithubactions,
    SiPytorch, SiTensorflow, SiStreamlit, SiPandas,
    SiApachekafka, SiSocketdotio, SiWebrtc, SiPostman,
} from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

const iconMap = {
    java: <FaJava />, python: <FaPython />, javascript: <FaJs />, typescript: <SiTypescript />,
    cpp: <SiCplusplus />, sql: <FaDatabase />, dart: <SiDart />, go: <SiGo />,
    react: <FaReact />, nextjs: <SiNextdotjs />, tailwind: <SiTailwindcss />,
    html: <FaHtml5 />, bootstrap: <FaBootstrap />, mui: <SiMui />,
    springboot: <SiSpringboot />, nodejs: <FaNodeJs />, express: <SiExpress />,
    fastapi: <SiFastapi />, flask: <SiFlask />,
    postgresql: <SiPostgresql />, mongodb: <SiMongodb />, mysql: <SiMysql />,
    redis: <SiRedis />, firebase: <SiFirebase />,
    docker: <FaDocker />, kubernetes: <SiKubernetes />, aws: <FaAws />,
    git: <FaGit />, githubactions: <SiGithubactions />,
    pytorch: <SiPytorch />, tensorflow: <SiTensorflow />, huggingface: <FaPython />,
    streamlit: <SiStreamlit />, pandas: <SiPandas />,
    kafka: <SiApachekafka />, socketio: <SiSocketdotio />, webrtc: <SiWebrtc />,
    postman: <SiPostman />, figma: <FaFigma />,
};

const categoryLabels = {
    languages: "Languages",
    frontend: "Frontend",
    backend: "Backend",
    databases: "Databases",
    devops: "DevOps & Cloud",
    aiml: "AI / ML",
    tools: "Tools & Protocols",
};

const categoryColors = {
    languages: "text-blue-400",
    frontend: "text-cyan-400",
    backend: "text-emerald-400",
    databases: "text-amber-400",
    devops: "text-violet-400",
    aiml: "text-rose-400",
    tools: "text-teal-400",
};

const Skills = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">My Toolkit</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Skills<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-text-secondary text-[16px] max-w-2xl leading-relaxed"
            >
                Technologies and tools I work with across the full stack, from frontend
                interfaces to cloud infrastructure and machine learning pipelines.
            </motion.p>

            <div className="mt-10 space-y-8">
                {Object.entries(skills).map(([category, items], catIndex) => (
                    <motion.div
                        key={category}
                        variants={fadeIn("up", "spring", catIndex * 0.1, 0.6)}
                    >
                        <h3 className={`text-[14px] font-semibold uppercase tracking-wider mb-4 ${categoryColors[category]}`}>
                            {categoryLabels[category]}
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {items.map((skill) => (
                                <div key={skill.name} className="skill-badge">
                                    <span className="text-[16px]">
                                        {iconMap[skill.icon] || null}
                                    </span>
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
