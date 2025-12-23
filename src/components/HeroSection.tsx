import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/75"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            G7 Trading: Excelência e Precisão em{' '}
            <span className="text-[#D4AF37]">Commodities</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 font-montserrat font-light mb-12">
            Conectando mercados globais com inteligência, confiança e logística premium
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#D4AF37] text-black px-10 py-4 text-lg font-montserrat font-semibold hover:bg-[#C5A028] transition-all duration-300"
          >
            Descubra Nossa Excelência
          </motion.button>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10"
      >
        <ChevronDown className="w-8 h-8 text-[#D4AF37]" />
      </motion.div>
    </section>
  );
}
