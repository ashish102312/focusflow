import { motion } from 'framer-motion';

export default function Cta() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl"
        >
          <h2 className="text-4xl sm:text-5xl display-serif text-foreground">
            Make space for focused work.
          </h2>
          <p className="mx-auto mt-6 max-w-xl body-mono leading-8 text-muted-foreground">
            Give your day a clearer direction with FocusFlow.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="#hero"
              className="inline-flex items-center justify-center bg-foreground text-background px-8 py-3.5 label-mono hover:bg-foreground/90 transition-all group border border-foreground"
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
