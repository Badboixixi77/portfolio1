import Layout from '@/components/Layout'

export default function Home() {
  return (
    <Layout>
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <section className="flex flex-col items-center justify-center min-h-[85vh] sm:min-h-[80vh]">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-center mb-4 sm:mb-6">
              Hi, I&apos;m <span className="text-purple-400">Maxwell Okosun</span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 text-center mb-6 sm:mb-8 px-4">
              Crafting Digital Experiences | Next.js Developer | UI/UX Innovator
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
              <button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors">
                View Projects
              </button>
              <a 
                href="#contact" 
                className="w-full sm:w-auto border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-6 py-3 rounded-lg transition-colors text-center"
              >
                Contact Me
              </a>
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
                  title: 'Project 1',
                  description: 'A modern web application built with React and TypeScript',
                  tech: ['React', 'TypeScript', 'Tailwind CSS'],
                },
                {
                  title: 'Project 2',
                  description: 'Full-stack application with real-time features',
                  tech: ['Next.js', 'Node.js', 'MongoDB'],
                },
                {
                  title: 'Project 3',
                  description: 'E-commerce platform with modern UI/UX',
                  tech: ['React', 'Redux', 'Stripe'],
                },
              ].map((project) => (
                <div key={project.title} className="bg-slate-900/50 backdrop-blur-sm rounded-lg overflow-hidden border border-slate-700/50 hover:bg-slate-800/50 transition-colors">
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 text-sm sm:text-base">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-xs sm:text-sm">
                          {tech}
                        </span>
                      ))}
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
