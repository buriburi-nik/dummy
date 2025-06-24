import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";

const titles = [
  "Full-Stack Developer",
  "React.js Specialist",
  "MERN Stack Developer",
  "Mathematics Graduate",
];

export const Hero: React.FC = () => {
  const [currentTitle, setCurrentTitle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % titles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-5xl mx-auto text-center space-y-8 z-10"
      >
        {/* Greeting */}
        <motion.div variants={itemVariants} className="space-y-2">
          <motion.p
            className="text-accent font-medium text-lg tracking-wide"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            className="font-display font-bold text-display-lg md:text-display-md sm:text-display-sm gradient-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Priya Maity
          </motion.h1>
        </motion.div>

        {/* Animated Title */}
        <motion.div
          variants={itemVariants}
          className="h-16 flex items-center justify-center"
        >
          <motion.h2
            key={currentTitle}
            variants={titleVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.5 }}
            className="text-2xl md:text-3xl font-display font-semibold text-foreground/80"
          >
            {titles[currentTitle]}
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
        >
          I'm an aspiring Full-Stack Developer with a strong foundation in
          JavaScript, React.js, Node.js, and MongoDB. With practical experience
          building real-world applications and 50+ DSA challenges completed, I
          create responsive, scalable, and user-friendly digital solutions.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            size="lg"
            className="group relative overflow-hidden bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-medium rounded-xl shadow-neon hover:shadow-neon-purple transition-all duration-300 magnetic"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform duration-200"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            className="group px-8 py-4 text-lg font-medium rounded-xl border border-border hover:bg-white/5 hover:border-accent/50 transition-all duration-300"
          >
            <span className="flex items-center gap-2">
              <Download size={20} />
              Download CV
            </span>
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div variants={itemVariants} className="pt-12">
          <GlassCard className="p-6 max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <motion.div
                  className="text-2xl md:text-3xl font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  4+
                </motion.div>
                <p className="text-sm text-muted-foreground">Projects</p>
              </div>

              <div className="space-y-2">
                <motion.div
                  className="text-2xl md:text-3xl font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  50+
                </motion.div>
                <p className="text-sm text-muted-foreground">DSA Solved</p>
              </div>

              <div className="space-y-2">
                <motion.div
                  className="text-2xl md:text-3xl font-bold gradient-text"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  M.Sc
                </motion.div>
                <p className="text-sm text-muted-foreground">Mathematics</p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center space-x-6 pt-8"
        >
          {[
            {
              icon: Github,
              href: "https://github.com/priyamaity",
              label: "GitHub",
            },
            {
              icon: ExternalLink,
              href: "https://linkedin.com/in/priya-maity",
              label: "LinkedIn",
            },
          ].map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-xl hover:bg-white/10 transition-colors duration-200 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.1 + index * 0.1 }}
            >
              <link.icon
                size={24}
                className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
              />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent/10 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          animate={{ opacity: [1, 0.3, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-accent rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
