import React from "react";
import { socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaHeart } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
    const getIcon = (iconName) => {
        const cls = "w-4 h-4";
        switch (iconName) {
            case "linkedin": return <FaLinkedin className={cls} />;
            case "github": return <FaGithub className={cls} />;
            case "leetcode": return <SiLeetcode className={cls} />;
            case "codeforces": return <SiCodeforces className={cls} />;
            case "geeksforgeeks": return <SiGeeksforgeeks className={cls} />;
            case "email": return <FaEnvelope className={cls} />;
            default: return <FaCode className={cls} />;
        }
    };

    return (
        <footer className="relative py-10 w-full">
            {/* Gradient top border */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

            <div className="max-w-7xl mx-auto px-6 sm:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
                {/* Left: Copyright */}
                <p className="text-text-muted text-[13px] flex items-center gap-1.5">
                    © {new Date().getFullYear()} Het Patel. Built with
                    <FaHeart className="w-3 h-3 text-rose-500" />
                </p>

                {/* Right: Social icons */}
                <div className="flex items-center gap-2">
                    {socialLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/[0.05] transition-all"
                            title={link.name}
                        >
                            {getIcon(link.icon)}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
