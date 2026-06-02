import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                'service_cuanb8p',
                'template_aze0837',
                {
                    from_name: form.name,
                    to_name: "Het Patel",
                    from_email: form.email,
                    to_email: "phet30440@gmail.com",
                    message: form.message,
                    reply_to: form.email,
                },
                'z9AV3hl0jujnuQiYe'
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    setForm({ name: "", email: "", message: "" });
                    setTimeout(() => setSuccess(false), 5000);
                },
                (error) => {
                    setLoading(false);
                    console.error(error);
                    alert("Something went wrong. Please try again.");
                }
            );
    };

    const getIcon = (iconName) => {
        const cls = "w-[18px] h-[18px]";
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
        <>
            <motion.div variants={textVariant()}>
                <div className="section-label">Get in touch</div>
                <h2 className="text-text-primary font-bold text-[36px] sm:text-[48px] tracking-tight">
                    Contact<span className="text-accent">.</span>
                </h2>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Contact Form - 3 cols */}
                <motion.div
                    variants={fadeIn("", "", 0.1, 1)}
                    className="glass-card p-8 lg:col-span-3"
                >
                    {success && (
                        <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[14px]">
                            ✓ Message sent successfully! I'll get back to you soon.
                        </div>
                    )}

                    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-5">
                        <label className="flex flex-col gap-2">
                            <span className="text-text-primary font-medium text-[14px]">Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="form-input"
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-text-primary font-medium text-[14px]">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                placeholder="your@email.com"
                                required
                                className="form-input"
                            />
                        </label>

                        <label className="flex flex-col gap-2">
                            <span className="text-text-primary font-medium text-[14px]">Message</span>
                            <textarea
                                rows={5}
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="What would you like to say?"
                                required
                                className="form-input resize-none"
                            />
                        </label>

                        <button type="submit" className="btn-primary w-fit mt-2" disabled={loading}>
                            <FaPaperPlane className="w-3.5 h-3.5" />
                            {loading ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>

                {/* Contact Info - 2 cols */}
                <motion.div
                    variants={fadeIn("left", "", 0.2, 1)}
                    className="lg:col-span-2 space-y-6"
                >
                    {/* Info Card */}
                    <div className="glass-card p-7">
                        <h3 className="text-text-primary font-semibold text-[17px] mb-5">Contact Info</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                                    <FaEnvelope className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-text-muted text-[12px]">Email</p>
                                    <a href="mailto:het.patel.tech48@gmail.com" className="text-text-primary text-[14px] hover:text-accent transition-colors">
                                        het.patel.tech48@gmail.com
                                    </a>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-9 h-9 rounded-lg bg-violet-500/10 border border-violet-500/20 flex items-center justify-center text-violet-400">
                                    <FaMapMarkerAlt className="w-4 h-4" />
                                </div>
                                <div>
                                    <p className="text-text-muted text-[12px]">Location</p>
                                    <p className="text-text-primary text-[14px]">Ahmedabad, Gujarat, India</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="glass-card p-7">
                        <h3 className="text-text-primary font-semibold text-[17px] mb-5">Connect</h3>
                        <div className="grid grid-cols-3 gap-3">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-accent/30 hover:bg-accent/5 transition-all group"
                                    title={link.name}
                                >
                                    <span className="text-text-secondary group-hover:text-accent transition-colors">
                                        {getIcon(link.icon)}
                                    </span>
                                    <span className="text-[11px] text-text-muted group-hover:text-text-secondary transition-colors">
                                        {link.name}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
};

export default SectionWrapper(Contact, "contact");
