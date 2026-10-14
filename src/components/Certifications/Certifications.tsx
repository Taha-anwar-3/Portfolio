import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, CheckCircle2, Cpu, ExternalLink, Clock } from 'lucide-react';
import { certifications } from '../../data/certifications';

export const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-3">
            Certifications & Training
          </h2>

          <p className="text-base sm:text-lg text-purple-300/80 max-w-2xl font-mono">
            Rigorous technical training programs, enterprise validations, and certifications.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certifications.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative rounded-3xl bg-[#08070D]/90 border border-purple-500/25 p-6 sm:p-7 backdrop-blur-xl hover:border-purple-400/50 hover:shadow-[0_0_35px_rgba(139,92,246,0.2)] transition-all duration-300 flex flex-col justify-between h-full"
            >
              {/* Card Body */}
              <div className="flex flex-col flex-1">
                {/* Header Status & Grade */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                    <span className="text-[11px] font-mono text-purple-300 tracking-wider">
                      OFFICIAL_CREDENTIAL
                    </span>
                  </div>

                  {cert.grade && (
                    <div className="px-2.5 py-0.5 rounded-lg bg-purple-950/60 border border-purple-400/40 text-xs font-mono text-purple-200 shadow-[0_0_12px_rgba(168,85,247,0.3)]">
                      <span className="text-slate-400">Grade: </span>
                      <span className="font-bold text-white text-xs">{cert.grade}</span>
                    </div>
                  )}
                </div>

                {/* Title & Issuer */}
                <h3 className="text-xl font-bold text-white group-hover:text-purple-200 transition-colors mb-1.5">
                  {cert.title}
                </h3>

                <div className="text-sm font-medium text-purple-400 mb-3 font-mono">
                  {cert.issuer}
                </div>

                {/* Metadata: Period, Location, Hours, Type */}
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-slate-400 mb-4">
                  {cert.type && (
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-purple-300">
                      {cert.type}
                    </span>
                  )}

                  {cert.hours && (
                    <div className="flex items-center gap-1 text-purple-300">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>{cert.hours}</span>
                    </div>
                  )}

                  {cert.period && (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-purple-400" />
                      <span>{cert.period}</span>
                    </div>
                  )}

                  {cert.location && (
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-purple-400" />
                      <span>{cert.location}</span>
                    </div>
                  )}
                </div>

                {/* Description */}
                {cert.description && (
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                )}

                {/* Covered topics list */}
                {cert.topics && (
                  <div className="mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Curriculum & Covered Subjects
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {cert.topics.map((topic) => (
                        <span
                          key={topic}
                          className="px-2 py-0.5 rounded-md bg-[#120A20] text-[11px] font-mono text-purple-200 border border-purple-500/25 flex items-center gap-1"
                        >
                          <Cpu className="w-2.5 h-2.5 text-purple-400" />
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer - Pinned to bottom across all cards */}
              <div className="mt-auto pt-4 border-t border-purple-500/15 flex items-center justify-between gap-3">
                {cert.certificateUrl ? (
                  <a
                    href={cert.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-mono font-medium transition-all duration-200 shadow-[0_0_12px_rgba(139,92,246,0.25)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
                  >
                    <span>View Certificate</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <span className="flex items-center gap-1 text-xs font-mono text-purple-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400" />
                    Verified
                  </span>
                )}

                <span className="text-[11px] font-mono text-purple-400/80">
                  {cert.issuer.includes('ITI') ? 'ITI PROGRAM' : 'DEPI PROGRAM'}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
