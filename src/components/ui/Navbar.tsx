"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";
        return () => { document.body.style.overflow = ""; };
    }, [menuOpen]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                        ? "bg-[#0A0F1E]/90 backdrop-blur-md shadow-lg"
                        : "bg-transparent"
                    }`}
            >
                <div className="flex items-center justify-between px-6 md:px-16 py-5 max-w-7xl mx-auto">
                    {/* Logo */}
                    <a
                        href="#"
                        className="font-mono font-bold text-xl text-[#C7EF66] tracking-tight hover:opacity-80 transition"
                    >
                        FS
                    </a>

                    {/* Desktop nav links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm font-medium text-[#EFF0F4]/70 hover:text-[#EFF0F4] transition"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2 bg-[#C7EF66] text-[#0A0F1E] font-bold text-sm rounded-full hover:opacity-90 transition"
                    >
                        Let&apos;s Talk
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        className="md:hidden text-[#EFF0F4] p-1"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile menu overlay */}
            {menuOpen && (
                <div className="fixed inset-0 bg-[#0A0F1E] z-40 flex flex-col items-center justify-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-2xl font-bold text-[#EFF0F4] hover:text-[#C7EF66] transition"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        onClick={() => setMenuOpen(false)}
                        className="mt-4 px-8 py-3 bg-[#C7EF66] text-[#0A0F1E] font-bold rounded-full hover:opacity-90 transition"
                    >
                        Let&apos;s Talk
                    </a>
                </div>
            )}
        </>
    );
}