import { motion } from 'framer-motion';
import { Smartphone, Battery, Monitor, Mic, Cable, Clock, BadgeCheck, ShieldCheck } from 'lucide-react';
import CircuitPattern from './CircuitPattern';

const repairTypes = [
  { icon: Monitor, label: 'Displeje' },
  { icon: Battery, label: 'Batérie' },
  { icon: Mic, label: 'Mikrofóny' },
  { icon: Cable, label: 'Konektory' },
  { icon: Smartphone, label: 'Reproduktory' },
];

const benefits = [
  {
    icon: Clock,
    title: 'Do 3 dní',
    description: 'Väčšinu modulárnych opráv dokončíme do 3 pracovných dní',
    color: 'blue' as const,
  },
  {
    icon: BadgeCheck,
    title: 'Originálne diely',
    description: 'Používame výhradne originálne náhradné diely od výrobcu',
    color: 'orange' as const,
  },
  {
    icon: ShieldCheck,
    title: '12 mesiacov záruka',
    description: 'Na všetky modulárne opravy poskytujeme plnú záruku',
    color: 'green' as const,
  },
];

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    border: 'border-blue-200',
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    border: 'border-orange-200',
  },
  green: {
    bg: 'bg-green-50',
    icon: 'bg-green-100 text-green-700',
    border: 'border-green-200',
  },
};

export default function ModularRepairSection() {
  return (
    <section className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      <CircuitPattern opacity={0.2} />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-50 rounded-full blur-3xl opacity-40" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-orange-50 text-orange-700 font-medium text-sm mb-6">
            Rýchle opravy
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Modulárny{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
              servis
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Štandardné výmeny komponentov vykonávame rýchlo a profesionálne. 
            Displeje, batérie, konektory a ďalšie diely vymieňame s použitím originálnych náhradných dielov.
          </p>
        </motion.div>

        {/* Repair types icons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16"
        >
          {repairTypes.map((type, index) => (
            <motion.div
              key={type.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * index }}
              className="flex flex-col items-center gap-2 p-4 md:p-6 rounded-2xl bg-background border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <div className="p-3 md:p-4 rounded-xl bg-gradient-to-br from-orange-50 to-orange-100">
                <type.icon className="w-6 h-6 md:w-8 md:h-8 text-orange-600" />
              </div>
              <span className="text-sm md:text-base font-medium text-slate-700">{type.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Benefits cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => {
            const colors = colorVariants[benefit.color];
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`h-full p-8 rounded-3xl border ${colors.border} ${colors.bg} transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1`}>
                  <div className={`inline-flex p-4 rounded-2xl ${colors.icon} mb-6`}>
                    <benefit.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
