import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Calendar,
  Clock,
  MessageSquare,
  Download,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "priyamaity072@gmail.com",
    href: "mailto:priyamaity072@gmail.com",
    description: "Best for project inquiries",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 7066243944",
    href: "tel:+917066243944",
    description: "Available during business hours",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Nagpur, India",
    description: "Open to remote opportunities",
  },
];

const socialLinks = [
  {
    icon: Github,
    title: "GitHub",
    value: "@priyamaity",
    href: "https://github.com/priyamaity",
    color: "hover:text-gray-400",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "Priya Maity",
    href: "https://linkedin.com/in/priya-maity",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    title: "Twitter",
    value: "@priyamaity_dev",
    href: "https://twitter.com/priyamaity_dev",
    color: "hover:text-blue-400",
  },
];

const availabilityStatus = {
  available: true,
  status: "Available for new projects",
  responseTime: "Usually responds within 24 hours",
  timezone: "IST (UTC+5:30)",
};

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
          Let's Work Together
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it. Let's create
          something amazing together.
        </p>
      </motion.div>

      {/* Availability Status */}
      <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
        <GlassCard className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <div
                  className={`w-3 h-3 rounded-full ${
                    availabilityStatus.available ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                <span className="font-medium">{availabilityStatus.status}</span>
              </div>
            </div>
            <Badge className="bg-green-500/20 text-green-400">
              Open to Work
            </Badge>
          </div>
          <div className="mt-4 flex items-center justify-between text-sm text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Clock size={16} />
              <span>{availabilityStatus.responseTime}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} />
              <span>{availabilityStatus.timezone}</span>
            </div>
          </div>
        </GlassCard>
      </motion.div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <motion.div variants={itemVariants}>
          <GlassCard className="p-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <h2 className="font-display font-semibold text-2xl">
                  Send a Message
                </h2>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name"
                      required
                      className="bg-white/5 border-white/10 focus:border-accent"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                      className="bg-white/5 border-white/10 focus:border-accent"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium mb-2"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Project inquiry, collaboration, etc."
                    required
                    className="bg-white/5 border-white/10 focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-2"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project..."
                    rows={6}
                    required
                    className="bg-white/5 border-white/10 focus:border-accent resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send size={18} />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </div>
          </GlassCard>
        </motion.div>

        {/* Contact Information */}
        <motion.div variants={itemVariants} className="space-y-6">
          {/* Contact Methods */}
          <div className="space-y-4">
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.div
                  key={method.title}
                  variants={itemVariants}
                  className="group"
                >
                  <GlassCard className="p-6 hover:shadow-soft transition-all duration-300">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors duration-300">
                        <Icon size={20} className="text-accent" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{method.title}</h3>
                        {method.href ? (
                          <a
                            href={method.href}
                            className="text-accent hover:text-accent/80 transition-colors duration-200"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">
                            {method.value}
                          </p>
                        )}
                        <p className="text-sm text-muted-foreground mt-1">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>

          {/* Social Links */}
          <GlassCard className="p-6">
            <h3 className="font-display font-semibold text-xl mb-4">
              Follow Me
            </h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.title}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                  >
                    <Icon
                      size={20}
                      className={`text-muted-foreground ${social.color} transition-colors duration-200`}
                    />
                    <div>
                      <p className="font-medium">{social.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {social.value}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>
          </GlassCard>

          {/* Quick Actions */}
          <GlassCard className="p-6">
            <h3 className="font-display font-semibold text-xl mb-4">
              Quick Actions
            </h3>
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.open("mailto:priyamaity072@gmail.com")}
              >
                <Mail size={18} className="mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.open("https://calendly.com/priyamaity")}
              >
                <Calendar size={18} className="mr-2" />
                Schedule Call
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={() => window.open("/resume.pdf")}
              >
                <Download size={18} className="mr-2" />
                Download Resume
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      {/* FAQ Section */}
      <motion.div variants={itemVariants} className="space-y-8">
        <h2 className="font-display font-semibold text-3xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            {
              question: "What's your typical project timeline?",
              answer:
                "Project timelines vary based on complexity, but most web applications take 2-8 weeks from concept to deployment.",
            },
            {
              question: "Do you work with international clients?",
              answer:
                "Yes! I work with clients globally and am comfortable with remote collaboration across different time zones.",
            },
            {
              question: "What technologies do you specialize in?",
              answer:
                "I specialize in React.js, JavaScript, HTML/CSS, and modern frontend technologies with a focus on user experience.",
            },
            {
              question: "Do you provide ongoing support?",
              answer:
                "Yes, I offer maintenance and support services to ensure your application stays updated and performs optimally.",
            },
          ].map((faq, index) => (
            <motion.div key={index} variants={itemVariants}>
              <GlassCard className="p-6">
                <h4 className="font-medium mb-2">{faq.question}</h4>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
