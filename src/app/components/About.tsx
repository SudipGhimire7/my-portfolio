import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const timeline = [
    {
      year: 'May 2024',
      title: 'Weather App',
      description: 'Built a weather application using JavaScript that fetches live weather data from an API — my first real-world JS project. 🌦️',
      lang: 'JavaScript',
      link: 'https://github.com/SudipGhimire7/weather-app',
    },
    {
      year: 'Dec 2025',
      title: 'Farmer Grievance Portal',
      description: 'Developed a PHP-based portal that allows farmers to submit grievances and track their resolution status online.',
      lang: 'PHP',
      link: 'https://github.com/SudipGhimire7/farmer-grievance-portal',
    },
    {
      year: 'Apr 2026',
      title: 'Mandapgiri Nepal',
      description: 'Crafted a modern travel & tourism landing page for a Nepal-based company using React, TypeScript, Tailwind CSS, and Framer Motion.',
      lang: 'TypeScript',
      link: 'https://github.com/SudipGhimire7/Mandapgiri-Nepal',
    },
    {
      year: 'Apr 2026',
      title: 'My Portfolio — Present',
      description: 'Designed and built this personal portfolio with Next.js and TypeScript to showcase projects, skills, and my dev journey.',
      lang: 'TypeScript',
      link: 'https://github.com/SudipGhimire7/my-portfolio',
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

                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-500/40 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <div className="text-sm text-blue-400">{item.year}</div>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">{item.lang}</span>
                    </div>
                    <h4 className="text-xl mb-2 group-hover:text-blue-400 transition-colors flex items-center gap-2">
                      {item.title}
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                    </h4>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
