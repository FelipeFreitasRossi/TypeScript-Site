import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Award, Users, TrendingUp, Coffee, Zap, Heart, Target, ArrowRight } from 'lucide-react';

export default function Sobre() {

  const valores = [
    {
      icone: <Zap size={32} />,
      titulo: 'Agilidade',
      descricao: 'Entregas rápidas sem comprometer a qualidade. Seu tempo é valioso.'
    },
    {
      icone: <Heart size={32} />,
      titulo: 'Paixão',
      descricao: 'Amo o que faço e isso se reflete em cada linha de código que escrevo.'
    },
    {
      icone: <Target size={32} />,
      titulo: 'Foco em Resultados',
      descricao: 'Não entrego apenas código, entrego soluções que geram impacto real.'
    }
  ];

  return (
    <div className="bg-white pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Esquerda - Imagem/Avatar */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl flex items-center justify-center text-white text-9xl shadow-2xl">
                <img src="https://i.postimg.cc/XNFSb8qs/Foto.jpg" alt="" />
              </div>
              {/* Badges flutuantes */}
              <div className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-blue-600">1+</div>
                <div className="text-sm text-gray-600">Anos</div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl">
                <div className="text-3xl font-bold text-purple-600">20+</div>
                <div className="text-sm text-gray-600">Projetos</div>
              </div>
            </div>

            {/* Direita - Texto */}
            <div>
              <div className="inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                Prazer, sou Felipe!
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Desenvolvedor{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Full Stack
                </span>
              </h1>
              
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Olá! Sou <strong>Felipe Freitas Rossi</strong>, desenvolvedor Full Stack 
                  apaixonado por criar soluções digitais que realmente fazem a diferença.
                </p>
                <p>
                  Com mais de <strong>1 anos de experiência</strong> e <strong>20+ projetos entregues</strong>, 
                  minha missão é transformar ideias em produtos digitais funcionais, bonitos e 
                  que geram resultados reais para meus clientes.
                </p>
                <p>
                  Especializado em <strong>Landing Pages de alta conversão</strong>, <strong>ChatBots inteligentes</strong> e 
                  <strong> sistemas web personalizados</strong>. Trabalho principalmente com 
                  React, TypeScript, Node.js e as melhores tecnologias do mercado.
                </p>
              </div>

              <div className="flex gap-4 mt-8">
                <Link
                  to="/contato"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-bold hover:shadow-xl transition flex items-center gap-2"
                >
                  Vamos Conversar
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/portfolio"
                  className="border-2 border-gray-300 px-8 py-4 rounded-full font-bold hover:border-blue-600 hover:text-blue-600 transition"
                >
                  Ver Portfólio
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Meus Valores
            </h2>
            <p className="text-xl text-gray-600">
              O que me guia em cada projeto
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {valores.map((valor, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 text-center hover:shadow-xl transition">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white mx-auto mb-6">
                  {valor.icone}
                </div>
                <h3 className="text-2xl font-bold mb-3">{valor.titulo}</h3>
                <p className="text-gray-700">{valor.descricao}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Números */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Resultados em Números
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icone: <Code2 size={40} />, numero: '20+', label: 'Projetos Entregues' },
              { icone: <Users size={40} />, numero: '50+', label: 'Clientes Felizes' },
              { icone: <Award size={40} />, numero: '100%', label: 'Taxa de Satisfação' },
              { icone: <TrendingUp size={40} />, numero: '100%', label: 'No Prazo' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4 opacity-80">
                  {stat.icone}
                </div>
                <div className="text-5xl font-bold mb-2">{stat.numero}</div>
                <div className="text-blue-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trajetória */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Minha Trajetória
            </h2>
            <p className="text-xl text-gray-600">
              Como cheguei até aqui
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                ano: '2024',
                titulo: 'Início da Jornada',
                descricao: 'Comecei a estudar Desenvolvimento de Sistemas na escola SENAI São Carlos.'
              },
              {
                ano: '2025',
                titulo: 'Primeiros Projetos',
                descricao: 'Entreguei meus primeiros projetos freelance e descobri que gosto de criar soluções que resolvem problemas reais. Formei-me em Python e também concluí o curso de Desenvolvimento de Sistemas.'
              },

            ].map((etapa, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {etapa.ano}
                </div>
                <div className="flex-1 bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold mb-2">{etapa.titulo}</h3>
                  <p className="text-gray-700">{etapa.descricao}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Vamos trabalhar juntos?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Gostaria de ouvir sobre seu projeto e como posso ajudar
          </p>
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition"
          >
            Entrar em Contato
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}