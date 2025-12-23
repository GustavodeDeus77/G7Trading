import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-black border-t border-[#D4AF37]/20">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-playfair text-3xl font-bold text-[#D4AF37] mb-6">
              G7 Trading
            </h3>
            <p className="text-gray-400 font-montserrat leading-relaxed mb-6">
              Excelência e precisão no mercado global de commodities, conectando produtores e compradores com integridade e eficiência.
            </p>
            <div className="flex items-center gap-3 text-gray-400">
              <Shield className="w-5 h-5 text-[#D4AF37]" />
              <span className="font-montserrat text-sm">Certificação Internacional</span>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-6">
              Localização
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-montserrat">Porto de Santos</p>
                  <p className="text-gray-400 font-montserrat text-sm">São Paulo, Brasil</p>
                </div>
              </div>
              <div className="mt-6 h-48 bg-[#141414] border border-[#D4AF37]/20 flex items-center justify-center">
                <MapPin className="w-12 h-12 text-[#D4AF37]/30" />
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-playfair text-xl font-bold text-white mb-6">
              Contato
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-montserrat">Email</p>
                  <a
                    href="mailto:g7trading@g7trading.com.br"
                    className="text-[#D4AF37] hover:text-[#C5A028] font-montserrat text-sm transition-colors"
                  >
                    g7trading@g7trading.com.br
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#D4AF37] mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-montserrat mb-2">Telefones</p>
                  <p className="text-gray-400 font-montserrat text-sm">
                    Gustavo Siqueira<br />
                    <a
                      href="tel:+5513974029604"
                      className="text-[#D4AF37] hover:text-[#C5A028] transition-colors"
                    >
                      +55 13 974029604
                    </a>
                  </p>
                  <p className="text-gray-400 font-montserrat text-sm mt-2">
                    Nivaldo Augusto<br />
                    <a
                      href="tel:+5513974241320"
                      className="text-[#D4AF37] hover:text-[#C5A028] transition-colors"
                    >
                      +55 13 974241320
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-[#D4AF37]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 font-montserrat text-sm">
              © 2024 G7 Trading. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm font-montserrat">
              <a href="#compliance" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Compliance
              </a>
              <a href="#privacidade" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Privacidade
              </a>
              <a href="#termos" className="text-gray-400 hover:text-[#D4AF37] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
