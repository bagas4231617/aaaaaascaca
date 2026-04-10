import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Shield, CheckCircle2, ExternalLink } from 'lucide-react';
import type { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-slate-900 border border-slate-700 rounded-lg max-w-2xl max-h-[90vh] overflow-y-auto w-full relative"
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 bg-slate-800 hover:bg-slate-700 rounded-full p-2 transition-colors z-10"
              aria-label="Close modal"
              title="Close (ESC)"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="p-8">
              {/* Image */}
              <div className="mb-6 rounded-lg overflow-hidden bg-slate-800 h-64 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-0 transition-opacity duration-500"
                  onLoad={(e) => (e.currentTarget.style.opacity = '1')}
                />
              </div>

              {/* Title & Desc */}
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-6">{project.desc}</p>

              {/* Challenge & Solution Grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-red-400 font-bold">
                    <Shield size={18} />
                    Tantangan
                  </div>
                  <p className="text-slate-300 text-sm">{project.challenge}</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2 text-green-400 font-bold">
                    <CheckCircle2 size={18} />
                    Solusi
                  </div>
                  <p className="text-slate-300 text-sm">{project.solution}</p>
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="font-bold mb-3">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-green-500/10 border border-green-500/30 text-green-400 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Mini Terminal & Link */}
              <div className="bg-slate-800/50 border border-slate-700 rounded-lg overflow-hidden mb-4">
                <div className="flex gap-2 px-4 py-2 bg-slate-800 border-b border-slate-700">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                </div>
                <div className="p-4 font-mono text-sm">
                  <p>$ fetching project_data...</p>
                  <p className="text-green-400">{'>'} status: 200 OK</p>
                  <p>{'>'} connection: secured</p>
                </div>
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/50 text-green-400 hover:bg-green-500/20 rounded font-mono text-sm transition-all"
                >
                  <ExternalLink size={14} />
                  Buka Repositori / Dokumentasi
                </a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
