import React, { useEffect, useState } from "react";
import { navLinks } from "../constants";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`padding-x w-full flex items-center py-4 fixed top-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-primary/80 backdrop-blur-xl border-b border-white/[0.06]"
                    : "bg-transparent"
            }`}
        >
            <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
                <a
                    href='#'
                    className='flex items-center gap-2'
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-accent-violet flex items-center justify-center text-white font-bold text-sm">
                        H
                    </div>
                    <p className='text-text-primary text-[16px] font-semibold tracking-tight'>
                        Het <span className='hidden sm:inline text-text-secondary font-normal'>Patel</span>
                    </p>
                </a>

                {/* Desktop Nav */}
                <ul className='list-none hidden lg:flex flex-row items-center gap-8'>
                    {navLinks.map((nav) => (
                        <li key={nav.id}>
                            <a
                                href={`#${nav.id}`}
                                className={`nav-link ${active === nav.title ? "active" : ""}`}
                                onClick={() => setActive(nav.title)}
                            >
                                {nav.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/HetResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !py-2 !px-5 !text-[13px] !rounded-lg"
                        >
                            <HiOutlineDocumentArrowDown className="w-4 h-4" />
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className='lg:hidden flex items-center'>
                    <button
                        className="w-8 h-8 flex flex-col justify-center items-center gap-[5px] cursor-pointer"
                        onClick={() => setToggle(!toggle)}
                        aria-label="Toggle menu"
                    >
                        <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${toggle ? 'rotate-45 translate-y-[7px]' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${toggle ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${toggle ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                {toggle && (
                    <div className="lg:hidden absolute top-16 right-4 left-4 bg-surface/95 backdrop-blur-xl border border-white/[0.06] rounded-2xl p-6 z-50">
                        <ul className='list-none flex flex-col gap-4'>
                            {navLinks.map((nav) => (
                                <li key={nav.id}>
                                    <a
                                        href={`#${nav.id}`}
                                        className={`block text-[15px] font-medium transition-colors ${
                                            active === nav.title ? "text-text-primary" : "text-text-secondary"
                                        }`}
                                        onClick={() => {
                                            setToggle(false);
                                            setActive(nav.title);
                                        }}
                                    >
                                        {nav.title}
                                    </a>
                                </li>
                            ))}
                            <li className="pt-2 border-t border-white/[0.06]">
                                <a
                                    href="/HetResume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary !py-2.5 !px-5 !text-[13px] w-full justify-center"
                                >
                                    <HiOutlineDocumentArrowDown className="w-4 h-4" />
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
