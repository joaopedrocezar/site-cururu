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

export default function VenomSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-16 scroll-animate">
          <div className="flex justify-center items-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1-4h2v2h-2v-2zm0-4h2v2h-2V9z" />
            </svg>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">O Veneno do Cururu</h2>
          <p className="mt-4 text-lg text-text-secondary" dangerouslySetInnerHTML={{__html: highlightScientificNames('Uma análise da poderosa bufotoxina.')}} />
        </div>
        <div className="prose prose-invert max-w-none mx-auto text-text-main">
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('O Sapo-Cururu é famoso por seu veneno potente, a bufotoxina. Essa substância leitosa é secretada por grandes glândulas parotoides localizadas atrás dos olhos do sapo. Quando ameaçado, o sapo pode esguichar o veneno a uma distância considerável.')}} />
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('A bufotoxina é um coquetel complexo de mais de 100 compostos, incluindo bufadienolídeos, que são semelhantes aos digitálicos usados em medicamentos para o coração. Esses compostos podem causar parada cardíaca em predadores que tentam comer o sapo.')}} />
          <p dangerouslySetInnerHTML={{__html: highlightScientificNames('Além dos bufadienolídeos, o veneno também contém aminas biogênicas, como a serotonina, que causam alucinações e outros efeitos neurológicos. Essa defesa química é tão eficaz que até mesmo os ovos e girinos do Sapo-Cururu são tóxicos.')}} />
        </div>
      </div>
    </section>
  );
}