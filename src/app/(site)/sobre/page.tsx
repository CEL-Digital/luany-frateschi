export default function SobrePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">Sobre a Dra. Luany Frateschi</h1>
        <p className="text-sky-400 font-medium">Psicóloga Clínica — CRP 06/216967</p>
      </div>

      <div className="prose prose-slate max-w-none space-y-4 text-slate-600 leading-relaxed">
        <p>
          Olá! Sou psicóloga formada em São Paulo com especialização em Terapia Cognitivo-Comportamental (TCC). Há mais de 2 anos ajudo pessoas a compreenderem suas emoções, desenvolverem resiliência e construírem relações mais saudáveis.
        </p>
        <p>
          Acredito que o processo terapêutico é um espaço seguro e livre de julgamentos, onde trabalhamos juntos para encontrar caminhos mais leves para os desafios do dia a dia.
        </p>
      </div>

      <div className="bg-sky-50 p-6 rounded-xl space-y-3">
        <h2 className="text-lg font-semibold text-slate-800">Formação e Qualificações</h2>
        <ul className="list-disc list-inside text-slate-600 text-sm space-y-1">
          <li>Graduação em Psicologia (2024)</li>
          <li>Método de atendimento TCC - (Terapia Cognitivo-Comportamental)</li>
          <li>Palestrante</li>
        </ul>
      </div>
    </div>
  );
}