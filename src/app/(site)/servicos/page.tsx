export default function ServicosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-12">
      <div className="space-y-3">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Serviços e Atendimentos</h1>
        <p className="text-slate-600">Conheça as modalidades de consulta oferecidas.</p>
      </div>

      <div className="space-y-8">
        <div className="p-8 bg-white border border-slate-200 rounded-2xl space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">1. Terapia Individual (Adolescentes - Adultos)</h2>
          <p className="text-slate-600 leading-relaxed">
            Focada nas necessidades do paciente, abordando questões como ansiedade, depressão, estresse, transições de vida e autoconhecimento.
          </p>
          <div className="text-sm font-medium text-sky-400">Duração: 50 minutos por sessão</div>
        </div>

        <div className="p-8 bg-white border border-slate-200 rounded-2xl space-y-4">
          <h2 className="text-2xl font-semibold text-slate-800">2. Orientação Vocacional</h2>
          <p className="text-slate-600 leading-relaxed">
            Sessões realizadas por videochamada com a mesma eficácia da consulta presencial, no conforto da sua casa e com total sigilo.
          </p>
          <div className="text-sm font-medium text-sky-400">Orientação completa: 3 etapas</div>
        </div>
      </div>
    </div>
  );
}