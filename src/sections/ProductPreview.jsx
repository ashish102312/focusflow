import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Inbox, CheckCircle2, Circle, MoreHorizontal } from 'lucide-react';

export default function ProductPreview() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Finish assessment', completed: true },
    { id: 2, text: 'Review project', completed: false },
    { id: 3, text: 'Read documentation', completed: false },
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const totalCount = tasks.length;
  const progressPercentage = (completedCount / totalCount) * 100;

  return (
    <section id="preview" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto max-w-5xl rounded-xl border border-border bg-primary shadow-2xl overflow-hidden"
        >
          {/* App Header (Mac-like) */}
          <div className="flex items-center px-4 py-3 border-b border-border bg-primary/50">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
              <div className="w-3 h-3 rounded-full bg-border" />
            </div>
            <div className="mx-auto text-xs font-medium text-muted-foreground">FocusFlow</div>
          </div>

          <div className="flex flex-col md:flex-row h-[500px]">
            {/* Sidebar */}
            <div className="hidden md:flex flex-col w-64 border-r border-border bg-muted/20 p-4">
              <div className="space-y-1">
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-accent/10 text-foreground font-medium text-sm">
                  <Calendar className="w-4 h-4" />
                  My Day
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors text-sm">
                  <Inbox className="w-4 h-4" />
                  Inbox
                </a>
                <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted/50 transition-colors text-sm">
                  <CheckCircle2 className="w-4 h-4" />
                  Completed
                </a>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 p-6 md:p-10 bg-primary overflow-y-auto">
              <div className="max-w-2xl">
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">Good afternoon</h2>
                <p className="text-muted-foreground mt-1 text-sm">Here's what matters today.</p>

                <div className="mt-10">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Today
                  </h3>
                  
                  <div className="space-y-3">
                    <AnimatePresence>
                      {tasks.map((task) => (
                        <motion.div
                          key={task.id}
                          layout
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`group flex items-start gap-3 p-3 rounded-lg border transition-all cursor-pointer ${
                            task.completed
                              ? 'border-border bg-muted/10 hover:bg-muted/30'
                              : 'border-transparent hover:border-border hover:bg-muted/10'
                          }`}
                          onClick={() => toggleTask(task.id)}
                        >
                          <div className="mt-0.5">
                            <motion.div
                              initial={false}
                              animate={{ scale: task.completed ? 1.1 : 1 }}
                              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                            >
                              {task.completed ? (
                                <CheckCircle2 className="w-5 h-5 text-muted-foreground" />
                              ) : (
                                <Circle className="w-5 h-5 text-muted-foreground" />
                              )}
                            </motion.div>
                          </div>
                          <div className="flex-1">
                            <p
                              className={`text-sm font-medium transition-all duration-300 ${
                                task.completed ? 'text-foreground line-through opacity-50' : 'text-foreground'
                              }`}
                            >
                              {task.text}
                            </p>
                          </div>
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="mt-10">
                  <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Priority
                  </h3>
                  <div className="w-full bg-border rounded-full h-2 overflow-hidden">
                    <motion.div
                      className="bg-foreground h-full rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercentage}%` }}
                      transition={{ type: 'spring', stiffness: 50, damping: 15 }}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">
                    {completedCount} of {totalCount} tasks completed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
