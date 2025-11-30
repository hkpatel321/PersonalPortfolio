import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { socialLinks } from "../constants";
import { FaLinkedin, FaGithub, FaCode, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces, SiGeeksforgeeks } from "react-icons/si";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { target } = e;
        const { name, value } = target;

        setForm({
            ...form,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // TODO: Replace with your own EmailJS service ID, template ID, and public key
        // Create an account at https://www.emailjs.com/
        // Service ID: service_xxxx
        // Template ID: template_xxxx
        // Public Key: xxxxxxxxxxxx

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
                },
                'z9AV3hl0jujnuQiYe'
            )
            .then(
                () => {
                    setLoading(false);
                    alert("Thank you. I will get back to you as soon as possible.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.error(error);

                    alert("Ahh, something went wrong. Please try again.");
                }
            );
    };

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
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={`sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider`}>Get in touch</p>
                <h3 className={`text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}>Contact.</h3>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className='mt-12 flex flex-col gap-8'
                >
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Name</span>
                        <input
                            type='text'
                            name='name'
                            value={form.name}
                            onChange={handleChange}
                            placeholder="What's your good name?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Email</span>
                        <input
                            type='email'
                            name='email'
                            value={form.email}
                            onChange={handleChange}
                            placeholder="What's your web address?"
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>
                    <label className='flex flex-col'>
                        <span className='text-white font-medium mb-4'>Your Message</span>
                        <textarea
                            rows={7}
                            name='message'
                            value={form.message}
                            onChange={handleChange}
                            placeholder='What you want to say?'
                            className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
                        />
                    </label>

                    <div className="flex justify-between items-center">
                        <button
                            type='submit'
                            className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'
                        >
                            {loading ? "Sending..." : "Send"}
                        </button>

                        <div className="flex gap-4">
                            {socialLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#915EFF] transition-colors"
                                    title={link.name}
                                >
                                    {getIcon(link.icon)}
                                </a>
                            ))}
                        </div>
                    </div>
                </form>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
