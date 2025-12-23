import { motion } from 'framer-motion';
import { Brain, Truck, Handshake } from 'lucide-react';
import { useInView } from './useInView';

const differentials = [
  {
    icon: Brain,
    title: 'Inteligência de Mercado',
    description: 'Análise profunda e estratégica do mercado global de commodities, oferecendo insights precisos e oportunidades de negócio.',
  },
  {
    icon: Truck,
    title: 'Logística Premium',
    description: 'Cadeia de suprimentos otimizada com operações no Porto de Santos, garantindo eficiência e pontualidade em cada transação.',
  },
  {
    icon: Handshake,
    title: 'Relações de Confiança',
    description: 'Parcerias sólidas construídas sobre transparência, ética e compromisso com a excelência em cada negociação.',
  },
];

export function DifferentialsSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            The <span className="text-[#D4AF37]">Golden</span> Standard
          </h2>
          <p className="text-gray-400 text-lg font-montserrat">
            Diferenciais que nos tornam líderes no mercado global
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {differentials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-[#141414] p-8 border border-[#D4AF37]/20 hover:border-[#D4AF37] transition-all duration-300 group"
            >
              <div className="mb-6">
                <item.icon className="w-12 h-12 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>
              <p className="text-gray-400 font-montserrat leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
