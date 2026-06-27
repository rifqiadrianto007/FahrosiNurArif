"use client";

import { motion, type Variants } from "framer-motion";

const interests = [
    "Solar PV System Design",
    "Energy Simulation & Modeling",
    "Rural Electrification",
    "Hybrid Microgrid Systems",
    "Energy Efficiency & Audit",
];

const tools = [
    { name: "HOMER Pro", icon: "⚡" },
    { name: "PVsyst", icon: "☀️" },
    { name: "AutoCAD", icon: "📐" },
    { name: "MATLAB", icon: "📊" },
    { name: "Python", icon: "🐍" },
    { name: "Excel", icon: "📋" },
    { name: "Power BI", icon: "📈" },
    { name: "ArcGIS", icon: "🗺️" },
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function About() {
    return (
        <section
            id="about"
            className="relative bg-[#0A0F1E] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#11358B]/20 blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#6192FC]/40 text-[#6192FC] text-xs font-mono tracking-widest mb-10"
                >
                    ABOUT ME
                </motion.span>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr_1px_1fr_1px_1fr] gap-8 lg:gap-0 items-start">

                    {/* COLUMN 1 — Description */}
                    <motion.div
                        custom={0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:pr-10"
                    >
                        <p className="text-xs font-mono text-[#6192FC] tracking-widest uppercase mb-5">
                            Description
                        </p>
                        <h2 className="text-2xl md:text-3xl font-extrabold text-[#EFF0F4] leading-tight mb-5">
                            Passionate about developing{" "}
                            <span className="text-[#C7EF66]">sustainable energy</span>{" "}
                            solutions that support efficiency, innovation, and a cleaner
                            future.
                        </h2>
                        <p className="text-[#EFF0F4]/50 text-sm leading-relaxed">
                            I am a Renewable Energy Engineering graduate from{" "}
                            <span className="text-[#EFF0F4]/80">[University Name]</span>,
                            focused on photovoltaic systems and energy modeling. I approach
                            every project with a commitment to technical rigor and real-world
                            impact.
                        </p>
                    </motion.div>

                    {/* Vertical divider 1 */}
                    <div className="hidden lg:block w-px bg-[#EFF0F4]/10 self-stretch mx-6" />

                    {/* COLUMN 2 — Interests */}
                    <motion.div
                        custom={0.2}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:px-10"
                    >
                        <p className="text-xs font-mono text-[#6192FC] tracking-widest uppercase mb-5">
                            Minat
                        </p>
                        <ol className="flex flex-col gap-4">
                            {interests.map((item, index) => (
                                <li key={item} className="flex items-start gap-3">
                                    <span className="text-xs font-mono text-[#C7EF66] mt-0.5 shrink-0">
                                        {String(index + 1).padStart(2, "0")}.
                                    </span>
                                    <span className="text-[#EFF0F4]/70 text-sm leading-relaxed">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ol>
                    </motion.div>

                    {/* Vertical divider 2 */}
                    <div className="hidden lg:block w-px bg-[#EFF0F4]/10 self-stretch mx-6" />

                    {/* COLUMN 3 — Tools */}
                    <motion.div
                        custom={0.3}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                        className="lg:pl-10"
                    >
                        <p className="text-xs font-mono text-[#6192FC] tracking-widest uppercase mb-5">
                            Tools
                        </p>
                        <div className="grid grid-cols-3 gap-3">
                            {tools.map((tool) => (
                                <div
                                    key={tool.name}
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl border border-[#EFF0F4]/10 bg-[#11358B]/10 hover:border-[#C7EF66]/30 hover:bg-[#11358B]/20 transition"
                                >
                                    <span className="text-xl">{tool.icon}</span>
                                    <span className="text-[#EFF0F4]/60 text-xs font-mono text-center leading-tight">
                                        {tool.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}