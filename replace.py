import re

with open('app/page.tsx', 'r') as f:
    content = f.read()

# Find the start of the nav
start_nav = content.find('<animated.nav')

# Find the end of the home section
# The first section is id="home". So the first '</section>' after start_nav is the end of the home section.
end_home = content.find('</section>', start_nav) + len('</section>')

replacement = """<nav className="fixed top-0 w-full z-50 p-6 sm:p-10 mix-blend-difference text-white pointer-events-none">
        <div className="flex justify-between items-center max-w-7xl mx-auto pointer-events-auto">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-bold text-xl sm:text-2xl tracking-tight"
          >
            siddhartha412
          </button>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2"
            >
              <Menu className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Overlay Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-background text-foreground transition-transform duration-500 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex h-full flex-col md:flex-row">
          {/* Left Side - Links */}
          <div className="w-full md:w-1/2 p-10 flex flex-col justify-center items-start md:items-center relative">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 md:hidden p-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <div className="space-y-8 text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight">
              {[
                { name: "Home", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
                { name: "Projects", action: () => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" }) },
                { name: "About Me", action: () => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" }) },
              ].map((item) => (
                <button
                  key={item.name}
                  onClick={() => {
                    item.action()
                    setIsMobileMenuOpen(false)
                  }}
                  className="block hover:text-muted-foreground transition-colors text-left"
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Right Side - Socials Grid */}
          <div className="w-full md:w-1/2 h-full bg-[#0a0a0a] text-white hidden md:grid grid-cols-2 grid-rows-2 relative border-l border-white/10">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-10 right-10 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>

            <a href="https://github.com/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-b border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <Github className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Github</span>
            </a>
            <a href="mailto:contact@siddhartha412.com" className="border-b border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <Mail className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Email</span>
            </a>
            <a href="https://linkedin.com/in/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-white/10 flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <svg className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span className="text-xl">LinkedIn</span>
            </a>
            <a href="https://discord.com/users/1261577588669939755" target="_blank" rel="noopener noreferrer" className="flex flex-col items-start justify-center p-12 hover:bg-white/5 transition-colors group">
              <MessageCircle className="h-8 w-8 mb-4 group-hover:scale-110 transition-transform" />
              <span className="text-xl">Discord</span>
            </a>
          </div>

          {/* Mobile Socials */}
          <div className="md:hidden grid grid-cols-2 grid-rows-2 h-full bg-[#0a0a0a] text-white">
            <a href="https://github.com/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-b border-white/10 flex flex-col items-center justify-center p-6">
              <Github className="h-6 w-6 mb-2" />
              <span>Github</span>
            </a>
            <a href="mailto:contact@siddhartha412.com" className="border-b border-white/10 flex flex-col items-center justify-center p-6">
              <Mail className="h-6 w-6 mb-2" />
              <span>Email</span>
            </a>
            <a href="https://linkedin.com/in/siddhartha412" target="_blank" rel="noopener noreferrer" className="border-r border-white/10 flex flex-col items-center justify-center p-6">
              <svg className="h-6 w-6 mb-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              <span>LinkedIn</span>
            </a>
            <a href="https://discord.com/users/1261577588669939755" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center justify-center p-6">
              <MessageCircle className="h-6 w-6 mb-2" />
              <span>Discord</span>
            </a>
          </div>
        </div>
      </div>

      <section id="home" className="min-h-screen flex flex-col items-start justify-center px-4 sm:px-10 lg:px-20 relative overflow-hidden bg-background">
        {/* Intersecting Circles Background */}
        <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none opacity-40 dark:opacity-20">
          <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full border-[1px] border-foreground/30 -translate-x-1/4"></div>
          <div className="absolute w-[400px] h-[400px] sm:w-[600px] sm:h-[600px] md:w-[800px] md:h-[800px] rounded-full border-[1px] border-foreground/30 translate-x-1/4 translate-y-1/4"></div>
          {/* Small filled circle */}
          <div className="absolute w-4 h-4 sm:w-6 sm:h-6 rounded-full bg-foreground translate-y-16 -translate-x-8 sm:translate-y-32 sm:-translate-x-16"></div>
        </div>

        <div className="w-full z-10 pt-20 max-w-7xl mx-auto">
          <h1 className="text-[15vw] sm:text-[12vw] font-bold leading-[0.85] tracking-tighter uppercase font-sans mb-8">
            SIDDHARTHA
            <br />
            412
          </h1>

          <div className="border-t border-foreground/20 w-full pt-6 mb-8 flex flex-col gap-6 relative">
            <p className="text-xl sm:text-2xl font-medium tracking-wide">
              Web Developer & Minimalist Designer
            </p>
            
            {/* Some lines decoration on the right side from first image */}
            <div className="hidden md:flex flex-col gap-1 absolute right-0 top-6 items-end opacity-30">
              <div className="h-[1px] w-16 bg-foreground"></div>
              <div className="h-[1px] w-24 bg-foreground"></div>
              <div className="h-[1px] w-20 bg-foreground"></div>
              <div className="h-[1px] w-32 bg-foreground"></div>
              <div className="h-[1px] w-12 bg-foreground"></div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:bg-foreground hover:text-background transition-colors duration-300"
            >
              Get in Touch
            </button>
            <button
              onClick={() => document.getElementById("blogs")?.scrollIntoView({ behavior: "smooth" })}
              className="border border-foreground/20 text-foreground px-6 py-3 text-sm font-semibold tracking-widest uppercase hover:border-foreground transition-colors duration-300"
            >
              Blog
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <svg className="w-5 h-8 border border-foreground/50 rounded-full p-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="5" y="2" width="14" height="20" rx="7" />
            <path d="M12 6v4" strokeLinecap="round" />
          </svg>
          <span className="text-[9px] uppercase tracking-widest mt-2 text-foreground/70">Scroll</span>
        </div>
      </section>"""

new_content = content[:start_nav] + replacement + content[end_home:]

with open('app/page.tsx', 'w') as f:
    f.write(new_content)
print("Replaced!")
