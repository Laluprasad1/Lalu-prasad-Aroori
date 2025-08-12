"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Briefcase, Award, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '@/lib/portfolio-data';

interface ExperienceCardProps {
  item: typeof portfolioData.experience[0];
  index: number;
}

function ExperienceCard({ item, index }: ExperienceCardProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const isInternship = item.type === 'internship';
  const Icon = isInternship ? Briefcase : Award;
  const bgColor = isInternship ? 'from-blue-500/20 to-cyan-500/20' : 'from-purple-500/20 to-pink-500/20';
  const iconColor = isInternship ? 'text-blue-400' : 'text-purple-400';
  const borderColor = isInternship ? 'border-blue-500/30' : 'border-purple-500/30';

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className={`bg-gradient-to-br ${bgColor} backdrop-blur-sm rounded-xl p-6 border ${borderColor} hover:border-opacity-50 transition-all duration-300`}
    >
      <div className="flex items-start gap-4">
        <div className={`p-3 bg-white/10 rounded-lg ${iconColor}`}>
          <Icon size={24} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-white">
              {isInternship ? item.title : item.title}
            </h3>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Calendar size={14} />
              {isInternship ? item.duration : item.date}
            </div>
          </div>
          
          <p className={`font-semibold mb-3 ${iconColor}`}>
            {isInternship ? item.company : item.issuer}
          </p>
          
          <p className="text-gray-300 mb-4">{item.description}</p>
          
          {isInternship && item.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs border border-blue-500/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
          
          {!isInternship && 'credentialId' in item && (
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span>Credential ID: {item.credentialId}</span>
              <ExternalLink size={14} className="cursor-pointer hover:text-purple-400 transition-colors" />
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const internships = portfolioData.experience.filter(item => item.type === 'internship');
  const certificates = portfolioData.experience.filter(item => item.type === 'certificate');

  return (
    <section id="experience" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Experience & <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Achievements</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            My professional journey through internships and industry-recognized certifications
          </p>
        </motion.div>

        {/* Internships Section */}
        {internships.length > 0 && (
          <div className="mb-16">
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Briefcase className="text-blue-400" size={28} />
              Professional Experience
            </motion.h3>
            
            <div className="space-y-6">
              {internships.map((internship, index) => (
                <ExperienceCard
                  key={internship.id}
                  item={internship}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Certificates Section */}
        {certificates.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl font-bold text-white mb-8 flex items-center gap-3"
            >
              <Award className="text-purple-400" size={28} />
              Certifications
            </motion.h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((certificate, index) => (
                <ExperienceCard
                  key={certificate.id}
                  item={certificate}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-blue-400 mb-2">{internships.length}</div>
            <div className="text-gray-300">Internships</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-purple-400 mb-2">{certificates.length}</div>
            <div className="text-gray-300">Certificates</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-green-400 mb-2">2024</div>
            <div className="text-gray-300">Latest Year</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10">
            <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
            <div className="text-gray-300">Completion Rate</div>
          </div>
        </motion.div>

        {/* Timeline Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-30"></div>
          
          <div className="relative z-10 space-y-8">
            {portfolioData.experience.slice().reverse().map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + index * 0.1 }}
                className={`flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10">
                    <h4 className="font-bold text-white text-sm">{item.title}</h4>
                    <p className="text-xs text-gray-400">
                      {'duration' in item ? item.duration : item.date}
                    </p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full border-2 border-white"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}