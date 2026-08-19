import { motion } from 'framer-motion';
import { LayoutList, Target, CheckCircle2 } from 'lucide-react';

const features = [
  {
    name: 'Uncomplicate your productivity',
    description: 'FocusFlow gives you a simple and flexible way to manage your day without making productivity feel complicated. It helps you bring your tasks together, decide what deserves your attention, and keep track of your progress as you work.',
    icon: LayoutList,
    gridClass: 'md:col-span-2 md:w-3/4 mx-auto text-center items-center',
    textAlign: 'text-center',
  },
  {
    name: 'Organize & Adjust',
    description: 'You can organize important tasks, adjust your priorities when plans change, and quickly see what is completed and what still needs to be done.',
    icon: Target,
    gridClass: 'col-span-1',
    textAlign: 'text-left',
  },
  {
    name: 'Stay clear & focused',
    description: "Whether you're planning your day, working toward a deadline, or wrapping things up in the evening, FocusFlow keeps everything clear and easy to manage so you can spend less time organizing your work and more time actually getting it done.",
    icon: CheckCircle2,
    gridClass: 'col-span-1',
    textAlign: 'text-left',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="label-mono text-accent">Intelligent focus</h2>
          <p className="mt-4 text-4xl sm:text-5xl display-serif text-foreground">
            Everything you need for a clear day
          </p>
        </div>
        
        {/* Triangle Structure: 1 on top (span 2), 2 on bottom */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-5xl">
          <dl className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`group flex flex-col p-8 md:p-12 rounded-2xl bg-surface border border-border hover:border-border/80 transition-colors ${feature.gridClass}`}
              >
                <div className={`bg-background p-3 ring-1 ring-border group-hover:ring-accent/50 transition-colors w-fit ${feature.textAlign === 'text-center' ? 'mx-auto' : ''}`}>
                  <feature.icon className="h-6 w-6 text-foreground" aria-hidden="true" />
                </div>
                <dt className={`mt-8 display-serif text-foreground text-2xl md:text-3xl ${feature.textAlign}`}>
                  {feature.name}
                </dt>
                <dd className={`mt-4 body-mono text-muted-foreground leading-relaxed flex-auto ${feature.textAlign}`}>
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
