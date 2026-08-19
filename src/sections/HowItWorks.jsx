import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Capture',
    description: 'Add what needs to get done.',
  },
  {
    number: '02',
    title: 'Prioritize',
    description: 'Choose what deserves your attention.',
  },
  {
    number: '03',
    title: 'Focus',
    description: 'Work through your day with clarity.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-4xl display-serif text-foreground sm:text-5xl">
            How it works
          </h2>
        </div>

        <div className="mx-auto max-w-4xl relative">
          {/* Connecting Line (hidden on mobile, visible on md+) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-border" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Number Badge */}
                <div className="w-12 h-12 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-semibold text-lg z-10 mb-6">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-2xl display-serif text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground body-mono">
                  {step.description}
                </p>
                
                {/* Mobile connecting line */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-[1px] h-12 bg-border my-6" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
