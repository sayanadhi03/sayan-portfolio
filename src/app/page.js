"use client";

import Image from "next/image";
import { ResponsiveNavbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import LogoLoop from "@/components/LogoLoop";
import { motion } from "framer-motion";
import {
  IconCode,
  IconDatabase,
  IconBrandReact,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandJavascript,
  IconBrandHtml5,
  IconBrandCss3,
  IconBrandTailwind,
  IconBrandMongodb,
  IconBrandFirebase,
  IconBrandTypescript,
  IconBrandGit,
  IconDeviceDesktop,
  IconMail,
  IconBrandLinkedin,
  IconBrandGithub,
  IconExternalLink,
  IconDownload,
  IconMapPin,
  IconPhone,
  IconSchool,
  IconCertificate,
  IconCalendar,
  IconTrophy,
  IconApi,
  IconFlask,
} from "@tabler/icons-react";
import { Highlighter } from "@/components/ui/highlighter";

export default function Home() {
  const skills = [
    { name: "Frontend Development", icon: IconBrandReact, level: 90 },
    { name: "Backend Development", icon: IconBrandNodejs, level: 85 },
    { name: "Database Management", icon: IconDatabase, level: 80 },
    { name: "Python Programming", icon: IconBrandPython, level: 88 },
    { name: "JavaScript/TypeScript", icon: IconBrandJavascript, level: 92 },
    { name: "UI/UX Design", icon: IconDeviceDesktop, level: 75 },
  ];

  const skillLogos = [
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandReact className="text-cyan-400" size={32} />
          <span className="text-white font-semibold">React</span>
        </div>
      ),
      alt: "React",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandMongodb className="text-green-500" size={32} />
          <span className="text-white font-semibold">MongoDB</span>
        </div>
      ),
      alt: "MongoDB",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandHtml5 className="text-orange-500" size={32} />
          <span className="text-white font-semibold">HTML</span>
        </div>
      ),
      alt: "HTML",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandCss3 className="text-blue-500" size={32} />
          <span className="text-white font-semibold">CSS</span>
        </div>
      ),
      alt: "CSS",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandTailwind className="text-teal-400" size={32} />
          <span className="text-white font-semibold">Tailwind CSS</span>
        </div>
      ),
      alt: "Tailwind CSS",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandNodejs className="text-green-600" size={32} />
          <span className="text-white font-semibold">Node.js</span>
        </div>
      ),
      alt: "Node.js",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconCode className="text-gray-400" size={32} />
          <span className="text-white font-semibold">Express.js</span>
        </div>
      ),
      alt: "Express.js",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconApi className="text-orange-400" size={32} />
          <span className="text-white font-semibold">Postman</span>
        </div>
      ),
      alt: "Postman",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandFirebase className="text-yellow-500" size={32} />
          <span className="text-white font-semibold">Firebase</span>
        </div>
      ),
      alt: "Firebase",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandPython className="text-blue-400" size={32} />
          <span className="text-white font-semibold">Python</span>
        </div>
      ),
      alt: "Python",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconFlask className="text-gray-300" size={32} />
          <span className="text-white font-semibold">Flask</span>
        </div>
      ),
      alt: "Flask",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandJavascript className="text-yellow-400" size={32} />
          <span className="text-white font-semibold">JavaScript</span>
        </div>
      ),
      alt: "JavaScript",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandTypescript className="text-blue-600" size={32} />
          <span className="text-white font-semibold">TypeScript</span>
        </div>
      ),
      alt: "TypeScript",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandGithub className="text-white" size={32} />
          <span className="text-white font-semibold">GitHub</span>
        </div>
      ),
      alt: "GitHub",
    },
    {
      node: (
        <div className="flex items-center gap-3 bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-700/30">
          <IconBrandGit className="text-red-500" size={32} />
          <span className="text-white font-semibold">Git</span>
        </div>
      ),
      alt: "Git",
    },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and MongoDB",
      image: "/portfolio image.jpg", // Replace with actual project images
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "#",
      live: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates",
      image: "/portfolio image.jpg", // Replace with actual project images
      tech: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
      github: "#",
      live: "#",
    },
    {
      title: "AI Content Generator",
      description: "Machine learning powered content creation platform",
      image: "/portfolio image.jpg", // Replace with actual project images
      tech: ["Python", "TensorFlow", "Flask", "React"],
      github: "#",
      live: "#",
    },
  ];

  const education = [
    {
      degree: "B.Tech. in Computer Science & Engineering",
      institution: "Techno Engineering College, Banipur",
      location: "Banipur, North 24 PGS",
      period: "2022 - 2026",
      grade: "7.34 CGPA",
      icon: IconSchool,
      achievements: [
        "Maintaining excellent academic performance.",
        "Working on various software development projects.",
      ],
    },
    {
      degree: "Higher Secondary (Science)",
      institution: "Habra High School(H.S)",
      location: "Habra, North 24 PGS",
      period: "2020 - 2021",
      grade: "89%",
      icon: IconCertificate,
      achievements: [
        "Specialized in Computer Science and Mathematics.",
        "Achieved outstanding results in Computer Science in board examinations.",
      ],
    },
  ];

  return (
    <>
      <ResponsiveNavbar />
      <main className="min-h-screen bg-black">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <section id="about" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Me
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl md:text-3xl font-semibold text-white">
                  Passionate Full-Stack Developer
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Final-year Computer Science student skilled in full-stack web
                  development (
                  <strong className="text-white font-bold">React</strong>,{" "}
                  <strong className="text-white font-bold">Node.js</strong>,{" "}
                  <strong className="text-white font-bold">MongoDB</strong>)
                  with project experience in AI-based applications. Passionate
                  about problem-solving, clean code, and currently exploring{" "}
                  <strong className="text-white font-bold">Agentic AI</strong>{" "}
                  for building intelligent, autonomous systems.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  My expertise spans across frontend frameworks like{" "}
                  <strong className="text-white font-bold">React</strong> and
                  <strong className="text-white font-bold">Next.js</strong>,
                  backend technologies including{" "}
                  <strong className="text-white font-bold">Node.js</strong>, and
                  database management with{" "}
                  <strong className="text-white font-bold">MongoDB</strong>.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMapPin size={20} />
                    <span>Kolkata, India</span>
                  </div>
                  <div className="flex items-center gap-2 text-orange-400">
                    <IconMail size={20} />
                    <span>Available for hire</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {[
                  { number: "10+", label: "Projects Completed" },
                  { number: "3+", label: "Years Experience" },
                  { number: "20+", label: "Happy Clients" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-700/30"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <h4 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                      {stat.number}
                    </h4>
                    <p className="text-gray-300 mt-2">{stat.label}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,107,53,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_60%,rgba(247,147,30,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                My{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Education
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                My{" "}
                <Highlighter action="underline" color="#FF9800">
                  academic journey
                </Highlighter>{" "}
                and continuous{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  learning path
                </Highlighter>{" "}
                in technology
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full mt-6" />
            </motion.div>

            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.degree}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row gap-8 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Education Card */}
                  <div className="flex-1">
                    <motion.div
                      className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/30 hover:border-orange-500/30 transition-all duration-300 group"
                      whileHover={{ y: -10, scale: 1.02 }}
                    >
                      <div className="flex items-start gap-6">
                        <div className="p-4 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-xl">
                          <edu.icon size={32} className="text-orange-400" />
                        </div>

                        <div className="flex-1">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                            <h3 className="text-xl lg:text-2xl font-bold text-white group-hover:text-orange-400 transition-colors">
                              {edu.degree}
                            </h3>
                            <div className="flex items-center gap-2 text-orange-400 mt-2 lg:mt-0">
                              <IconCalendar size={18} />
                              <span className="font-medium">{edu.period}</span>
                            </div>
                          </div>

                          <div className="space-y-3 mb-6">
                            <div className="flex flex-col lg:flex-row lg:items-center gap-2">
                              <h4 className="text-lg font-semibold text-gray-200">
                                {edu.institution}
                              </h4>
                              <span className="text-gray-400">
                                • {edu.location}
                              </span>
                            </div>
                            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500/20 to-red-600/20 px-4 py-2 rounded-full border border-orange-500/30">
                              <IconTrophy
                                size={16}
                                className="text-orange-400"
                              />
                              <span className="text-orange-300 font-medium">
                                {edu.grade}
                              </span>
                            </div>
                          </div>

                          <div>
                            <h5 className="text-gray-300 font-medium mb-3">
                              Key Achievements:
                            </h5>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, i) => (
                                <motion.li
                                  key={i}
                                  className="flex items-center gap-3 text-gray-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  whileInView={{ opacity: 1, x: 0 }}
                                  transition={{
                                    duration: 0.5,
                                    delay: index * 0.2 + i * 0.1,
                                  }}
                                  viewport={{ once: true }}
                                >
                                  <div className="w-2 h-2 bg-orange-400 rounded-full flex-shrink-0" />
                                  <span>{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Timeline Connector */}
                  <div className="hidden lg:flex flex-col items-center">
                    <motion.div
                      className="w-4 h-4 border-4 border-orange-500 bg-black rounded-full"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    />
                    {index < education.length - 1 && (
                      <motion.div
                        className="w-1 h-32 bg-gradient-to-b from-orange-500 to-transparent"
                        initial={{ height: 0 }}
                        whileInView={{ height: 128 }}
                        transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                        viewport={{ once: true }}
                      />
                    )}
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="flex-1 hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 relative overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.1),transparent_50%)]" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technical{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Skills
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
                Here are the{" "}
                <Highlighter action="underline" color="#FF9800">
                  technologies
                </Highlighter>{" "}
                and tools I work with to bring{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  ideas to life
                </Highlighter>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-600 mx-auto rounded-full" />
            </motion.div>

            {/* LogoLoop Skills Animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <LogoLoop
                logos={skillLogos}
                speed={60}
                direction="left"
                logoHeight={60}
                gap={48}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="rgba(0, 0, 0, 1)"
                scaleOnHover={true}
                ariaLabel="Technical skills"
                className="py-8"
              />
            </motion.div>

            {/* Reverse Direction Skills Loop */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <LogoLoop
                logos={skillLogos.slice().reverse()}
                speed={45}
                direction="right"
                logoHeight={50}
                gap={40}
                pauseOnHover={true}
                fadeOut={true}
                fadeOutColor="rgba(0, 0, 0, 1)"
                scaleOnHover={true}
                ariaLabel="Technical skills reverse"
                className="py-6 opacity-75"
              />
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900" />

          <div className="container mx-auto max-w-6xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Featured{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Projects
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                A showcase of my{" "}
                <Highlighter action="underline" color="#FF9800">
                  recent work
                </Highlighter>{" "}
                and{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  creative solutions
                </Highlighter>
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/30 group hover:border-orange-500/30 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        <IconBrandGithub size={20} />
                        <span>Code</span>
                      </a>
                      <a
                        href={project.live}
                        className="flex items-center gap-2 text-gray-300 hover:text-orange-400 transition-colors"
                      >
                        <IconExternalLink size={20} />
                        <span>Live Demo</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />

          <div className="container mx-auto max-w-4xl relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
                  Connect
                </span>
              </h2>
              <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                Ready to bring your{" "}
                <Highlighter action="underline" color="#FF9800">
                  ideas to life
                </Highlighter>
                ? Let&apos;s discuss your{" "}
                <Highlighter action="highlight" color="#87CEFA">
                  next project
                </Highlighter>
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMail size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-orange-400">
                          sayanadhikary003@gmail.com
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconPhone size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-orange-400">+91 93397 12883</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-gray-300">
                      <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-600/20 rounded-lg">
                        <IconMapPin size={20} className="text-orange-400" />
                      </div>
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-orange-400">
                          Kolkata, West Bengal, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href="https://www.linkedin.com/in/sayan-adhikary03/"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandLinkedin size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://github.com/sayanadhi03"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconBrandGithub size={24} className="text-orange-400" />
                  </motion.a>
                  <motion.a
                    href="https://drive.google.com/file/d/1rFUztRWi1Qol9hcYU0YyBQq5jltDIktb/view?usp=drive_link"
                    target="_blank"
                    className="p-3 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-lg border border-gray-600/30 hover:border-orange-500/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -2 }}
                  >
                    <IconDownload size={24} className="text-orange-400" />
                  </motion.a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl p-8 border border-gray-700/30"
              >
                <form className="space-y-6">
                  <div>
                    <label className="block text-white font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-gray-800">
          <div className="container mx-auto max-w-6xl text-center">
            <p className="text-gray-400">
              © 2025 Sayan Adhikary. All rights reserved. Built with ❤️ using
              Next.js
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}
