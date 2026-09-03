'use client';

import { useState } from 'react';
import Link from 'next/link';

export function Footer() {
  const [activeModal, setActiveModal] = useState<'privacy' | 'terms' | null>(null);

  const closeModal = () => setActiveModal(null);

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Luany Frateschi | Psicologa</h3>
          <p className="text-sm leading-relaxed">
            Psicóloga Clínica — CRP 06/216967.<br />
            Atendimento online focado em bem-estar e saúde mental.
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
          <Link href="https://luanyfrateschi.sanity.studio/" className="text-sm text-slate-500 hover:text-slate-300 transition-colors block mt-2">
            Studio
          </Link>
        </div>
      </div>

      {/* Seção inferior do Footer com links de Políticas e Termos */}
      <div className="max-w-6xl mx-auto px-4 mt-8 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Dra. Luany Frateschi. Todos os direitos reservados.</p>
        
        <div className="flex gap-4">
          <button 
            onClick={() => setActiveModal('privacy')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Política de Privacidade
          </button>
          <span>•</span>
          <button 
            onClick={() => setActiveModal('terms')}
            className="hover:text-white transition-colors underline-offset-4 hover:underline"
          >
            Termos de Uso
          </button>
        </div>
      </div>

      {/* Janela Modal (Política de Privacidade / Termos de Uso) */}
      {activeModal && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          {/* Overlay clicável para fechar */}
          <div className="absolute inset-0" onClick={closeModal} />

          <div className="relative bg-white text-slate-800 rounded-2xl max-w-2xl w-full max-h-[80vh] flex flex-col shadow-2xl z-10 overflow-hidden">
            {/* Cabeçalho do Modal */}
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <h3 className="font-semibold text-lg text-slate-900">
                {activeModal === 'privacy' ? 'Política de Privacidade' : 'Termos de Uso'}
              </h3>
              <button 
                onClick={closeModal}
                className="text-slate-400 hover:text-slate-600 text-xl font-bold p-1 rounded-lg hover:bg-slate-200/50 transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Conteúdo rolável */}
            <div className="p-6 overflow-y-auto space-y-4 text-sm text-slate-600 leading-relaxed">
              {activeModal === 'privacy' ? (
                <>
                  <p>
                    A sua privacidade é importante para nós. É política do consultório da <strong>Dra. Luany Frateschi</strong> respeitar a sua privacidade em relação a qualquer informação que possamos coletar no site.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Coleta e Uso de Informações</h4>
                  <p>
                    Solicitamos informações pessoais (como nome e telefone) apenas quando realmente precisamos delas para lhe prestar um serviço de agendamento ou atendimento psicológico. Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Sigilo Profissional</h4>
                  <p>
                    Todas as informações compartilhadas durante os atendimentos psicológicos seguem estritamente o Código de Ética Profissional do Psicólogo (CFP), garantindo o sigilo e a confidencialidade das sessões.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Compartilhamento de Dados</h4>
                  <p>
                    Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Ao acessar ao site da <strong>Dra. Luany Frateschi</strong>, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Uso de Licença</h4>
                  <p>
                    O conteúdo deste site (textos, marca, elementos visuais) é protegido por direitos autorais e de propriedade intelectual. É proibida a reprodução parcial ou total dos conteúdos sem autorização prévia.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Caráter Informativo</h4>
                  <p>
                    Os artigos e textos contidos no Blog e no site possuem caráter puramente informativo e educativo, não substituindo o diagnóstico ou acompanhamento psicológico individualizado.
                  </p>
                  <h4 className="font-semibold text-slate-800 text-base pt-2">Agendamentos</h4>
                  <p>
                    A solicitação de agendamento através do site ou do botão do WhatsApp está sujeita à verificação de disponibilidade de horários na agenda profissional.
                  </p>
                </>
              )}
            </div>

            {/* Rodapé do Modal */}
            <div className="p-4 border-t border-slate-100 bg-slate-50 text-right">
              <button
                onClick={closeModal}
                className="bg-sky-400 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-sky-500 transition-colors"
              >
                Entendi
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}