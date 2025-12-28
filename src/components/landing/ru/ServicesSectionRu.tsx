import { motion } from 'framer-motion';
import { Cpu, Microscope, Wrench, CircuitBoard, Zap, Shield } from 'lucide-react';
import CircuitPattern from '../CircuitPattern';

const services = [
  {
    icon: CircuitBoard,
    title: 'Ремонт материнских плат',
    description: 'Устраняем короткие замыкания, меняем чипы и поврежденные цепи. Спасаем устройства после залития и механических повреждений.',
    color: 'blue' as const,
    features: ['Замена чипов', 'Ремонт КЗ', 'Восстановление после залития']
  },
  {
    icon: Cpu,
    title: 'Замена процессоров и видеокарт',
    description: 'Профессиональная пайка BGA компонентов включая CPU, GPU и чипы памяти с точностью до микрон.',
    color: 'orange' as const,
    features: ['BGA реболл', 'Замена CPU', 'Ремонт GPU']
  },
  {
    icon: Microscope,
    title: 'Глубокая диагностика',
    description: 'Находим неисправности там, где другие не видят. Используем профессиональные диагностические инструменты и тепловизор.',
    color: 'purple' as const,
    features: ['Термовизия', 'Осциллограф', 'Схематический анализ']
  }
];

const colorVariants = {
  blue: {
    bg: 'bg-blue-50',
    icon: 'bg-blue-100 text-blue-700',
    border: 'border-blue-100',
    tag: 'bg-blue-100 text-blue-700'
  },
  orange: {
    bg: 'bg-orange-50',
    icon: 'bg-orange-100 text-orange-600',
    border: 'border-orange-100',
    tag: 'bg-orange-100 text-orange-700'
  },
  purple: {
    bg: 'bg-purple-50',
    icon: 'bg-purple-100 text-purple-700',
    border: 'border-purple-100',
    tag: 'bg-purple-100 text-purple-700'
  }
};

export default function ServicesSectionRu() {
  return (
    <section id="uslugi" className="relative py-24 md:py-32 bg-background overflow-hidden">
      <CircuitPattern opacity={0.3} />
      
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full blur-3xl opacity-30" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-blue-50 text-blue-700 font-medium text-sm mb-6">
            Почему выбирают нас
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Специалисты по{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-blue-500">
              сложным ремонтам
            </span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Мы занимаемся сложными ремонтами, требующими экспертных знаний и профессионального оборудования. Там, где другие сдаются, мы начинаем.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const colors = colorVariants[service.color];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="group"
              >
                <div className={`h-full p-8 rounded-3xl border ${colors.border} ${colors.bg} transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1`}>
                  <div className={`inline-flex p-4 rounded-2xl ${colors.icon} mb-6`}>
                    <service.icon className="w-8 h-8" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <div className="flex flex-wrap gap-2 justify-center">
                    {service.features.map((feature) => (
                      <span
                        key={feature}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${colors.tag}`}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid sm:grid-cols-3 gap-6"
        >
          {[
            { icon: Zap, text: 'Быстрая оценка' },
            { icon: Shield, text: 'Гарантия на ремонт' },
            { icon: Wrench, text: 'Качественные запчасти' }
          ].map((item) => (
            <div key={item.text} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="p-3 rounded-xl bg-background shadow-sm">
                <item.icon className="w-5 h-5 text-blue-700" />
              </div>
              <span className="font-medium text-slate-700">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
