import { useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const About = () => {
  const sectionRef = useRef(null);
  const scrollRef = useRef(null);
  const isInView = useInView(sectionRef);

  useEffect(() => {
    // When the section goes out of view, reset the scroll position
    if (!isInView && scrollRef.current) {
      scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [isInView]);

  const points = [
    {
      id: "01",
      text: "FocusFlow is a simple productivity workspace designed to help you organize your day and focus on the tasks that matter most."
    },
    {
      id: "02",
      text: "When you have assignments, meetings, personal tasks, and deadlines competing for your attention, it can be difficult to know where to start."
    },
    {
      id: "03",
      text: "We bring your tasks and priorities together in one clear place, so you can decide what is most important without constantly switching tools."
    },
    {
      id: "04",
      text: "FocusFlow is designed to stay simple as your day changes. You can quickly adjust priorities, mark tasks as complete, and move less urgent work to later."
    },
    {
      id: "05",
      text: "Whether you're managing a few important tasks or a packed schedule, the workspace gives you the flexibility to adapt while keeping your attention on your goals."
    }
  ];

  return (
    <section ref={sectionRef} id="about" className="py-24 px-6 md:px-12 w-full max-w-7xl mx-auto flex flex-col items-center justify-center">
      <div className="w-full max-w-3xl flex flex-col md:flex-row gap-12 items-start justify-between">
        
        {/* Left side title */}
        <div className="md:w-1/3 pt-4">
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight">
            About <br />FocusFlow
          </h2>
          <p className="mt-4 text-muted-foreground text-sm opacity-80">
            Scroll to read our philosophy.
          </p>
        </div>

        {/* Right side scroll area with fade */}
        <div className="md:w-2/3 w-full border border-border/60 p-6 md:p-8 bg-surface/20">
          {/* Scroll Area Wrapper */}
          <div ref={scrollRef} className="scroll-fade-y h-[320px] overflow-y-auto pr-4 pb-8">
            <div className="space-y-6 pt-4 pb-20">
              {points.map((point) => (
                <div key={point.id} className="flex gap-4 border-b border-border/50 pb-6 group">
                  <div className="font-mono text-sm opacity-40 group-hover:opacity-100 transition-opacity">
                    {point.id}
                  </div>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {point.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
