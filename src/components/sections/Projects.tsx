import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Code,
  Palette,
  Database,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "fullstack" | "design";
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    title: "FoodForia",
    description:
      "Innovative platform for exploring food recipes and placing orders",
    longDescription:
      "An innovative platform for exploring food recipes and placing orders. Features integrated state management and secure user authentication to ensure a seamless experience. Built with React.js and Firebase for real-time data management and user authentication.",
    image: "/api/placeholder/600/400",
    tags: ["React.js", "Firebase", "JavaScript", "HTML", "CSS"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Netflix Clone",
    description: "Full-stack streaming platform with TMDB API integration",
    longDescription:
      "Built a full-stack streaming platform with TMDB API integration, user authentication, and a personalized watchlist. Designed a responsive UI with Tailwind CSS for seamless cross-device experience. Features modern authentication system and dynamic content loading.",
    image: "/api/placeholder/600/400",
    tags: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Geek Food",
    description: "Modern food ordering platform with dynamic UI",
    longDescription:
      "Building a modern food ordering platform featuring a dynamic UI for an enhanced user experience. Implementing interactive components and seamless navigation to create an intuitive food ordering experience with responsive design.",
    image: "/api/placeholder/600/400",
    tags: ["React.js", "JavaScript", "HTML", "CSS"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Expense Tracker",
    description: "Web application for managing daily expenses",
    longDescription:
      "Developed a web application for users to add, categorize, and manage daily expenses. Designed an intuitive interface with interactive features to enhance usability. Features include expense categorization, spending analytics, and budget tracking.",
    image: "/api/placeholder/600/400",
    tags: ["JavaScript", "HTML", "CSS"],
    category: "web",
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
];

const categories = [
  { id: "all", label: "All Projects", icon: Globe },
  { id: "fullstack", label: "Full-Stack", icon: Database },
  { id: "web", label: "Frontend", icon: Code },
  { id: "design", label: "Design", icon: Palette },
];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter(
    (project) =>
      selectedCategory === "all" || project.category === selectedCategory,
  );

  const featuredProjects = projects.filter((project) => project.featured);

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

  return (
    <section className="py-20 space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h2 className="font-display font-bold text-4xl md:text-5xl gradient-text">
          Featured Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my recent work, featuring cutting-edge technologies and
          innovative solutions
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => {
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

      {/* Featured Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              layout
              className="group"
            >
              <GlassCard
                className="p-6 h-full cursor-pointer overflow-hidden"
                onClick={() => setSelectedProject(project)}
                hover={true}
                glow={project.featured}
              >
                {/* Project Image */}
                <div className="relative mb-6 rounded-lg overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-500/20 flex items-center justify-center">
                    <Code size={48} className="text-accent/60" />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    {project.liveUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-accent"
                      >
                        <ExternalLink size={16} />
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-white hover:text-accent"
                      >
                        <Github size={16} />
                      </Button>
                    )}
                  </div>

                  {/* Featured Badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge className="bg-accent text-accent-foreground">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-display font-semibold text-xl mb-2 group-hover:text-accent transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-white/10 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-white/10"
                      >
                        +{project.tags.length - 3}
                      </Badge>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <GlassCard className="p-8">
                <div className="space-y-6">
                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-display font-bold text-3xl mb-2 gradient-text">
                        {selectedProject.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {selectedProject.longDescription}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setSelectedProject(null)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      ✕
                    </Button>
                  </div>

                  {/* Project Image */}
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                    <Code size={64} className="text-accent/60" />
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-white/10 hover:bg-white/20 transition-colors duration-200"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-4">
                    {selectedProject.liveUrl && (
                      <Button className="flex items-center gap-2">
                        <ExternalLink size={16} />
                        View Live
                      </Button>
                    )}
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        View Code
                      </Button>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* View All Projects CTA */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="text-center"
      >
        <Button
          size="lg"
          variant="outline"
          className="px-8 py-4 text-lg font-medium rounded-xl border-accent/50 hover:bg-accent/10 hover:border-accent transition-all duration-300"
        >
          View All Projects
          <ArrowRight size={20} className="ml-2" />
        </Button>
      </motion.div>
    </section>
  );
};
