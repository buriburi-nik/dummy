import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Palette,
  Database,
  Smartphone,
  Globe,
  Zap,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface Skill {
  name: string;
  level: number;
  category: string;
  icon?: string;
  experience: string;
  projects: number;
}

const skillCategories = [
  { id: "all", label: "All Skills", icon: Globe },
  { id: "frontend", label: "Frontend", icon: Code },
  { id: "styling", label: "Styling", icon: Palette },
  { id: "tools", label: "Tools", icon: Zap },
  { id: "mobile", label: "Mobile", icon: Smartphone },
];

const skills: Skill[] = [
  // Frontend Technologies
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    experience: "2+ years",
    projects: 6,
  },
  {
    name: "React.js",
    level: 85,
    category: "frontend",
    experience: "2+ years",
    projects: 5,
  },
  {
    name: "HTML5",
    level: 95,
    category: "frontend",
    experience: "3+ years",
    projects: 6,
  },
  {
    name: "TypeScript",
    level: 80,
    category: "frontend",
    experience: "1+ years",
    projects: 3,
  },

  // Styling & Design
  {
    name: "CSS3",
    level: 90,
    category: "styling",
    experience: "3+ years",
    projects: 6,
  },
  {
    name: "Tailwind CSS",
    level: 85,
    category: "styling",
    experience: "1+ years",
    projects: 4,
  },
  {
    name: "Responsive Design",
    level: 88,
    category: "styling",
    experience: "2+ years",
    projects: 6,
  },
  {
    name: "Figma",
    level: 75,
    category: "styling",
    experience: "1+ years",
    projects: 3,
  },

  // Tools & Technologies
  {
    name: "Git & GitHub",
    level: 85,
    category: "tools",
    experience: "2+ years",
    projects: 6,
  },
  {
    name: "VS Code",
    level: 90,
    category: "tools",
    experience: "3+ years",
    projects: 6,
  },
  {
    name: "npm/yarn",
    level: 80,
    category: "tools",
    experience: "2+ years",
    projects: 5,
  },
  {
    name: "Webpack/Vite",
    level: 70,
    category: "tools",
    experience: "1+ years",
    projects: 3,
  },

  // Backend & APIs
  {
    name: "Node.js",
    level: 75,
    category: "frontend",
    experience: "1+ years",
    projects: 2,
  },
  {
    name: "REST APIs",
    level: 80,
    category: "frontend",
    experience: "2+ years",
    projects: 4,
  },

  // Mobile
  {
    name: "Android Development",
    level: 70,
    category: "mobile",
    experience: "1+ years",
    projects: 1,
  },
  {
    name: "Firebase",
    level: 75,
    category: "mobile",
    experience: "1+ years",
    projects: 1,
  },
];

const certifications = [
  {
    title: "React.js Fundamentals",
    issuer: "Online Course",
    year: "2023",
    icon: Award,
  },
  {
    title: "JavaScript Advanced Concepts",
    issuer: "Self-Learning",
    year: "2022",
    icon: Star,
  },
  {
    title: "Frontend Development",
    issuer: "NIT Kurukshetra",
    year: "2024",
    icon: TrendingUp,
  },
];

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) =>
      selectedCategory === "all" || skill.category === selectedCategory,
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 space-y-16"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="font-display font-bold text-4xl md:text-5xl gradient-text">
          Skills & Expertise
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        variants={itemVariants}
        className="flex flex-wrap justify-center gap-2"
      >
        {skillCategories.map((category) => {
          const Icon = category.icon;
          return (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "ghost"}
              onClick={() => setSelectedCategory(category.id)}
              className={`
                px-4 py-2 rounded-xl transition-all duration-300
                ${
                  selectedCategory === category.id
                    ? "bg-accent text-accent-foreground shadow-neon"
                    : "hover:bg-white/10"
                }
              `}
            >
              <Icon size={16} className="mr-2" />
              {category.label}
            </Button>
          );
        })}
      </motion.div>

      {/* Skills Grid */}
      <motion.div variants={itemVariants} className="space-y-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={skillVariants}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="group"
              >
                <GlassCard className="p-6 hover:shadow-neon transition-all duration-300">
                  <div className="space-y-4">
                    {/* Skill Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="font-display font-semibold text-lg">
                        {skill.name}
                      </h3>
                      <Badge className="bg-accent/20 text-accent">
                        {skill.level}%
                      </Badge>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-accent to-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                        />
                      </div>
                    </div>

                    {/* Skill Details */}
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{skill.experience}</span>
                      <span>{skill.projects} projects</span>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Skill Summary */}
      <motion.div
        variants={itemVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
      >
        <GlassCard className="p-6 text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center mx-auto mb-4">
            <Code size={28} className="text-white" />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">
            Frontend Focus
          </h3>
          <p className="text-muted-foreground text-sm">
            Specialized in modern frontend technologies with React.js ecosystem
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
            <Palette size={28} className="text-white" />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">
            Design Minded
          </h3>
          <p className="text-muted-foreground text-sm">
            Strong focus on UI/UX principles and responsive design patterns
          </p>
        </GlassCard>

        <GlassCard className="p-6 text-center">
          <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-4">
            <TrendingUp size={28} className="text-white" />
          </div>
          <h3 className="font-display font-semibold text-xl mb-2">
            Always Learning
          </h3>
          <p className="text-muted-foreground text-sm">
            Continuously improving and staying updated with latest technologies
          </p>
        </GlassCard>
      </motion.div>

      {/* Certifications & Learning */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h2 className="font-display font-semibold text-3xl text-center">
          Learning Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                className="group"
              >
                <GlassCard className="p-6 text-center hover:shadow-soft transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-2">
                    {cert.issuer}
                  </p>
                  <Badge variant="secondary" className="bg-white/10">
                    {cert.year}
                  </Badge>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};
