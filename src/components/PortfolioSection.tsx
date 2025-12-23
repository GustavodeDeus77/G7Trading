import { motion } from 'framer-motion';
import { Wheat, Coffee, Bean, Candy } from 'lucide-react';
import { useInView } from './useInView';

const products = [
  {
    icon: Wheat,
    name: 'Soja',
    description: 'Todos os tipos e variedades, com certificação internacional e qualidade premium para o mercado global.',
  },
  {
    icon: Coffee,
    name: 'Café',
    description: 'Cafés especiais e comerciais, arábica e robusta, direto das melhores regiões produtoras do Brasil.',
  },
  {
    icon: Bean,
    name: 'Amendoim',
    description: 'Amendoim de alta qualidade em todas as suas variedades, processado com rigorosos padrões de segurança.',
  },
  {
    icon: Candy,
    name: 'Açúcar',
    description: 'Açúcar refinado, cristal e VHP, atendendo as mais exigentes especificações do mercado internacional.',
  },
];

export function PortfolioSection() {
  const { ref, isInView } = useInView();

  return (
    <section className="py-24 bg-[#0f0f0f]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-white mb-4">
            Portfólio <span className="text-[#D4AF37]">Premium</span>
          </h2>
          <p className="text-gray-400 text-lg font-montserrat">
            Commodities selecionadas com excelência e certificação internacional
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-[#141414] p-8 border-2 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] transition-all duration-500 group cursor-pointer"
            >
              <div className="mb-6 flex justify-center">
                <div className="bg-[#D4AF37]/10 p-4 rounded-full group-hover:bg-[#D4AF37]/20 transition-all duration-300">
                  <product.icon className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
              <h3 className="font-playfair text-2xl font-bold text-white mb-3 text-center">
                {product.name}
              </h3>
              <p className="text-gray-400 font-montserrat text-sm leading-relaxed text-center">
                {product.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
