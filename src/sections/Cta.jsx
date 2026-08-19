import { motion } from 'framer-motion';

export default function Cta() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border/50">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_120%,rgba(120,119,198,0.1),rgba(255,255,255,0))]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Make space for focused work.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Give your day a clearer direction with FocusFlow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#hero"
              className="inline-flex items-center justify-center rounded-full bg-foreground text-background px-8 py-3.5 text-base font-medium hover:bg-foreground/90 transition-all group shadow-sm hover:shadow-md"
            >
              Start planning
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
