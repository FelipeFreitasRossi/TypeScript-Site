import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Coluna 1 - Sobre */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img 
                src="/logo.png" 
                alt="Felipe Freitas" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <img src="https://i.postimg.cc/Vsbx9RcS/FFR-(3).jpg" alt="Logo" />
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Desenvolvedor Full Stack especializado em criar soluções digitais 
              que transformam negócios e geram resultados reais.
            </p>
          </div>

          {/* Coluna 2 - Links Rápidos */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Navegação</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/" className="hover:text-white transition">Início</Link></li>
              <li><Link to="/servicos" className="hover:text-white transition">Serviços</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">Portfólio</Link></li>
              <li><Link to="/sobre" className="hover:text-white transition">Sobre</Link></li>
              <li><Link to="/contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>

          {/* Coluna 3 - Contato */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contato</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:contato@felipefreitas.dev" className="hover:text-white transition">
                  lipeferossi@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-blue-400" />
                <a href="https://wa.me/5516996167381" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-blue-400" />
                <span>São Carlos, SP - Brasil</span>
              </li>
            </ul>
          </div>

          {/* Coluna 4 - Redes Sociais */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Redes Sociais</h4>
            <p className="text-gray-400 mb-4">
              Me acompanhe nas redes sociais e veja meus projetos!
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.linkedin.com/in/FelipeFreitasRossi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://www.instagram.com/Fezinn_08" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://github.com/FelipeFreitasRossi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Felipe Freitas Rossi. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}