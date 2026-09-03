import Link from 'next/link';

export function Header() {
  return (
    <header className="w-full bg-white border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo / Nome da Psicóloga */}
        <Link href="/" className="text-xl font-semibold tracking-tight text-slate-800">
          Dra. Luany Frateschi <span className="text-sky-400 font-normal">| Psicologia</span>
        </Link>

        {/* Menu de Navegação */}
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

        {/* Botão de Agendamento */}
        <a
          href="https://wa.me/5511915424994?text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20agendamentos!"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-sky-400 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors"
        >
          Agendar Consulta
        </a>
      </div>
    </header>
  );
}