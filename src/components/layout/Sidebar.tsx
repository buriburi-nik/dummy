import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Moon,
  Sun,
  Monitor,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/contexts/ThemeContext";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/button";

import { useLocation, Link } from "react-router-dom";

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ size?: number }>;
  href: string;
  external?: boolean;
}

const navigation: NavItem[] = [
  { id: "home", label: "Home", icon: Home, href: "/" },
  { id: "about", label: "About", icon: User, href: "/about" },
  { id: "projects", label: "Projects", icon: Briefcase, href: "/projects" },
  { id: "skills", label: "Skills", icon: Code, href: "/skills" },
  { id: "contact", label: "Contact", icon: Mail, href: "/contact" },
];

const socialLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: Github,
    href: "https://github.com/priyamaity",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/priya-maity",
    external: true,
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/priyamaity",
    external: true,
  },
];

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
  isMobile?: boolean;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed = false,
  onToggle,
  isMobile = false,
}) => {
  const { theme, setTheme, actualTheme } = useTheme();
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === "/";
    return location.pathname.startsWith(href);
  };

  const themeIcons = {
    light: Sun,
    dark: Moon,
    system: Monitor,
  };

  const ThemeIcon = themeIcons[theme];

  // Mobile horizontal sidebar
  if (isMobile) {
    return (
     <motion.aside
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0 left-20 right-20 h-20 w-full z-50"

>
        <div className="h-full mx-4 mt-2 flex flex-row justify-between items-center rounded-xl bg-slate-800/95 border border-slate-700 px-6 py-3 shadow-2xl">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent via-purple-500 to-cyan-500 p-0.5 shadow-lg">
              <div className="w-full h-full rounded-md bg-slate-800 flex items-center justify-center">
                <Code size={16} className="text-accent" />
              </div>
            </div>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex-1 flex justify-center">
            <div className="flex space-x-1">
              {navigation.map((item, index) => {
                const Icon = item.icon;
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.id}
                    to={item.href}
                    className={cn(
                      "relative flex items-center justify-center p-2 rounded-lg transition-all duration-200",
                      active
                        ? "bg-accent text-white"
                        : "bg-white/10 hover:bg-white/20 text-white",
                    )}
                  >
                    <Icon size={20} className="text-white" />
                    {active && (
                      <motion.div
                        layoutId="activeMobileIndicator"
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Theme Toggle */}
          <div className="flex items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setTheme(actualTheme === "light" ? "dark" : "light")
              }
              className="p-2 w-8 h-8 rounded-lg text-white hover:text-white hover:bg-white/20 transition-colors duration-200"
            >
              <ThemeIcon size={16} className="text-white" />
            </Button>
          </div>
        </div>
      </motion.aside>
    );
  }

  // Desktop vertical sidebar
  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 h-[90vh] z-50 transition-all duration-300",
        collapsed ? "w-20" : "w-72",
      )}
    >
      <div
        className={cn(
          "h-full m-4 flex flex-col justify-between rounded-xl transition-all duration-300 shadow-2xl",
          collapsed
            ? "bg-slate-800/95 border border-slate-700 p-3"
            : "bg-sidebar border border-sidebar-border p-6",
        )}
      >
        {/* Header */}
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div
            className={cn(
              "flex items-center",
              collapsed ? "justify-center" : "justify-between",
            )}
          >
            <AnimatePresence mode="wait">
              {collapsed ? (
                <motion.div
                  key="collapsed-logo"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center justify-center"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent via-purple-500 to-cyan-500 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-lg bg-slate-800 flex items-center justify-center">
                      <Code size={20} className="text-accent" />
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="expanded-logo"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent via-purple-500 to-cyan-500 p-0.5 shadow-lg">
                    <div className="w-full h-full rounded-lg bg-sidebar flex items-center justify-center">
                      <Code size={20} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-display font-bold text-lg gradient-text">
                      Priya Maity
                    </h1>
                    <p className="text-xs text-sidebar-foreground/70">
                      Full-Stack Dev
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {onToggle && !collapsed && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="hover:bg-sidebar-accent text-sidebar-foreground hover:text-sidebar-accent-foreground transition-colors duration-200 p-2"
              >
                <ChevronLeft size={16} />
              </Button>
            )}
          </div>

          {/* Toggle button for collapsed state */}
          {onToggle && collapsed && (
            <div className="flex justify-center mt-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="hover:bg-accent/20 text-white hover:text-white transition-colors duration-200 p-2 w-10 h-10 rounded-lg border border-white/20"
              >
                <ChevronRight size={16} className="text-white" />
              </Button>
            </div>
          )}

          {/* Navigation */}
          <nav
            className={cn(
              "space-y-3 px-2",
              collapsed && "space-y-3 flex flex-col items-center px-0",
            )}
          >
            {navigation.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut",
                  }}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "group relative flex items-center transition-all duration-200",
                      collapsed
                        ? "p-2 rounded-lg w-10 h-10 mx-auto bg-white/10 hover:bg-white/20 justify-center"
                        : "space-x-3 px-3 py-3 rounded-xl hover:bg-sidebar-accent/80 hover:text-sidebar-accent-foreground",
                      active &&
                        (collapsed
                          ? "bg-accent text-white"
                          : "bg-accent text-white shadow-lg"),
                    )}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      size={collapsed ? 18 : 20}
                      className={cn(
                        "transition-opacity duration-200",
                        active
                          ? "text-white opacity-100"
                          : "text-white opacity-90 hover:opacity-100",
                      )}
                    />

                    <AnimatePresence mode="wait">
                      {!collapsed && (
                        <motion.span
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className={cn(
                            "font-medium text-sm transition-colors duration-200",
                            active ? "text-white" : "text-sidebar-foreground",
                          )}
                        >
                          {item.label}
                        </motion.span>
                      )}
                    </AnimatePresence>

                    {/* Active indicator */}
                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className={cn(
                          "absolute bg-accent rounded-full",
                          collapsed
                            ? "left-0 w-1 h-8 rounded-r-full"
                            : "left-0 w-1 h-6 rounded-r-full",
                        )}
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}

                    {/* Tooltip for collapsed state */}
                    {collapsed && hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, x: -10, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: -10, scale: 0.8 }}
                        className="fixed left-20 z-[60] px-3 py-2 bg-popover/95 backdrop-blur-sm text-popover-foreground text-sm rounded-lg shadow-lg border border-border whitespace-nowrap pointer-events-none"
                        style={{
                          top: `${index * 60 + 120}px`,
                        }}
                      >
                        {item.label}
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-popover/95 border-l border-t border-border rotate-45" />
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className={cn("space-y-6", collapsed && "space-y-4")}>
          {/* Social Links */}
          <AnimatePresence mode="wait">
            {!collapsed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="space-y-3"
              >
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Connect
                </p>
                <div className="flex space-x-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <motion.a
                        key={link.id}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg hover:bg-sidebar-accent transition-colors duration-200 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon
                          size={16}
                          className="text-sidebar-foreground group-hover:text-accent transition-colors duration-200"
                        />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Theme Toggle */}
          <div
            className={cn(
              "flex",
              collapsed
                ? "justify-center mt-4"
                : "justify-between items-center",
            )}
          >
            {!collapsed && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-xs font-medium text-muted-foreground uppercase tracking-wider"
              >
                Theme
              </motion.p>
            )}

            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setTheme(actualTheme === "light" ? "dark" : "light")
              }
              className={cn(
                "hover:bg-accent/20 transition-colors duration-200",
                collapsed
                  ? "p-2 w-10 h-10 rounded-lg border border-white/20 text-white hover:text-white"
                  : "p-2 text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent",
              )}
            >
              <ThemeIcon
                size={collapsed ? 16 : 16}
                className={collapsed ? "text-white" : "text-sidebar-foreground"}
              />
            </Button>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};
