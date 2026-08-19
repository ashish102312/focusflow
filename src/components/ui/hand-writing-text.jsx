import { motion } from "framer-motion";

export function HandWrittenTitle({ title, subtitle }) {
    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: 1.2, duration: 1.2, ease: "easeInOut" },
                opacity: { delay: 1.2, duration: 0.3 },
            },
        },
    };

    return (
        <div className="relative w-full max-w-4xl mx-auto py-12">
            <div className="relative text-center z-10 flex flex-col items-center justify-center">
                <div className="relative inline-block max-w-full">
                    <motion.h1
                        className="text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5, duration: 0.8 }}
                    >
                        {title}
                    </motion.h1>
                    <motion.svg
                        width="120"
                        height="120"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-muted-foreground absolute -right-16 md:-right-24 bottom-0 md:-bottom-4 pointer-events-none"
                        initial="hidden"
                        animate="visible"
                    >
                        <defs>
                            <filter id="pencil" x="-20%" y="-20%" width="140%" height="140%">
                                <feTurbulence type="fractalNoise" baseFrequency="0.1" numOctaves="3" result="noise" />
                                <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" xChannelSelector="R" yChannelSelector="G" />
                            </filter>
                        </defs>
                        {/* Shadow/underlayer for sketchy pencil feel */}
                        <motion.path
                            d="M 3 13 C 6 15 9 18 10 20 C 13 14 17 6 22 2"
                            variants={draw}
                            className="opacity-40"
                            filter="url(#pencil)"
                        />
                        {/* Main stroke */}
                        <motion.path
                            d="M 3.5 12.5 C 6.5 15.5 9 18 10 20.5 C 12.5 13.5 16.5 6.5 21.5 2.5"
                            variants={draw}
                            className="opacity-80"
                            filter="url(#pencil)"
                        />
                    </motion.svg>
                </div>
                {subtitle && (
                    <motion.div
                        className="mt-6 body-mono text-muted-foreground leading-relaxed max-w-2xl mx-auto"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: { delayChildren: 1.5, staggerChildren: 0.02 }
                            }
                        }}
                        initial="hidden"
                        animate="visible"
                    >
                        {Array.isArray(subtitle) ? (
                            <>
                                {subtitle[0].split("").map((char, i) => (
                                    <motion.span key={`line1-${i}`} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                        {char}
                                    </motion.span>
                                ))}
                                <br className="hidden sm:block" />
                                <span className="sm:hidden"> </span>
                                {subtitle[1].split("").map((char, i) => (
                                    <motion.span key={`line2-${i}`} variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}>
                                        {char}
                                    </motion.span>
                                ))}
                            </>
                        ) : (
                            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.8 }}>
                                {subtitle}
                            </motion.span>
                        )}
                    </motion.div>
                )}
            </div>
        </div>
    );
}
