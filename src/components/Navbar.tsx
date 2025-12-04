import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuAberto, setMenuAberto] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuAberto(false);
  }, [location]);

  const menuItems = [
    { nome: 'Início', path: '/' },
    { nome: 'Serviços', path: '/servicos' },
    { nome: 'Portfólio', path: '/portfolio' },
    { nome: 'Sobre', path: '/sobre' },
    { nome: 'Contato', path: '/contato' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg py-3' 
          : 'bg-white py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition">
          <img 
            src="/logo.png" 
            alt="Felipe Freitas Logo" 
            className="h-12 w-auto object-contain"
            onError={(e) => {
              // Se a imagem não carregar, mostra um fallback
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback se a logo não carregar */}
          <div className="hidden w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <img src="https://i.postimg.cc/Vsbx9RcS/FFR-(3).jpg" alt="logo" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-gray-900">Felipe Freitas</span>
            <span className="text-xs text-gray-600">Desenvolvedor Full Stack</span>
          </div>
        </Link>

        {/* Menu Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium transition ${
                location.pathname === item.path
                  ? 'text-blue-600'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {item.nome}
            </Link>
          ))}
          <Link
            to="/contato"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition"
          >
            Solicitar Orçamento
          </Link>
        </div>

        {/* Botão Menu Mobile */}
        <button
          className="md:hidden text-gray-900"
          onClick={() => setMenuAberto(!menuAberto)}
        >
          {menuAberto ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile Expandido */}
      {menuAberto && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <div className="flex flex-col p-6 gap-4">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-left font-medium transition ${
                  location.pathname === item.path
                    ? 'text-blue-600'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.nome}
              </Link>
            ))}
            <Link
              to="/contato"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full text-center"
            >
              Solicitar Orçamento
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}