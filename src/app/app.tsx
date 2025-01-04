import { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaTwitter, FaLinkedin, FaPython, FaJsSquare } from 'react-icons/fa'
import { SiReact, SiCss3, SiHtml5, SiTailwindcss, SiBootstrap, SiExpress, SiElectron, SiMongodb } from 'react-icons/si'

const AnimateWhenVisible = ({ children, animation }: { children: React.ReactNode, animation: 'fade' | 'slideLeft' | 'slideRight' }) => {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants = {
    fade: {
      visible: { opacity: 1, y: 0 },
      hidden: { opacity: 0, y: 50 }
    },
    slideLeft: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: -50 }
    },
    slideRight: {
      visible: { opacity: 1, x: 0 },
      hidden: { opacity: 0, x: 50 }
    }
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5, delay: 0.2 }}
      variants={variants[animation]}
    >
      {children}
    </motion.div>
  )
}

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Siddhartha412
          </span>
        </motion.h1>
        <motion.p 
          className="mt-4 text-xl md:text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Founder of <span className="text-blue-500">Snipe</span> | Turning Bugs into Features
        </motion.p>
        <motion.img
          src="/src/img/pfp.webp" // Path to your local image
          alt="Siddhartha412 Avatar"
          className="w-40 h-40 md:w-56 md:h-56 rounded-full mt-8 border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#about" className="mt-12 inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Scroll Down ↓
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimateWhenVisible animation="fade">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Me</h2>
          <AnimateWhenVisible animation="slideLeft">
            <p className="max-w-2xl text-lg md:text-xl text-gray-300 leading-relaxed">
              I'm a passionate developer and entrepreneur, always looking for new challenges and opportunities to innovate. 
              With a keen eye for detail and a love for clean, efficient code, I strive to create solutions that make a difference.
              My journey in tech has been driven by curiosity and a desire to push boundaries.
            </p>
          </AnimateWhenVisible>
        </section>
      </AnimateWhenVisible>

      {/* Skills Section */}
      <AnimateWhenVisible animation="fade">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: 'React', icon: <SiReact /> },
              { name: 'Python', icon: <FaPython /> },
              { name: 'CSS', icon: <SiCss3 /> },
              { name: 'HTML', icon: <SiHtml5 /> },
              { name: 'JavaScript', icon: <FaJsSquare /> },
              { name: 'Node.js', icon: <FaGithub /> },
              { name: 'Electron JS', icon: <SiElectron /> },
              { name: 'Express JS', icon: <SiExpress /> },
              { name: 'MongoDB', icon: <SiMongodb /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
              { name: 'Bootstrap', icon: <SiBootstrap /> },
            ].map((skill, index) => (
              <AnimateWhenVisible key={skill.name} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}>
                <motion.div
                  className="bg-white text-black rounded-lg p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl text-black">{skill.icon}</div>
                    <h3 className="text-xl md:text-2xl font-semibold text-black">{skill.name}</h3>
                  </div>
                </motion.div>
              </AnimateWhenVisible>
            ))}
          </div>
        </section>
      </AnimateWhenVisible>

      {/* Contact Section */}
      <AnimateWhenVisible animation="fade">
        <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
          <div className="flex space-x-8">
            <AnimateWhenVisible animation="slideLeft">
              <motion.a 
                href="https://github.com/siddhartha412" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl md:text-5xl hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaGithub />
              </motion.a>
            </AnimateWhenVisible>
            <AnimateWhenVisible animation="fade">
              <motion.a 
                href="https://twitter.com/siddhartha412" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl md:text-5xl hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaTwitter />
              </motion.a>
            </AnimateWhenVisible>
            <AnimateWhenVisible animation="slideRight">
              <motion.a 
                href="https://linkedin.com/in/siddhartha412" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-4xl md:text-5xl hover:text-blue-400 transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <FaLinkedin />
              </motion.a>
            </AnimateWhenVisible>
          </div>
        </section>
      </AnimateWhenVisible>
    </div>
  )
}

export default App
