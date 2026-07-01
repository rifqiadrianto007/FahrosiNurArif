"use client";

import { motion, type Variants } from "framer-motion";
import { experiences } from "@/data/experience";

const typeColors: Record<string, string> = {
    Internship: "text-[#CBF400] border-[#CBF400]/30 bg-[#CBF400]/10",
    Organization: "text-[#6192FC] border-[#6192FC]/30 bg-[#6192FC]/10",
    Research: "text-[#EFF0F4] border-[#EFF0F4]/20 bg-[#EFF0F4]/5",
    Community: "text-[#CBF400] border-[#CBF400]/30 bg-[#CBF400]/10",
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function Experience() {
    return (
        <section
            id="experience"
            className="relative bg-[#11358B] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            {/* Ambient glow */}
            <div className="absolute top-0 left-1/2 w-96 h-96 rounded-full bg-[#6192FC]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#CBF400]/40 text-[#CBF400] text-xs font-mono tracking-widest mb-6"
                >
                    EXPERIENCE
                </motion.span>

                <motion.h2
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#EFF0F4] leading-tight mb-4 max-w-xl"
                >
                    Where I&apos;ve{" "}
                    <span className="text-[#CBF400]">made an impact.</span>
                </motion.h2>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-[#EFF0F4]/50 text-lg mb-16 max-w-lg"
                >
                    From internships and research to student organizations and community
                    service — a track record of showing up and delivering.
                </motion.p>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[#EFF0F4]/10" />

                    <div className="flex flex-col gap-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                custom={0.1 * index + 0.2}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                                className="relative pl-8 md:pl-24"
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-1 md:left-7 top-1.5 w-2.5 h-2.5 rounded-full bg-[#CBF400] ring-4 ring-[#11358B]" />

                                {/* Period — desktop: left of line */}
                                <p className="hidden md:block absolute left-30 top-0.5 text-xs font-mono text-[#EFF0F4]/30 text-right w-28 leading-relaxed">
                                    {exp.period}
                                </p>

                                {/* Card */}
                                <div className="rounded-2xl border border-[#EFF0F4]/10 bg-[#0A0F1E]/40 p-6 hover:border-[#6192FC]/30 transition">
                                    {/* Header */}
                                    <div className="flex flex-wrap items-start gap-3 mb-1">
                                        <h3 className="text-lg font-bold text-[#EFF0F4] leading-snug">
                                            {exp.role}
                                        </h3>
                                        <span
                                            className={`inline-flex px-2 py-0.5 rounded-full border text-xs font-mono ${typeColors[exp.type]}`}
                                        >
                                            {exp.type}
                                        </span>
                                    </div>

                                    <p className="text-[#6192FC] text-sm font-medium mb-1">
                                        {exp.organization}
                                    </p>

                                    {/* Period — mobile */}
                                    <p className="md:hidden text-xs font-mono text-[#EFF0F4]/30 mb-4">
                                        {exp.period}
                                    </p>

                                    {/* Achievements */}
                                    <ul className="mt-4 flex flex-col gap-2">
                                        {exp.achievements.map((item, i) => (
                                            <li
                                                key={i}
                                                className="flex gap-3 text-sm text-[#EFF0F4]/60 leading-relaxed"
                                            >
                                                <span className="text-[#CBF400] mt-1 shrink-0">→</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}