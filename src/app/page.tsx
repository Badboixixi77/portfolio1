import Layout from '@/components/Layout'
import Image from 'next/image'

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh] relative">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"></div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
                <span className="block text-gray-300">Hi, I&apos;m</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                  Maxwell Okosun
                </span>
              </h1>
              
              <div className="max-w-2xl mx-auto">
                <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  <span className="text-purple-400">Frontend Developer</span> crafting beautiful and functional web experiences
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <a 
                    href="#projects" 
                    className="group w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>View Projects</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a 
                    href="#contact" 
                    className="group w-full sm:w-auto border-2 border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span>Contact Me</span>
                    <svg 
                      className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 4v16m0-16l8 8-8 8" />
                    </svg>
                  </a>
                </div>

                {/* Tech Stack Icons */}
                <div className="mt-12 flex flex-wrap justify-center gap-6 items-center">
                  <span className="text-gray-400 text-sm">Tech Stack:</span>
                  <div className="flex gap-6">
                    <Image 
                      src="/next.svg" 
                      alt="Next.js" 
                      width={32} 
                      height={32} 
                      className="opacity-70 hover:opacity-100 transition-opacity" 
                    />
                    <Image 
                      src="/react.svg" 
                      alt="React" 
                      width={32} 
                      height={32} 
                      className="opacity-70 hover:opacity-100 transition-opacity" 
                    />
                    <Image 
                      src="/typescript.svg" 
                      alt="TypeScript" 
                      width={32} 
                      height={32} 
                      className="opacity-70 hover:opacity-100 transition-opacity" 
                    />
                    <Image 
                      src="/tailwind.svg" 
                      alt="Tailwind CSS" 
                      width={32} 
                      height={32} 
                      className="opacity-70 hover:opacity-100 transition-opacity" 
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <svg 
                className="w-6 h-6 text-purple-400" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </section>
        </div>

        {/* About Section */}
        <section id="about" className="py-16 sm:py-20 bg-slate-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">About Me</h2>
            <div className="max-w-3xl mx-auto">
              <p className="text-base sm:text-lg text-gray-300 mb-4 sm:mb-6">
                I am Maxwell Okosun, a dedicated frontend developer specializing in modern web technologies. With a strong focus on 
                creating responsive and accessible web applications, I combine technical expertise with a keen eye for design to 
                deliver exceptional user experiences.
              </p>
              <p className="text-base sm:text-lg text-gray-300">
                My commitment to clean code and best practices, combined with continuous learning and adaptation to new technologies, 
                enables me to build scalable and maintainable solutions that meet modern web standards.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Frontend Skills & Technologies</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Next.js */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Next.js</h3>
                  <p className="text-gray-300 text-sm mb-4">Building modern, performant web applications with server-side rendering and static site generation.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">SSR</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">SSG</span>
                  </div>
                </div>
              </div>

              {/* React */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">React</h3>
                  <p className="text-gray-300 text-sm mb-4">Creating dynamic user interfaces with component-based architecture and efficient state management.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Hooks</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Context</span>
                  </div>
                </div>
              </div>

              {/* TypeScript */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">TypeScript</h3>
                  <p className="text-gray-300 text-sm mb-4">Writing type-safe code with enhanced IDE support and better development experience.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Types</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Interfaces</span>
                  </div>
                </div>
              </div>

              {/* Tailwind CSS */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">Tailwind CSS</h3>
                  <p className="text-gray-300 text-sm mb-4">Building responsive and modern UIs with utility-first CSS framework.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Responsive</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Custom</span>
                  </div>
                </div>
              </div>

              {/* HTML5 & CSS3 */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">HTML5 & CSS3</h3>
                  <p className="text-gray-300 text-sm mb-4">Creating semantic markup and modern styling with latest web standards.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">SASS</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Flexbox</span>
                  </div>
                </div>
              </div>

              {/* JavaScript */}
              <div className="group relative bg-gradient-to-br from-purple-900/50 to-slate-900/50 p-6 rounded-2xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold mb-2 text-purple-400">JavaScript</h3>
                  <p className="text-gray-300 text-sm mb-4">Developing interactive web applications with modern ES6+ features.</p>
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">Advanced</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">ES6+</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">DOM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 sm:py-20 bg-slate-800/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Featured Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  title: 'Kama',
                  description: 'A modern web application showcasing my frontend development skills with a focus on user experience and responsive design.',
                  tech: ['React', 'JavaScript', 'CSS3'],
                  image: '/kama.png',
                  github: 'https://github.com/Badboixixi77/kama-main.git',
                  live: 'https://kama-main.vercel.app'
                },
                {
                  title: 'Buysome',
                  description: 'An e-commerce platform built with Next.js, featuring a modern UI and seamless shopping experience.',
                  tech: ['Next.js', 'React', 'Tailwind CSS'],
                  image: '/buysome.png',
                  github: 'https://github.com/Badboixixi77/buysome.git',
                  live: 'https://buysome.vercel.app'
                }
              ].map((project) => (
                <div 
                  key={project.title} 
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300"
                >
                  <div className="aspect-video relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span 
                          key={tech} 
                          className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs sm:text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          Code
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-purple-400 transition-colors flex items-center gap-2"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 sm:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Get In Touch</h2>
            <div className="max-w-2xl mx-auto">
              <form className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-slate-800/50 border border-slate-700/50 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}
