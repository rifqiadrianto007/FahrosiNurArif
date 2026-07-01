"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

const fadeRight: Variants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.7, delay: 0.35, ease: "easeOut" },
    },
};

export function Hero() {
    return (
        <section className="relative min-h-screen bg-[#11358B] overflow-hidden flex items-center px-6 md:px-16 lg:px-24 pt-24 pb-16">
            {/* Ambient background glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-125 h-125 rounded-full bg-[#6192FC]/10 blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-100 h-100 rounded-full bg-[#0A0F1E]/60 blur-[80px]" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto relative z-10">
                {/* LEFT COLUMN */}
                <div className="flex flex-col">
                    {/* Eyebrow */}
                    <motion.span
                        custom={0.1}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="inline-flex w-fit px-3 py-1 rounded-full border border-[#6192FC]/40 text-[#6192FC] text-xs font-mono tracking-widest mb-6"
                    >
                        FAHROSI NUR ARIF
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-[#EFF0F4] max-w-xl"
                    >
                        Building <span className="text-[#CBF400]">Sustainable </span>
                        <span className="text-[#CBF400]">Energy</span> Solutions.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        custom={0.3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-6 mb-10 text-[#EFF0F4]/60 text-lg max-w-md leading-relaxed"
                    >
                        Renewable Energy Engineer — passionate about industrial energy systems, process optimization, and sustainable energy development.

                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-row gap-4 flex-wrap"
                    >
                        {/* <a
                            href="#projects"
                            className="px-7 py-3.5 bg-[#CBF400] text-[#0A0F1E] font-bold rounded-full inline-flex items-center gap-2 hover:opacity-90 transition text-sm"
                        >
                            View My Work
                            <ArrowRight size={16} />
                        </a> */}
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 border-2 border-[#EFF0F4]/30 text-[#EFF0F4] font-bold rounded-full inline-flex items-center gap-2 hover:border-[#CBF400] hover:text-[#CBF400] transition text-sm"
                        >
                            Download CV
                            <ArrowRight size={16} />
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        custom={0.5}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-14 pt-8 border-t border-[#EFF0F4]/10 flex flex-row gap-12"
                    >
                        {[
                            { value: "8+", label: "Projects" },
                            { value: "5+", label: "Social Impact" },
                            { value: "20+", label: "MC & Events" },
                            { value: "4 years", label: "Experience" },
                        ].map((stat) => (
                            <div key={stat.label} className="flex flex-col">
                                <span className="text-2xl font-bold text-[#EFF0F4]">
                                    {stat.value}
                                </span>
                                <span className="text-xs text-[#EFF0F4]/50 font-mono mt-1 tracking-wide">
                                    {stat.label}
                                </span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* RIGHT COLUMN — card stack with profile photo */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeRight}
                    className="hidden lg:flex items-center justify-center relative"
                >
                    {/* Glow behind cards */}
                    <div className="absolute w-72 h-72 rounded-full bg-[#6192FC]/20 blur-3xl" />

                    <div className="relative h-120 w-100">
                        {/* Back card */}
                        <div className="absolute inset-0 rounded-3xl bg-[#6192FC]/20 border border-[#6192FC]/30 rotate-6 translate-x-4 translate-y-2" />

                        {/* Front card — now holds the profile photo */}
                        <div className="absolute inset-0 rounded-3xl bg-[#0A0F1E]/70 border border-[#EFF0F4]/10 backdrop-blur-md overflow-visible z-10">
                            <Image
                                src="/images/profile.webp"
                                alt="Fahrosi Nur Arif"
                                width={1280}
                                height={1536}
                                className="absolute left-1/2 -bottom-44 h-[205%] w-auto max-w-none -translate-x-1/2 object-contain drop-shadow-2xl"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
