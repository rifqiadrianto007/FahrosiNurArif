"use client";

import { motion, type Variants } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";

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
                        RENEWABLE ENERGY ENGINEER
                    </motion.span>

                    {/* Headline */}
                    <motion.h1
                        custom={0.2}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="font-extrabold text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-[#EFF0F4] max-w-xl"
                    >
                        Renewable Energy{" "}
                        <span className="text-[#C7EF66]">Innovate & </span> Suntain.
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        custom={0.3}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="mt-6 mb-10 text-[#EFF0F4]/60 text-lg max-w-md leading-relaxed"
                    >
                        Renewable Energy Engineer — focused on solar systems, energy
                        modeling, and sustainable power solutions.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        custom={0.4}
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="flex flex-row gap-4 flex-wrap"
                    >
                        <a
                            href="#projects"
                            className="px-7 py-3.5 bg-[#C7EF66] text-[#0A0F1E] font-bold rounded-full inline-flex items-center gap-2 hover:opacity-90 transition text-sm"
                        >
                            View My Work
                            <ArrowRight size={16} />
                        </a>
                        <a
                            href="/cv.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-7 py-3.5 border-2 border-[#EFF0F4]/30 text-[#EFF0F4] font-bold rounded-full inline-flex items-center gap-2 hover:border-[#C7EF66] hover:text-[#C7EF66] transition text-sm"
                        >
                            Download CV
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
                            { value: "9+", label: "Projects" },
                            { value: "5+", label: "Social Impact" },
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

                {/* RIGHT COLUMN — card stack */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={fadeRight}
                    className="hidden lg:flex items-center justify-center relative"
                >
                    {/* Glow behind cards */}
                    <div className="absolute w-72 h-72 rounded-full bg-[#6192FC]/20 blur-3xl" />

                    <div className="relative w-80 h-96">
                        {/* Back card */}
                        <div className="absolute inset-0 rounded-3xl bg-[#6192FC]/20 border border-[#6192FC]/30 rotate-6 translate-x-4 translate-y-2" />

                        {/* Front card */}
                        <div className="absolute inset-0 rounded-3xl bg-[#0A0F1E]/70 border border-[#EFF0F4]/10 backdrop-blur-md flex flex-col justify-between p-7 z-10">
                            {/* Top */}
                            <div className="flex items-center gap-2">
                                <Zap size={28} className="text-[#C7EF66]" />
                                <span className="font-mono text-xs text-[#EFF0F4]/50 tracking-wide">
                                    Energy Systems
                                </span>
                            </div>

                            {/* Middle */}
                            <div>
                                <p className="text-4xl font-extrabold text-[#EFF0F4] leading-tight">
                                    Solar PV
                                </p>
                                <p className="text-sm text-[#EFF0F4]/50 mt-2">
                                    System Design
                                </p>
                            </div>

                            {/* Bottom — progress bar */}
                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <p className="text-xs text-[#EFF0F4]/40 font-mono">
                                        Efficiency Rating
                                    </p>
                                    <p className="text-xs text-[#C7EF66] font-mono font-bold">
                                        80%
                                    </p>
                                </div>
                                <div className="w-full h-1.5 bg-[#EFF0F4]/10 rounded-full">
                                    <div className="w-4/5 h-full bg-[#C7EF66] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}