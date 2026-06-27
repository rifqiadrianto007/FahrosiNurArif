"use client";

import { motion, type Variants } from "framer-motion";
import { skillGroups } from "@/data/skills";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function Skills() {
    return (
        <section
            id="skills"
            className="relative bg-[#11358B] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            {/* Ambient glow */}
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#6192FC]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                {/* Section label */}
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#C7EF66]/40 text-[#C7EF66] text-xs font-mono tracking-widest mb-6"
                >
                    SKILLS & TOOLS
                </motion.span>

                <motion.h2
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#EFF0F4] leading-tight mb-4 max-w-xl"
                >
                    What I bring to the{" "}
                    <span className="text-[#C7EF66]">table.</span>
                </motion.h2>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-[#EFF0F4]/50 text-lg mb-16 max-w-lg"
                >
                    A combination of domain expertise, engineering tools, and
                    professional skills built through coursework, research, and
                    hands-on projects.
                </motion.p>

                {/* Skill groups grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.category}
                            custom={0.1 * groupIndex + 0.2}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="rounded-2xl border border-[#EFF0F4]/10 bg-[#0A0F1E]/40 p-6 hover:border-[#6192FC]/30 transition"
                        >
                            {/* Category label */}
                            <p className="text-xs font-mono text-[#6192FC] tracking-widest mb-4 uppercase">
                                {group.category}
                            </p>

                            {/* Skill badges */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 rounded-full bg-[#EFF0F4]/5 border border-[#EFF0F4]/10 text-[#EFF0F4]/80 text-sm font-medium hover:border-[#C7EF66]/40 hover:text-[#C7EF66] transition"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}