import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Lightbulb, Palette, Code, Rocket } from 'lucide-react';

export function WorkProcess() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const steps = [
    {
      number: '01',
      title: 'Idea & Research',
      description: 'Understanding requirements and planning the solution',
      icon: Lightbulb,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      number: '02',
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces',
      icon: Palette,
      color: 'from-pink-500 to-purple-500',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Building scalable and performant applications',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      number: '04',
      title: 'Testing & Deployment',
      description: 'Ensuring quality and launching to production',
      icon: Rocket,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              How I Build
            </span>
          </h2>
          <p className="text-gray-400 text-lg">My development process from concept to launch</p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-px">
            <div className="w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                  className="relative"
                >
                  {/* Connection dot - desktop */}
                  <div className="hidden lg:block absolute top-20 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-black z-10" />

                  <div className="text-center">
                    {/* Icon */}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.15 }}
                      className="inline-block mb-6"
                    >
                      <div className={`relative p-6 bg-gradient-to-br ${step.color} rounded-2xl`}>
                        <Icon className="w-10 h-10 text-white" />
                        {/* Number badge */}
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-black border border-white/20 rounded-full flex items-center justify-center text-xs">
                          {step.number}
                        </div>
                      </div>
                    </motion.div>

                    {/* Content */}
                    <h3 className="text-xl mb-3">{step.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
