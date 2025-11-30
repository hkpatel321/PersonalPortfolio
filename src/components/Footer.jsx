import React from "react";
import { socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Footer = () => {
    const getIcon = (iconName) => {
        switch (iconName) {
            case "linkedin": return <FaLinkedin className="w-5 h-5" />;
            case "github": return <FaGithub className="w-5 h-5" />;
            case "leetcode": return <SiLeetcode className="w-5 h-5" />;
            case "codeforces": return <SiCodeforces className="w-5 h-5" />;
            case "geeksforgeeks": return <SiGeeksforgeeks className="w-5 h-5" />;
            case "email": return <FaEnvelope className="w-5 h-5" />;
            default: return <FaCode className="w-5 h-5" />;
        }
    };

    return (
        <footer className="bg-primary py-8 w-full flex flex-col items-center justify-center gap-4 border-t border-t-[#1f1f3a]">
            <div className="flex gap-6">
                {socialLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary hover:text-white transition-colors p-2 rounded-full bg-tertiary hover:bg-[#915EFF]"
                        title={link.name}
                    >
                        {getIcon(link.icon)}
                    </a>
                ))}
            </div>
            <p className="text-secondary text-[14px]">
                &copy; {new Date().getFullYear()} Het Patel. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
