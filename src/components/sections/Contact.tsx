"use client";

import { motion, type Variants } from "framer-motion";
import { Mail, Phone, MapPin, Link, GitBranch } from "lucide-react";

const contactInfo = [
    {
        icon: Mail,
        label: "Email",
        value: "fahrosinurr@gmail.com",
        href: "mailto:fahrosinurr@gmail.com",
    },
    {
        icon: Phone,
        label: "Phone",
        value: "+62 8xx-xxxx-xxxx",
        href: "tel:+628xxxxxxxxx",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Indonesia",
        href: null,
    },
];

const socialLinks = [
    {
        icon: Link,
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/fahrosinur",
    }
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function Contact() {
    return (
        <section
            id="contact"
            className="relative bg-[#0A0F1E] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            {/* Ambient glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-100 rounded-full bg-[#11358B]/20 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#6192FC]/40 text-[#6192FC] text-xs font-mono tracking-widest mb-6"
                >
                    CONTACT
                </motion.span>

                <motion.h2
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-6xl font-extrabold text-[#EFF0F4] leading-tight mb-6 max-w-2xl"
                >
                    Let&apos;s Work Together and{" "}
                    <span className="text-[#C7EF66]">Create Something Great!</span>
                </motion.h2>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-[#EFF0F4]/50 text-lg mb-16 max-w-md leading-relaxed"
                >
                    Open to opportunities in renewable energy engineering — internships,
                    full-time roles, research collaborations, or project consultations.
                </motion.p>

                {/* Contact info cards */}
                <motion.div
                    custom={0.3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="mb-6"
                >
                    <p className="text-xs font-mono text-[#6192FC] tracking-widest uppercase mb-6">
                        Contact Information
                    </p>

                    <div className="flex flex-col gap-4 max-w-sm">
                        {contactInfo.map((item) => {
                            const Icon = item.icon;
                            const content = (
                                <div className="flex items-center gap-4 p-4 rounded-2xl border border-[#EFF0F4]/10 bg-[#11358B]/10 hover:border-[#C7EF66]/30 hover:bg-[#11358B]/20 transition group">
                                    <div className="w-10 h-10 rounded-full bg-[#C7EF66]/10 border border-[#C7EF66]/20 flex items-center justify-center shrink-0 group-hover:bg-[#C7EF66]/20 transition">
                                        <Icon size={18} className="text-[#C7EF66]" />
                                    </div>
                                    <div>
                                        <p className="text-xs font-mono text-[#EFF0F4]/30 mb-0.5">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-medium text-[#EFF0F4]/80">
                                            {item.value}
                                        </p>
                                    </div>
                                </div>
                            );

                            return item.href ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block"
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={item.label}>{content}</div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Social links */}
                <motion.div
                    custom={0.4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-4 mt-10"
                >
                    {socialLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#EFF0F4]/20 text-[#EFF0F4]/60 text-sm font-medium hover:border-[#C7EF66]/40 hover:text-[#C7EF66] transition"
                            >
                                <Icon size={16} />
                                {link.label}
                            </a>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}