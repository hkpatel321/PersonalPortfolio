import React from "react";
import { motion } from "framer-motion";

import { achievements, codingProfiles } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import {
    FaTrophy, FaMedal, FaCode, FaTerminal, FaStar, FaRocket, FaGraduationCap, FaCertificate, FaChartLine,
} from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const achievementIcons = {
    trophy: <FaTrophy />,
    medal: <FaMedal />,
    code: <FaCode />,
    terminal: <FaTerminal />,
    star: <FaStar />,
    rocket: <FaRocket />,
    academic: <FaGraduationCap />,
    certificate: <FaCertificate />,
    ranking: <FaChartLine />,
};

const colorMap = {
    amber: { bg: "bg-amber-500/10", border: "border-amber-500/20", text: "text-amber-400" },
    blue: { bg: "bg-blue-500/10", border: "border-blue-500/20", text: "text-blue-400" },
    violet: { bg: "bg-violet-500/10", border: "border-violet-500/20", text: "text-violet-400" },
    emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/20", text: "text-emerald-400" },
    rose: { bg: "bg-rose-500/10", border: "border-rose-500/20", text: "text-rose-400" },
};

const profileIcons = {
    LeetCode: <SiLeetcode className="w-5 h-5" />,
    Codeforces: <SiCodeforces className="w-5 h-5" />,
    GeeksforGeeks: <SiGeeksforgeeks className="w-5 h-5" />,
};

const profileColors = {
    amber: "border-amber-500/20 hover:border-amber-500/40",
    blue: "border-blue-500/20 hover:border-blue-500/40",
    emerald: "border-emerald-500/20 hover:border-emerald-500/40",
};

const Achievements = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">Milestones</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Achievements<span className="text-accent">.</span>
                </h2>
            </motion.div>

            {/* Coding Profiles - Highlighted Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
                {codingProfiles.map((profile, index) => (
                    <motion.a
                        key={profile.platform}
                        href={profile.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={fadeIn("up", "spring", index * 0.15, 0.6)}
                        className={`glass-card p-6 border ${profileColors[profile.color]} group cursor-pointer`}
                    >
                        <div className="flex items-center gap-3 mb-4">
                            <span className={`${colorMap[profile.color]?.text}`}>
                                {profileIcons[profile.platform]}
                            </span>
                            <h3 className="text-text-primary font-semibold text-[16px]">{profile.platform}</h3>
                        </div>
                        {profile.rating && (
                            <div className="flex items-baseline gap-2 mb-1">
                                <span className="text-[28px] font-bold text-text-primary">{profile.rating}</span>
                                {profile.badge && (
                                    <span className={`text-[13px] font-semibold ${colorMap[profile.color]?.text}`}>
                                        {profile.badge}
                                    </span>
                                )}
                            </div>
                        )}
                        <div className="space-y-1 mt-2">
                            {profile.solved && (
                                <p className="text-text-secondary text-[13px]">{profile.solved} problems solved</p>
                            )}
                            {profile.streak && (
                                <p className="text-text-secondary text-[13px]">🔥 {profile.streak} streak</p>
                            )}
                            {profile.highlight && (
                                <p className={`text-[13px] font-medium ${colorMap[profile.color]?.text}`}>
                                    {profile.highlight}
                                </p>
                            )}
                        </div>
                    </motion.a>
                ))}
            </div>

            {/* Achievement Grid */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {achievements.map((achievement, index) => {
                    const colors = colorMap[achievement.color] || colorMap.blue;
                    return (
                        <motion.div
                            key={index}
                            variants={fadeIn("up", "spring", index * 0.08, 0.5)}
                            className="glow-card p-5 flex gap-4"
                        >
                            <div className={`w-10 h-10 rounded-xl ${colors.bg} border ${colors.border} flex items-center justify-center ${colors.text} flex-shrink-0 text-[16px]`}>
                                {achievementIcons[achievement.icon]}
                            </div>
                            <div>
                                <h3 className="text-text-primary text-[14px] font-semibold leading-snug">
                                    {achievement.title}
                                </h3>
                                <p className="text-text-secondary text-[13px] mt-1.5 leading-relaxed">
                                    {achievement.description}
                                </p>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
