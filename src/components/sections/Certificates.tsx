"use client";

import { motion, type Variants } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certificates } from "@/data/certificates";
import Image from "next/image";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: (delay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
};

export function Certificates() {
    return (
        <section
            id="certificates"
            className="relative bg-[#11358B] px-6 md:px-16 lg:px-24 py-24 lg:py-32"
        >
            <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-[#6192FC]/10 blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto">
                <motion.span
                    custom={0}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="inline-flex px-3 py-1 rounded-full border border-[#C7EF66]/40 text-[#C7EF66] text-xs font-mono tracking-widest mb-6"
                >
                    CERTIFICATIONS
                </motion.span>

                <motion.h2
                    custom={0.1}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-4xl md:text-5xl font-extrabold text-[#EFF0F4] leading-tight mb-4 max-w-xl"
                >
                    Credentials &{" "}
                    <span className="text-[#C7EF66]">Certifications.</span>
                </motion.h2>

                <motion.p
                    custom={0.2}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="text-[#EFF0F4]/50 text-lg mb-16 max-w-lg"
                >
                    A record of continuous learning across energy systems, engineering
                    tools, and technical skills.
                </motion.p>

                {/* Certificate grid — 4 columns, 2 rows */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            custom={0.05 * index}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                            className="group relative rounded-2xl border border-[#EFF0F4]/10 bg-[#0A0F1E]/40 overflow-hidden hover:border-[#C7EF66]/30 transition"
                        >
                            {/* Thumbnail area */}
                            <div className="relative w-full aspect-video bg-[#0A0F1E]/60 overflow-hidden border-b border-[#EFF0F4]/10">
                                <Image
                                    src={cert.thumbnail}
                                    alt={cert.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition duration-500"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                <h3 className="text-sm font-bold text-[#EFF0F4] leading-snug mb-1">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-[#6192FC] font-mono mb-1">
                                    {cert.issuer}
                                </p>
                                <p className="text-xs text-[#EFF0F4]/30 font-mono mb-3">
                                    {cert.date}
                                </p>

                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1.5 text-xs text-[#EFF0F4]/40 hover:text-[#C7EF66] transition"
                                    >
                                        <ExternalLink size={12} />
                                        View Credential
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
