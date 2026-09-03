import Link from 'next/link';


export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Dra. Luany Frateschi</h3>
          <span></span>
          <p className="text-sm leading-relaxed">
            Psicóloga Clínica — CRP 06/216967.<br />
            Atendimento presencial e online focado em bem-estar e saúde mental.
          </p>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Navegação</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
            <li><Link href="/sobre" className="hover:text-white transition-colors">Sobre Mim</Link></li>
            <li><Link href="/servicos" className="hover:text-white transition-colors">Serviços</Link></li>
            <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-medium mb-3 text-sm">Contato</h4>
          <p className="text-sm">São Paulo - SP</p>
          <p className="text-sm mt-1">luanyfrateschi.psi@gmail.com</p>
          <Link href="https://luanyfrateschi.sanity.studio/" className='text-sm'>Studio</Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-xs text-center">
        © {new Date().getFullYear()} Dra. Luany Frateschi. Todos os direitos reservados.
      </div>
    </footer>
  );
}