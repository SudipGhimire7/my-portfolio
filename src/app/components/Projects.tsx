import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { useInView } from './hooks/useInView';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });

  const projects = [
    {
      title: 'Mandapgiri Nepal',
      destination: 'TypeScript',
      description: 'Travel and tourism website for a Nepal-based tour company built with React, TypeScript, Tailwind CSS, and Framer Motion.',
      image: 'https://images.unsplash.com/photo-1762968117381-3e37cf5bcff2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['React', 'TypeScript', 'Tailwind', 'Framer Motion'],
      liveUrl: 'https://github.com/SudipGhimire7/Mandapgiri-Nepal',
      githubUrl: 'https://github.com/SudipGhimire7/Mandapgiri-Nepal',
    },
    {
      title: 'Personal Portfolio',
      destination: 'TypeScript',
      description: 'My personal portfolio website to showcase my projects and skills, featuring a modern dynamic UI.',
      image: '/portfolio-screenshot.png',
      tags: ['React', 'TypeScript', 'Tailwind'],
      liveUrl: 'https://github.com/SudipGhimire7/my-portfolio',
      githubUrl: 'https://github.com/SudipGhimire7/my-portfolio',
    },
    {
      title: 'Farmer Grievance Portal',
      destination: 'PHP',
      description: 'A portal designed to help farmers voice their grievances and address community issues efficiently.',
      image: 'https://i.pinimg.com/736x/ae/b2/24/aeb2241ce346effb26f2608f65fda82b.jpg',
      tags: ['PHP', 'MySQL', 'Web'],
      liveUrl: 'https://github.com/SudipGhimire7/farmer-grievance-portal',
      githubUrl: 'https://github.com/SudipGhimire7/farmer-grievance-portal',
    },

    {
      title: 'Weather App',
      destination: 'JavaScript',
      description: 'Real-time weather application providing accurate forecasts and environmental conditions.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
      tags: ['JavaScript', 'API', 'HTML/CSS'],
      liveUrl: 'https://github.com/SudipGhimire7/weather-app',
      githubUrl: 'https://github.com/SudipGhimire7/weather-app',
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-32 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Projects worth exploring</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300">
                {/* Project image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  {/* Destination badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/10 rounded-full text-xs">
                    📍 {project.destination}
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-2xl mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-lg text-xs text-blue-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">Live Demo</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex items-center justify-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all duration-300"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
