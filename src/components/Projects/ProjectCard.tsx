import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Cpu } from 'lucide-react';
import { GithubIcon } from '../UI/Icons';
import type { Project } from '../../types/portfolio';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-3xl bg-[#08070D]/90 border border-purple-500/20 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_40px_rgba(139,92,246,0.18)] transition-all duration-300 overflow-hidden flex flex-col justify-between p-6 sm:p-8 h-full"
    >
      {/* Upper content area that takes all remaining height */}
      <div className="flex flex-col flex-1">
        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-purple-200 transition-colors mb-2">
          {project.title}
        </h3>

        <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
          {project.description}
        </p>

        {/* Key Features */}
        <div className="mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2.5">
            Key Features & Engineering Highlights
          </span>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {project.features.map((feat) => (
              <li key={feat} className="flex items-start gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Badges */}
        <div className="pt-4 border-t border-purple-500/15 mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-2">
            Tech Stack
          </span>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-[#120A20] text-xs font-mono text-purple-200 border border-purple-500/25 flex items-center gap-1.5 hover:border-purple-400/50 transition-colors"
              >
                <Cpu className="w-3 h-3 text-purple-400" />
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* GitHub Action Button - Aligned to bottom across all cards */}
      <div className="pt-4 mt-auto border-t border-purple-500/10 flex items-center gap-3">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-mono text-xs font-semibold tracking-wider transition-all duration-200 shadow-[0_0_16px_rgba(139,92,246,0.35)] hover:shadow-[0_0_24px_rgba(168,85,247,0.5)] group/btn"
        >
          <GithubIcon className="w-4 h-4 text-purple-100" />
          <span>VIEW REPOSITORY</span>
          <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.article>
  );
};
