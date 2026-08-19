import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 flex items-center min-h-[90vh]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-normal text-foreground"
          >
            Turn a busy day into a <em className="text-accent italic">clear plan.</em>
          </motion.h1>
          
          <motion.p
            variants={itemVariants}
            className="mt-6 body-mono text-muted-foreground leading-relaxed max-w-2xl mx-auto"
          >
            FocusFlow brings your tasks, priorities, and daily goals into one focused workspace.
          </motion.p>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#preview"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-foreground text-background px-8 py-3.5 label-mono hover:bg-foreground/90 transition-all group border border-foreground"
            >
              Start planning
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
            <a
              href="#how-it-works"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-transparent text-foreground border border-border px-8 py-3.5 label-mono hover:bg-surface-hover transition-colors"
            >
              See how it works
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
