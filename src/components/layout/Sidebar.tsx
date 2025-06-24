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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
    href: "https://github.com",
    external: true,
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com",
    external: true,
  },
  {
    id: "twitter",
    label: "Twitter",
    icon: Twitter,
    href: "https://twitter.com",
    external: true,
  },
];

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  collapsed = false,
  onToggle,
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

  return (
    <motion.aside
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed left-0 top-0 h-screen z-50 transition-all duration-300",
        collapsed ? "w-20" : "w-72",
      )}
    >
      <GlassCard
        variant="strong"
        className="h-full m-4 p-6 flex flex-col justify-between"
        animated={false}
      >
        {/* Header */}
        <div className="space-y-8">
          {/* Logo/Brand */}
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {!collapsed && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent via-neon-purple to-neon-cyan p-0.5">
                    <div className="w-full h-full rounded-lg bg-background flex items-center justify-center">
                      <Code size={20} className="text-accent" />
                    </div>
                  </div>
                  <div>
                    <h1 className="font-display font-bold text-lg gradient-text">
                      Aman Kumar
                    </h1>
                    <p className="text-xs text-muted-foreground">
                      Frontend Dev
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {onToggle && (
              <Button
                variant="ghost"
                size="sm"
                onClick={onToggle}
                className="p-2 hover:bg-white/10"
              >
                {collapsed ? (
                  <ChevronRight size={16} />
                ) : (
                  <ChevronLeft size={16} />
                )}
              </Button>
            )}
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
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
                      "group relative flex items-center space-x-3 px-3 py-3 rounded-xl transition-all duration-200",
                      "hover:bg-white/10 hover:shadow-inner-glow",
                      active && "bg-accent/20 text-accent shadow-neon",
                      collapsed && "justify-center px-2",
                    )}
                    onMouseEnter={() => setHoveredItem(item.id)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <Icon
                      size={20}
                      className={cn(
                        "transition-all duration-200",
                        active && "text-accent",
                        hoveredItem === item.id && "scale-110",
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
                            active && "text-accent",
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
                        className="absolute left-0 w-1 h-6 bg-accent rounded-r-full"
                        initial={{ opacity: 0, scaleY: 0 }}
                        animate={{ opacity: 1, scaleY: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                      />
                    )}

                    {/* Tooltip for collapsed state */}
                    {collapsed && (
                      <motion.div
                        initial={{ opacity: 0, x: 10 }}
                        animate={{
                          opacity: hoveredItem === item.id ? 1 : 0,
                          x: hoveredItem === item.id ? 10 : 0,
                        }}
                        className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg border whitespace-nowrap pointer-events-none z-50"
                      >
                        {item.label}
                      </motion.div>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </div>

        {/* Footer */}
        <div className="space-y-6">
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
                        className="p-2 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon
                          size={16}
                          className="text-muted-foreground group-hover:text-accent transition-colors duration-200"
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
              collapsed ? "justify-center" : "justify-between items-center",
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 hover:bg-white/10"
                >
                  <ThemeIcon size={16} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="glass border-white/20"
              >
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  <Sun className="mr-2 h-4 w-4" />
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  <Moon className="mr-2 h-4 w-4" />
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  <Monitor className="mr-2 h-4 w-4" />
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </GlassCard>
    </motion.aside>
  );
};
