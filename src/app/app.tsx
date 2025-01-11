import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTwitter, FaGithub, FaPython, FaJsSquare } from 'react-icons/fa';
import { SiReact, SiCss3, SiHtml5, SiTailwindcss, SiBootstrap, SiExpress, SiElectron, SiMongodb, SiNodedotjs } from 'react-icons/si';

const AnimateWhenVisible = ({ children, animation }: { children: React.ReactNode, animation: 'fade' | 'slideLeft' | 'slideRight' }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

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
  };

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
  );
};

function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      {/* Header Section */}
      <section className="h-screen flex flex-col justify-center items-center text-center px-4">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold"
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
          className="mt-4 text-lg md:text-2xl text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Turning Bugs into Features
        </motion.p>
        <motion.img
          src="/img/pfp.webp"
          alt="Siddhartha412 Avatar"
          className="w-32 h-32 md:w-56 md:h-56 rounded-full mt-8 border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <a href="#about" className="mt-8 inline-block text-blue-400 hover:text-blue-300 transition-colors duration-300">
            Scroll Down ↓
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <AnimateWhenVisible animation="fade">
        <section id="about" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">About Me</h2>
          <AnimateWhenVisible animation="slideLeft">
            <p className="max-w-xl text-base md:text-xl text-gray-300 leading-relaxed">
              I am a full-stack developer with a passion for turning challenges into opportunities. As the founder of <span className="text-blue-500">Snipe</span>, I am committed to transforming bugs into features that enhance development efficiency. My journey has been focused on innovation, problem-solving, and creating seamless solutions for developers.
            </p>
          </AnimateWhenVisible>
        </section>
      </AnimateWhenVisible>

      {/* Skills Section */}
      <AnimateWhenVisible animation="fade">
        <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { name: 'React', icon: <SiReact /> },
              { name: 'Python', icon: <FaPython /> },
              { name: 'CSS', icon: <SiCss3 /> },
              { name: 'HTML', icon: <SiHtml5 /> },
              { name: 'JavaScript', icon: <FaJsSquare /> },
              { name: 'Node.js', icon: <SiNodedotjs /> },
              { name: 'Electron JS', icon: <SiElectron /> },
              { name: 'Express JS', icon: <SiExpress /> },
              { name: 'MongoDB', icon: <SiMongodb /> },
              { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
              { name: 'Bootstrap', icon: <SiBootstrap /> },
            ].map((skill, index) => (
              <AnimateWhenVisible key={skill.name} animation={index % 2 === 0 ? 'slideLeft' : 'slideRight'}>
                <motion.div
                  className="bg-white text-black rounded-lg p-4 md:p-6 shadow-lg"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="text-3xl md:text-4xl">{skill.icon}</div>
                    <h3 className="text-lg md:text-xl font-semibold">{skill.name}</h3>
                  </div>
                </motion.div>
              </AnimateWhenVisible>
            ))}
          </div>
        </section>
      </AnimateWhenVisible>

      {/* Get in Touch Section */}
      <section id="contact" className="min-h-screen flex flex-col justify-center items-center text-center px-4 py-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Get in Touch</h2>
        <div className="flex space-x-8">
          <AnimateWhenVisible animation="slideLeft">
            <motion.a 
              href="https://github.com/siddhartha412" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Siddhartha412 GitHub"
              className="text-4xl hover:text-sky-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaGithub />
            </motion.a>
          </AnimateWhenVisible>
          <AnimateWhenVisible animation="slideRight">
            <motion.a 
              href="https://twitter.com/siddhartha412" 
              target="_blank" 
              rel="noopener noreferrer" 
              aria-label="Siddhartha412 Twitter"
              className="text-4xl hover:text-sky-400 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <FaTwitter />
            </motion.a>
          </AnimateWhenVisible>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="text-gray-400 py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Siddhartha412. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;
