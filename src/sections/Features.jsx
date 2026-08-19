import { motion } from 'framer-motion';
import { LayoutList, Target, LineChart } from 'lucide-react';

const features = [
  {
    name: 'Plan your day',
    description: 'Turn everything you need to do into a focused daily plan.',
    icon: LayoutList,
  },
  {
    name: 'Prioritize what matters',
    description: 'Keep important work visible and everything else out of the way.',
    icon: Target,
  },
  {
    name: 'See your progress',
    description: "Know what's done and what still needs your attention.",
    icon: LineChart,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-accent">Intelligent focus</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything you need for a clear day
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group flex flex-col items-start p-8 rounded-2xl bg-surface border border-border hover:border-border/80 transition-colors"
              >
                <div className="rounded-lg bg-background p-3 ring-1 ring-border group-hover:ring-accent/50 transition-colors">
                  <feature.icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <dt className="mt-6 font-semibold text-foreground text-lg">
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-muted-foreground flex-auto">
                  {feature.description}
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
