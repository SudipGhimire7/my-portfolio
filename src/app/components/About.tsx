import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const timeline = [
    {
      year: '2020',
      title: 'Started Learning',
      description: 'Began my journey into web development with HTML, CSS, and JavaScript',
    },
    {
      year: '2021',
      title: 'First Project',
      description: 'Built my first full-stack application using React and Node.js',
    },
    {
      year: '2023',
      title: 'Major Projects',
      description: 'Delivered production-ready web applications for clients and open source',
    },
    {
      year: '2026',
      title: 'Present',
      description: 'Creating modern web experiences with cutting-edge technologies',
    },
  ];

  return (
    <section id="about" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              My Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg">From learner to builder</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
              <h3 className="text-2xl mb-4">About Me</h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                I'm a passionate full-stack developer from Nepal, inspired by the peaks of the
                Himalayas to reach new heights in web development. I specialize in building
                scalable, user-centric applications that solve real-world problems.
              </p>
              <p className="text-gray-400 leading-relaxed">
                My approach combines technical excellence with creative problem-solving,
                treating each project as a new summit to conquer. I believe in writing clean,
                maintainable code and creating experiences that users love.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border border-blue-500/20 rounded-xl">
                <div className="text-3xl mb-2">20+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border border-purple-500/20 rounded-xl">
                <div className="text-3xl mb-2">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className="relative pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-2 w-5 h-5 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 border-4 border-black" />

                  <div className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                    <div className="text-sm text-blue-400 mb-1">{item.year}</div>
                    <h4 className="text-xl mb-2 group-hover:text-blue-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
