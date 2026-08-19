import { motion } from 'framer-motion';
import { HandWrittenTitle } from '../components/ui/hand-writing-text';
import { CrowdCanvas } from '../components/ui/crowd-canvas';

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
      className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 lg:pb-32 flex items-center min-h-screen overflow-hidden"
    >
      {/* Background Crowd Canvas */}
      <div className="absolute bottom-0 left-0 right-0 h-[45vh] pointer-events-none z-0 opacity-40">
        <CrowdCanvas src="/images/peeps/all-peeps.png" rows={15} cols={7} />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <HandWrittenTitle 
          title={
            <>Turn a busy day into a <em className="text-accent italic ml-3">clear plan.</em></>
          }
          subtitle={[
            "FocusFlow brings your tasks, priorities, and daily goals into one focused workspace.",
            "Stop reacting and start orchestrating your day."
          ]}
        />
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#product"
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
      </div>
    </section>
  );
}
