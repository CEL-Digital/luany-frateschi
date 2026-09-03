import Image from "next/image";
import luanyFrateschi from "../../../public/luany-frateschi.webp";

export default function Home() {
  return (
    <div className="space-y-20 pb-16">
      <section className="bg-sky-100 py-20 border-b border-emerald-100/50">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-sky-700 bg-sky-400/80 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Atendimento Presencial & Online
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-tight">
              Cuidar da sua saúde mental é o primeiro passo para uma vida leve.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Acolhimento humanizado e baseado em evidências para te ajudar a lidar com a ansiedade, estresse e autoconhecimento.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <a
                href="https://wa.me/5511915424994?text=Oi!%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20agendamentos!"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-400 text-white px-6 py-3 rounded-full font-medium hover:bg-sky-500 transition-colors shadow-sm"
              >
                Agendar Consulta
              </a>
            </div>
          </div>
          <div className="bg-sky-200/60 rounded-2xl h-80 md:h-150 flex items-center justify-center text-sky-800 font-medium overflow-hidden relative">
            <Image src={luanyFrateschi} alt="" className="object-cover w-full h-full" />
          </div>
        </div>
      </section>

      {/* Resumo dos Serviços */}
      <section className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-slate-900">Como posso te ajudar</h2>
          <p className="text-slate-600 mt-2">Atendimentos personalizados para cada fase da sua jornada.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Terapia Individual</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Sessões focadas no seu desenvolvimento pessoal, ansiedade e inteligência emocional.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Orientação Vocacional</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Processo de análise de perfil, estratégias de decisão e acompanhamento na escolha.
            </p>
          </div>
          <div className="p-6 bg-white border border-slate-100 rounded-xl shadow-sm space-y-3">
            <h3 className="text-xl font-semibold text-slate-800">Método TCC</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Terapia Cognitivo-Comportamental é meu método de atendimento!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
