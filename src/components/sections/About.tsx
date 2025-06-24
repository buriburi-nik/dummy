import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  MapPin,
  Calendar,
  Award,
  Heart,
  Code,
  Coffee,
  Zap,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Badge } from "@/components/ui/badge";

const achievements = [
  {
    id: "1",
    title: "NIT Kurukshetra Graduate",
    description: "Computer Science Engineering",
    icon: GraduationCap,
    year: "2024",
  },
  {
    id: "2",
    title: "Frontend Specialist",
    description: "React.js & Modern Web Technologies",
    icon: Code,
    year: "2022",
  },
  {
    id: "3",
    title: "Project Portfolio",
    description: "6+ Successful Web Applications",
    icon: Award,
    year: "2023",
  },
];

const interests = [
  "Web Development",
  "Open Source",
  "UI/UX Design",
  "Problem Solving",
  "Learning New Tech",
  "Coding Challenges",
];

const values = [
  {
    icon: Zap,
    title: "Innovation",
    description:
      "Always exploring cutting-edge technologies and modern approaches",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Creating experiences that truly matter to users",
  },
  {
    icon: Coffee,
    title: "Continuous Learning",
    description: "Staying updated with the latest in web development",
  },
];

export const About: React.FC = () => {
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
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="py-8 space-y-16"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center space-y-4">
        <h1 className="font-display font-bold text-4xl md:text-5xl gradient-text">
          About Me
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Get to know the person behind the code
        </p>
      </motion.div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Personal Story */}
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <GlassCard className="p-8 h-full">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                  <Heart size={24} className="text-white" />
                </div>
                <h2 className="font-display font-semibold text-2xl">
                  My Story
                </h2>
              </div>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hello! I'm{" "}
                  <span className="text-accent font-semibold">Aman Kumar</span>,
                  a passionate Frontend Developer from India. My journey in web
                  development began during my studies at{" "}
                  <span className="text-accent font-semibold">
                    NIT Kurukshetra
                  </span>
                  , where I discovered my love for creating digital experiences
                  that solve real-world problems.
                </p>

                <p>
                  What started as curiosity about how websites work has evolved
                  into a deep passion for crafting user-centric web
                  applications. I specialize in
                  <span className="text-accent font-semibold">
                    {" "}
                    React.js, JavaScript, and modern web technologies
                  </span>
                  , always staying updated with the latest trends and best
                  practices.
                </p>

                <p>
                  I believe in the power of clean, maintainable code and
                  intuitive user interfaces. Every project I work on is an
                  opportunity to learn something new and push the boundaries of
                  what's possible on the web. When I'm not coding, you'll find
                  me exploring new technologies, contributing to open source, or
                  solving coding challenges.
                </p>

                <p>
                  My goal is to create web applications that not only look great
                  but also provide exceptional user experiences. I'm always
                  excited to collaborate with like-minded individuals and teams
                  who share the same passion for innovation and quality.
                </p>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        {/* Quick Info */}
        <motion.div variants={itemVariants} className="space-y-6">
          <GlassCard className="p-6">
            <h3 className="font-display font-semibold text-xl mb-4">
              Quick Info
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-accent" />
                <span className="text-muted-foreground">India</span>
              </div>
              <div className="flex items-center space-x-3">
                <GraduationCap size={20} className="text-accent" />
                <span className="text-muted-foreground">NIT Kurukshetra</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar size={20} className="text-accent" />
                <span className="text-muted-foreground">
                  2+ Years Experience
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Code size={20} className="text-accent" />
                <span className="text-muted-foreground">
                  Frontend Developer
                </span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <h3 className="font-display font-semibold text-xl mb-4">
              Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white/10 hover:bg-white/20"
                  >
                    {interest}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* Achievements */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h2 className="font-display font-semibold text-3xl text-center">
          Key Milestones
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={achievement.id}
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                className="group"
              >
                <GlassCard className="p-6 text-center hover:shadow-neon transition-all duration-300">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="font-display font-semibold text-xl mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    {achievement.description}
                  </p>
                  <Badge className="bg-accent/20 text-accent">
                    {achievement.year}
                  </Badge>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Values */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h2 className="font-display font-semibold text-3xl text-center">
          What Drives Me
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={value.title}
                variants={itemVariants}
                className="group"
              >
                <GlassCard className="p-6 text-center h-full hover:shadow-soft transition-all duration-300">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/30 transition-colors duration-300">
                    <Icon size={24} className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {value.description}
                  </p>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </motion.section>
  );
};
