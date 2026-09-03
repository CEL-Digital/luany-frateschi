'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Nome da Psicóloga */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-800">
          Luany Frateschi <span className="text-sky-400 font-normal">| Psicologia</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-sky-400 transition-colors">
            Início
          </Link>
          <Link href="/sobre" className="hover:text-sky-400 transition-colors">
            Sobre Mim
          </Link>
          <Link href="/servicos" className="hover:text-sky-400 transition-colors">
            Serviços
          </Link>
          <Link href="/blog" className="hover:text-sky-400 transition-colors">
            Blog
          </Link>
        </nav>

        {/* Ações / Botões (Desktop & Mobile) */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/5511915424994?text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20agendamentos!"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-block bg-sky-400 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors"
          >
            Agendar Consulta
          </a>

          {/* Botão Hambúrguer (Mobile) */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-700 p-2 hover:text-sky-400 focus:outline-none"
            aria-label="Abrir Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Overlay escuro de fundo ao abrir menu */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}

      {/* Off-canvas Menu Mobile (Desliza da direita para a esquerda) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 p-6 flex flex-col justify-between shadow-xl transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <span className="font-semibold text-slate-800">Navegação</span>
            <button onClick={toggleMenu} className="text-slate-500 hover:text-slate-800">
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col gap-4 text-base font-medium text-slate-600">
            <Link href="/" onClick={toggleMenu} className="hover:text-sky-400 transition-colors">
              Início
            </Link>
            <Link href="/sobre" onClick={toggleMenu} className="hover:text-sky-400 transition-colors">
              Sobre Mim
            </Link>
            <Link href="/servicos" onClick={toggleMenu} className="hover:text-sky-400 transition-colors">
              Serviços
            </Link>
            <Link href="/blog" onClick={toggleMenu} className="hover:text-sky-400 transition-colors">
              Blog
            </Link>
          </nav>
        </div>

        <div className="pt-6 border-t border-slate-100">
          <a
            href="https://wa.me/5511915424994?text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20agendamentos!"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-sky-400 text-white py-3 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors"
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}