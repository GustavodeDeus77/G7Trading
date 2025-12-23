import { motion } from 'framer-motion';
import { Award, Globe, TrendingUp } from 'lucide-react';
import { useInView } from './useInView';

export function PartnershipsSection() {
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
            Parcerias <span className="text-[#D4AF37]">Estratégicas</span>
          </h2>
          <p className="text-gray-400 text-lg font-montserrat">
            Conexões que fortalecem nossa presença global
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-gradient-to-br from-[#141414] to-[#0a0a0a] p-12 border border-[#D4AF37] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl"></div>

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-16 h-16 text-[#D4AF37]" />
                <div>
                  <h3 className="font-playfair text-3xl font-bold text-white mb-2">
                    Câmara de Comércio Árabe Brasileira
                  </h3>
                  <p className="text-[#D4AF37] font-montserrat font-semibold">
                    Membro Afiliado
                  </p>
                </div>
              </div>
              <p className="text-gray-300 font-montserrat text-lg leading-relaxed mb-6">
                Nossa afiliação à Câmara de Comércio Árabe Brasileira fortalece nossa capacidade de conectar mercados,
                facilitando negociações estratégicas entre o Brasil e países árabes com excelência e confiança.
              </p>
              <div className="flex gap-8">
                <div className="flex items-center gap-3">
                  <Globe className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-white font-montserrat">Alcance Global</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-6 h-6 text-[#D4AF37]" />
                  <span className="text-white font-montserrat">Crescimento Estratégico</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
