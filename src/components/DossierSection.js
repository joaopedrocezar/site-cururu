import { useState } from 'react';

export default function DossierSection({ toadData }) {
  const [activeCategory, setActiveCategory] = useState(toadData.dossier[0]);
  const [activeItem, setActiveItem] = useState(toadData.dossier[0].items[0]);

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Dossiê Biológico</h2>
          <p className="mt-4 text-lg text-text-secondary">Uma análise aprofundada da *Rhinella marina*.</p>
        </div>
        
        <div className="bg-surface rounded-lg shadow-lg flex flex-col lg:flex-row min-h-[600px]">
          {/* Abas da Pasta */}
          <div className="lg:w-1/4 w-full bg-surface-darker rounded-l-lg p-4 border-r border-primary/20">
            <div className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2">
              {toadData.dossier.map(category => (
                <button 
                  key={category.category}
                  onClick={() => {
                    setActiveCategory(category);
                    setActiveItem(category.items[0]);
                  }}
                  className={`w-full text-left p-4 rounded-lg transition-all duration-300 text-lg font-bold ${activeCategory.category === category.category ? 'bg-primary/20 text-primary scale-105 shadow-md' : 'hover:bg-primary/10'}`}>
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo da Pasta */}
          <div className="lg:w-3/4 w-full p-8 md:p-12 flex">
            {/* Menu de Itens */}
            <div className="lg:w-1/3 w-full pr-8 border-r border-primary/20">
              <div className="space-y-2">
                {activeCategory.items.map(item => (
                  <button 
                    key={item.label} 
                    onClick={() => setActiveItem(item)}
                    className={`w-full text-left p-3 rounded-md transition-colors duration-200 ${activeItem.label === item.label ? 'bg-primary/10 text-primary' : 'hover:bg-surface-lighter'}`}>
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Descrição do Item */}
            <div className="lg:w-2/3 w-full pl-8">
              <h3 className="text-2xl font-bold text-text-main mb-2">{activeItem.label}</h3>
              {activeItem.value && <p className="text-lg text-secondary mb-4 font-semibold">{activeItem.value}</p>}
              <p className="text-text-main leading-relaxed text-justify">{activeItem.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
