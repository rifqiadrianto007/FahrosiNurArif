"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";
import { GitBranch, FileText, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/data/projects";

type FilterCategory = "All" | Project["category"];

const categories: FilterCategory[] = [
    "All",
    "Solar",
    "Bioenergy",
    "Instrumentation",
    "Other"
];

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function Projects() {
    const [activeFilter, setActiveFilter] = useState<FilterCategory>("All");

    const filtered =
        activeFilter === "All"
            ? projects
            : projects.filter((p) => p.category === activeFilter);

    return (
        <section
            id="projects"
            className="relative bg-[#0A0F1E] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#11358B]/30 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#6192FC]/40 text-[#6192FC] text-xs font-mono tracking-widest mb-6"
                >
                    SELECTED PROJECTS
                </motion.span>

                <motion.h2
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#EFF0F4] leading-tight mb-4 max-w-xl"
                >
                    Building Sustainable{" "}
                    <span className="text-[#C7EF66]">Energy Solutions.</span>
                </motion.h2>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-[#EFF0F4]/50 text-lg mb-10 max-w-lg"
                >
                    Passionate about developing sustainable energy solutions that support
                    efficiency, innovation, and a cleaner future.
                </motion.p>

                {/* Filter tabs */}
                <motion.div
                    custom={0.3}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex flex-wrap gap-2 mb-12"
                >
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveFilter(cat)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition ${activeFilter === cat
                                    ? "bg-[#C7EF66] text-[#0A0F1E]"
                                    : "border border-[#EFF0F4]/20 text-[#EFF0F4]/60 hover:border-[#C7EF66]/40 hover:text-[#C7EF66]"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </motion.div>

                {/* Project cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {filtered.map((project, index) => (
                        <motion.div
                            key={project.id}
                            custom={0.05 * index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group rounded-2xl border border-[#EFF0F4]/10 bg-[#11358B]/10 overflow-hidden hover:border-[#6192FC]/40 transition flex flex-col"
                        >
                            {/* Thumbnail */}
                            <div className="w-full h-36 bg-[#11358B]/40 flex items-center justify-center border-b border-[#EFF0F4]/10">
                                <span className="font-mono text-xs text-[#EFF0F4]/20 tracking-widest">
                                    {project.category.toUpperCase()}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-5 flex flex-col flex-1">
                                <span className="inline-flex w-fit px-2 py-0.5 rounded-full bg-[#6192FC]/10 border border-[#6192FC]/20 text-[#6192FC] text-xs font-mono mb-3">
                                    {project.category}
                                </span>

                                <h3 className="text-sm font-bold text-[#EFF0F4] mb-2 leading-snug">
                                    {project.title}
                                </h3>

                                <p className="text-[#EFF0F4]/40 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-1 mb-4">
                                    {project.tools.slice(0, 3).map((tool) => (
                                        <span
                                            key={tool}
                                            className="px-2 py-0.5 rounded text-xs text-[#EFF0F4]/40 border border-[#EFF0F4]/10 font-mono"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}