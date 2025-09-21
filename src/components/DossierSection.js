
import { useState } from 'react';

// Função utilitária para destacar nomes científicos
function highlightScientificNames(text) {
  if (!text) return text;
  // Lista de nomes científicos a destacar
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
  ];
  let result = text;
  names.forEach(name => {
    // Regex para pegar nomes entre *asteriscos* ou sozinhos
    const regex = new RegExp(`(\\*?)(${name.replace('.', '\\.')})(\\*?)`, 'g');
    result = result.replace(regex, (_, pre, match, post) => {
      return `<span class=\"italic underline\">${match}</span>`;
    });
  });
  return result;
}

export default function DossierSection({ toadData }) {
  const [activeCategory, setActiveCategory] = useState(toadData.dossier[0]);
  const [activeItem, setActiveItem] = useState(toadData.dossier[0].items[0]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Dossiê Biológico</h2>
          <p className="mt-4 text-lg text-text-secondary">Uma análise aprofundada da Rhinella marina.</p>
        </div>

        <div className="bg-surface rounded-lg shadow-lg flex flex-col lg:flex-row min-h-[600px]">
          {/* Abas da Pasta */}
          <div className="lg:w-1/4 w-full bg-surface-darker rounded-t-lg lg:rounded-l-lg lg:rounded-tr-none p-4 border-b lg:border-b-0 lg:border-r border-primary/20">
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-x-visible scrollbar-hide">
              {toadData.dossier.map(category => (
                <button
                  key={category.category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveItem(category.items[0]);
                  }}
                  className={`flex-shrink-0 lg:w-full text-left px-4 py-3 rounded-lg transition-all duration-300 text-base md:text-lg font-bold whitespace-nowrap lg:whitespace-normal ${activeCategory.category === category.category ? 'bg-primary/20 text-primary scale-105 shadow-md' : 'hover:bg-primary/10'}`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo da Pasta */}
          <div className="lg:w-3/4 w-full flex flex-col lg:flex-row p-0">
            {/* Menu de Itens - Mobile: horizontal scroll, Desktop: vertical */}
            <div className="block lg:hidden w-full border-b border-primary/20 bg-surface-darker px-4 py-2">
              <div className="flex space-x-2 overflow-x-auto scrollbar-hide pb-2">
                {activeCategory.items.map(item => (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item)}
                    className={`flex-shrink-0 px-4 py-2 rounded-md transition-colors duration-200 text-base font-semibold whitespace-nowrap ${activeItem.label === item.label ? 'bg-primary/10 text-primary' : 'hover:bg-surface-lighter text-text-secondary'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Menu de Itens - Desktop: vertical */}
            <div className="hidden lg:block lg:w-1/3 pr-8 border-r border-primary/20 py-8">
              <div className="space-y-2">
                {activeCategory.items.map(item => (
                  <button
                    key={item.label}
                    onClick={() => setActiveItem(item)}
                    className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${activeItem.label === item.label ? 'bg-primary/10 text-primary' : 'hover:bg-surface-lighter'}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Descrição do Item */}
            <div className="w-full lg:w-2/3 px-6 py-8">
              <h3 className="text-2xl font-bold text-text-main mb-2" dangerouslySetInnerHTML={{__html: highlightScientificNames(activeItem.label)}} />
              {activeItem.value && <p className="text-lg text-secondary mb-4 font-semibold" dangerouslySetInnerHTML={{__html: highlightScientificNames(activeItem.value)}} />}
              <p className="text-text-main leading-relaxed text-justify" dangerouslySetInnerHTML={{__html: highlightScientificNames(activeItem.description)}} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
