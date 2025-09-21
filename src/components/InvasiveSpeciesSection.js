// Função utilitária para destacar nomes científicos
function highlightScientificNames(text) {
  if (!text) return text;
  const names = [
    'Rhinella marina',
    'Rhinella',
    'Bufo',
    'Tropidonophis mairii',
    'Amphibia',
    'Anura',
    'Bufonidae',
    'Chordata',
    'Animalia',
    'R. marina',
    'bufotoxina',
  ];
  let result = text;
  result = result.replace(/<em>Bufo<\/em>nidae/g, '<span class="italic underline">Bufonidae</span>');
  result = result.replace(/<i>Bufo<\/i>nidae/g, '<span class="italic underline">Bufonidae</span>');
  names.forEach(name => {
    result = result.replace(new RegExp(`(<em>|<i>)(${name})(</em>|</i>)`, 'gi'), `<span class=\"italic underline\">${name}</span>`);
    result = result.replace(new RegExp(`\\*${name}\\*`, 'gi'), `<span class=\"italic underline\">${name}</span>`);
    result = result.replace(new RegExp(`\b${name}\b`, 'gi'), `<span class=\"italic underline\">${name}</span>`);
  });
  return result;
}

export default function InvasiveSpeciesSection() {
  return (
    <section className="py-20 md:py-28 bg-surface/50">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Espécie Invasora</h2>
          <p className="mt-4 text-lg text-text-secondary" dangerouslySetInnerHTML={{__html: highlightScientificNames('O impacto global da *Rhinella marina*.')}} />
        </div>
        <div className="prose prose-invert max-w-none mx-auto text-text-main">
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('Apesar de ser nativo das Américas, o Sapo-Cururu foi introduzido em mais de 40 países como um agente de controle biológico de pragas na agricultura. No entanto, a iniciativa falhou e o sapo tornou-se uma das espécies invasoras mais prejudiciais do planeta.')}} />
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('Na Austrália, a introdução do Sapo-Cururu em 1935 para controlar um besouro de cana-de-açúcar é um exemplo clássico de desastre ecológico. Os sapos não apenas não controlaram a praga, como também se espalharam por todo o país, causando um declínio devastador nas populações de predadores nativos, como cobras, lagartos e marsupiais, que morrem ao tentar comer os sapos venenosos.')}} />
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('O sucesso do Sapo-Cururu como invasor se deve à sua alta fecundidade, dieta generalista e defesas químicas potentes. Programas de controle e erradicação foram implementados em vários países, mas a tarefa é extremamente difícil e cara.')}} />
        </div>
      </div>
    </section>
  );
}