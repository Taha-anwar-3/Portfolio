import React from 'react';
import { motion } from 'framer-motion';
import {
  Server,
  Layers,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Layout,
  GitBranch,
} from 'lucide-react';
import { skillCategories } from '../../data/skills';

// Map icon name to Lucide component
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Server,
  Layers,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Layout,
  GitBranch,
};

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Skills
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Categorized technical capabilities, engineering principles, and backend tooling.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = iconMap[category.iconName] || Cpu;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="group relative rounded-2xl bg-[#08070D]/85 border border-purple-500/20 p-6 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)] transition-all duration-300 flex flex-col"
              >
                <div>
                  {/* Category Header */}
                  <div className="mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#120A20] border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:text-purple-300 group-hover:border-purple-400 transition-all shadow-[0_0_12px_rgba(139,92,246,0.2)]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-purple-200 transition-colors mb-1.5">
                    {category.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {category.description}
                  </p>
                </div>

                {/* Skill Chips / Cards */}
                <div className="flex flex-col gap-2 pt-4 border-t border-purple-500/15">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#120A20]/80 border border-purple-500/20 hover:border-purple-400/60 hover:bg-[#1A0D2E] transition-all duration-200 flex items-center justify-between gap-2 shadow-xs group/chip"
                    >
                      <span className="text-xs font-mono font-medium text-slate-200 group-hover/chip:text-white">
                        {skill.name}
                      </span>
                      {skill.tag && (
                        <span className="text-[9px] font-mono text-purple-400/80 bg-[#08070D] px-1.5 py-0.5 rounded border border-purple-500/15">
                          {skill.tag}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
