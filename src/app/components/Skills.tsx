import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';
import { Code2, Database, Globe, Wrench } from 'lucide-react';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: ['JavaScript', 'TypeScript', 'PHP', 'HTML5', 'CSS3'],
    },
    {
      title: 'Frameworks & Libraries',
      icon: Globe,
      color: 'from-purple-500 to-pink-500',
      skills: ['React', 'Next.js', 'Tailwind CSS', 'Bootstrap 5', 'Framer Motion', 'Vite'],
    },
    {
      title: 'Database & Backend',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: ['MySQL', 'PHP 7.4+', 'REST APIs', 'Chart.js'],
    },
    {
      title: 'Tools & Workflow',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: ['Git', 'GitHub', 'XAMPP', 'VS Code', 'npm / pnpm'],
    },
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Tools I use to build great products</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + categoryIndex * 0.1 }}
                className="group"
              >
                <div className="h-full p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-to-br ${category.color} rounded-xl`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          duration: 0.4,
                          delay: 0.3 + categoryIndex * 0.1 + skillIndex * 0.05,
                        }}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${category.color}`} />
                        <span className="text-sm">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
