"use client";

import { useState, useEffect, useRef } from 'react';

// --- DADOS COMPLETOS E DETALHADOS ---
const toadData = {
  popularName: "Sapo-Cururu, Sapo-Boi",
  scientificName: "Rhinella marina",
  heroImage: "https://images.unsplash.com/photo-1584468339866-5c4d2c54db0f?q=80&w=1331&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  
  dossier: [
    { 
      category: "Classificação",
      items: [
        { label: "Reino", value: "Animalia", description: "O Reino Animalia agrupa organismos multicelulares, eucariontes e heterotróficos. Caracterizam-se pela motilidade (em alguma fase da vida), ausência de parede celular e desenvolvimento embrionário complexo, com a formação de tecidos distintos. O Sapo-Cururu, como animal, exibe todas essas características fundamentais." },
        { label: "Filo", value: "Chordata", description: "Os cordados são animais que possuem, em alguma fase do desenvolvimento, uma notocorda (eixo de sustentação dorsal), um tubo neural dorsal oco, fendas faringianas e uma cauda pós-anal. No Sapo-Cururu, a notocorda é substituída pela coluna vertebral na fase adulta, característica que o insere no subfilo Vertebrata." },
        { label: "Classe", value: "Amphibia", description: "A classe Amphibia inclui os vertebrados de 'vida dupla', que transitam entre o ambiente aquático e terrestre. Possuem pele permeável e glandular, essencial para a respiração cutânea, que complementa a respiração pulmonar. Seu ciclo de vida tipicamente inclui uma fase larval aquática (girino) com respiração branquial." },
        { label: "Ordem", value: "Anura", description: "A ordem Anura agrupa os anfíbios sem cauda na fase adulta ('a' = sem, 'oura' = cauda). Seus membros posteriores são alongados e musculosos, uma adaptação para o salto. Possuem um corpo curto, robusto e uma fusão de vértebras na região posterior da coluna (o uróstilo), que confere rigidez para a locomoção." },
        { label: "Família", value: "Bufonidae", description: "Esta é a família dos 'sapos verdadeiros'. Uma de suas sinapomorfias (características derivadas compartilhadas) mais marcantes é a presença de glândulas parotoides na pele, que produzem um coquetel de secreções tóxicas. Além disso, muitos bufonídeos não possuem dentes." },
        { label: "Gênero", value: "Rhinella", description: "O gênero *Rhinella* ('rhinos' = nariz, em referência ao focinho proeminente de algumas espécies) agrupa diversas espécies de sapos neotropicais, anteriormente classificadas no gênero *Bufo*. São geralmente robustos, terrestres e com pele bastante verrucosa." },
        { label: "Espécie", value: "R. marina", description: "A espécie *Rhinella marina* é o nome científico formal do Sapo-Cururu. O epíteto 'marina' foi dado por Lineu devido a um relato equivocado de que o animal habitava ambientes marinhos, o que não é verdade. É uma das maiores e mais bem-sucedidas espécies da família Bufonidae." },
      ]
    },
    {
      category: "Biologia e Ecologia",
      items: [
        { label: "Habitat", value: "Florestas, savanas, áreas urbanas", description: "A *Rhinella marina* exibe uma plasticidade de habitat extraordinária, sendo um generalista ecológico. Originalmente encontrada em florestas tropicais e subtropicais úmidas da América Neotropical, sua tolerância a variações de temperatura e umidade permitiu a colonização de ecossistemas sinantrópicos (alterados pelo homem), como pastagens, plantações, parques urbanos e jardins. A única exigência crítica é o acesso a corpos d'água (lentos ou parados) para a reprodução." },
        { label: "Origem e Distribuição", value: "Nativo das Américas, invasor global", description: "Sua área de ocorrência nativa estende-se do Vale do Rio Grande, no sul do Texas (EUA), através da América Central, até o centro da Bacia Amazônica. No século XX, foi intencionalmente introduzido em mais de 40 países como agente de controle biológico de pragas agrícolas, notadamente na Austrália em 1935. A iniciativa falhou, e o sapo tornou-se uma das espécies invasoras mais prejudiciais do planeta." },
        { label: "Nutrição", value: "Carnívoro generalista e voraz", description: "Como um caçador de emboscada, utiliza sua língua pegajosa e protrátil para capturar uma vasta gama de presas. A base de sua alimentação consiste em artrópodes (besouros, formigas, grilos, baratas), mas indivíduos maiores são predadores vorazes de pequenos vertebrados, incluindo roedores, outros sapos (canibalismo), lagartos, pequenas cobras e filhotes de aves que caem dos ninhos. Sua dieta é limitada apenas pelo tamanho de sua boca." },
        { label: "Reprodução", value: "Ovíparo com alta fecundidade", description: "A reprodução é aquática e frequentemente explosiva, ocorrendo após chuvas fortes. Os machos vocalizam para atrair as fêmeas. Durante o amplexo (abraço nupcial), a fêmea deposita entre 8.000 e 30.000 ovos em longos cordões gelatinosos que aderem à vegetação submersa. Os ovos eclodem em 2 a 7 dias, liberando girinos que, assim como os ovos, são tóxicos para a maioria dos predadores. Esta alta fecundidade e defesa química precoce são cruciais para seu sucesso populacional." },
        { label: "Status de Conservação", value: "Pouco Preocupante (LC)", description: "Classificado como 'Pouco Preocupante' pela IUCN. Esta classificação, embora tecnicamente correta devido à sua imensa população global, é paradoxal. A espécie não enfrenta risco de extinção; pelo contrário, seu sucesso reprodutivo e adaptativo a torna uma grave ameaça à biodiversidade em todos os ecossistemas que invade, sendo o foco de intensos programas de controle." },
      ]
    }
  ],
  
  curiosities: [
    {
      title: "Evolução em Tempo Real",
      content: "Na Austrália, cientistas observaram um fascinante exemplo de 'evolução rápida'. Indivíduos na vanguarda da expansão desenvolveram pernas traseiras proporcionalmente mais longas, permitindo que se movam mais rápido e colonizem novos territórios a uma velocidade crescente (de 10km para 60km por ano). Este traço, no entanto, veio com um custo fisiológico: uma maior incidência de artrite espinhal, mostrando a complexa balança da seleção natural.",
      image: "https://images.unsplash.com/photo-1612231459938-132d30406d75?q=80&w=2532&auto=format&fit=crop",
    },
    {
      title: "Coquetel Tóxico Sofisticado",
      content: "A bufotoxina secretada pelas glândulas parotoides não é um veneno simples. É um coquetel complexo de mais de 100 compostos, incluindo bufadienolídeos, que causam parada cardíaca, e aminas biogênicas, que afetam o sistema nervoso. Esta defesa química é tão eficaz que até mesmo os ovos e girinos são tóxicos, uma estratégia rara que garante a sobrevivência da prole contra predadores aquáticos.",
      image: "https://images.unsplash.com/photo-1548158580-34346b7f3339?q=80&w=2574&auto=format&fit=crop",
    },
    {
      title: "Um Predador Inesperado",
      content: "Apesar de sua toxicidade letal para a maioria da fauna australiana, uma espécie nativa demonstrou resistência: a cobra-quilha (*Tropidonophis mairii*). Através da seleção natural, populações desta cobra que coexistem com o sapo desenvolveram uma tolerância fisiológica à bufotoxina. Elas são capazes de predar os sapos-cururus, representando um raro caso de adaptação da fauna local à espécie invasora.",
      image: "https://images.unsplash.com/photo-1579563428052-534a1b417780?q=80&w=2574&auto=format&fit=crop",
    }
  ],

  gallery: [
    "https://images.unsplash.com/photo-1529323-216124143138?q=80&w=2570&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1608775959969-974ab217e257?q=80&w=2535&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548158580-34346b7f3339?q=80&w=2574&auto=format&fit=crop",
  ]
};

// --- HOOK PARA ANIMAÇÃO DE SCROLL ---
const useScrollAnimation = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach(el => observer.observe(el));

    return () => elements.forEach(el => observer.unobserve(el));
  }, []);
};

// --- COMPONENTE PRINCIPAL ---
export default function SapoCururuSite() {
  useScrollAnimation();
  const [activeTopic, setActiveTopic] = useState(toadData.dossier[0].items[0]);
  const [currentCuriosityIndex, setCurrentCuriosityIndex] = useState(0);

  const handleNextCuriosity = () => {
    setCurrentCuriosityIndex((prevIndex) => (prevIndex + 1) % toadData.curiosities.length);
  };

  const handlePrevCuriosity = () => {
    setCurrentCuriosityIndex((prevIndex) => (prevIndex - 1 + toadData.curiosities.length) % toadData.curiosities.length);
  };

  return (
    <div className="bg-gray-900 text-gray-300 font-sans selection:bg-green-500/40">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800&display=swap');
        
        .font-sans { font-family: 'Manrope', sans-serif; }
        
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-content-swap {
          animation: contentSwap 0.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes contentSwap {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .text-gradient {
          background: linear-gradient(to right, #a7f3d0, #34d399);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero Section */}
      <header className="h-screen min-h-[600px] w-full relative flex items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img src={toadData.heroImage} alt="Sapo-Cururu em detalhe" className="absolute inset-0 w-full h-full object-cover z-0" />
        <div className="relative z-20 p-6 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-gray-200">{toadData.popularName}</p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-tight mt-2">
            Sapo-Cururu
          </h1>
          <p className="text-xl md:text-2xl mt-4 text-gray-300 italic">{toadData.scientificName}</p>
        </div>
      </header>

      <main className="w-full">
        {/* Seção Dossiê Biológico */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-6 max-w-7xl">
            <div className="text-center mb-16 scroll-animate">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Dossiê Biológico</h2>
              <p className="mt-4 text-lg text-gray-400">Uma análise aprofundada da *Rhinella marina*.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-12 md:gap-16">
              {/* Coluna do Menu */}
              <div className="lg:w-1/3 w-full scroll-animate">
                {toadData.dossier.map(category => (
                  <div key={category.category} className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                    <div className="space-y-2">
                      {category.items.map(item => (
                        <button 
                          key={item.label} 
                          onClick={() => setActiveTopic(item)}
                          className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${activeTopic.label === item.label ? 'bg-green-500/20 text-green-300' : 'bg-gray-800 hover:bg-gray-700/50'}`}
                        >
                          <span className="font-bold">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Coluna do Conteúdo Detalhado */}
              <div className="lg:w-2/3 w-full scroll-animate" style={{ animationDelay: '200ms' }}>
                <div className="bg-gray-800 p-8 rounded-lg sticky top-10">
                  <h3 className="text-2xl font-bold text-white mb-1">{activeTopic.label}</h3>
                  {activeTopic.value && <p className="text-lg text-green-400 mb-4 font-semibold">{activeTopic.value}</p>}
                  <p className="text-gray-300 leading-relaxed">{activeTopic.description}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Curiosidades (Carrossel) */}
        <section className="py-20 md:py-28 bg-gray-800/50">
           <div className="container mx-auto px-6 max-w-6xl">
              <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-16">
                
                <div className="md:w-1/2 w-full scroll-animate relative">
                  <img 
                    src={toadData.curiosities[currentCuriosityIndex].image} 
                    alt={toadData.curiosities[currentCuriosityIndex].title} 
                    className="rounded-lg shadow-2xl w-full h-auto object-cover"
                  />
                   <div className="absolute inset-0 flex justify-between items-center p-2">
                      <button onClick={handlePrevCuriosity} aria-label="Anterior" className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                      </button>
                      <button onClick={handleNextCuriosity} aria-label="Próximo" className="bg-black/40 text-white rounded-full p-2 hover:bg-black/60 transition-colors focus:outline-none focus:ring-2 focus:ring-green-400">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                      </button>
                    </div>
                </div>

                <div className="md:w-1/2 w-full scroll-animate" style={{ animationDelay: '200ms' }}>
                    <div key={currentCuriosityIndex} className="animate-content-swap">
                      <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-gradient">{toadData.curiosities[currentCuriosityIndex].title}</h2>
                      <p className="text-lg text-gray-400 leading-relaxed min-h-[220px] md:min-h-[250px]">{toadData.curiosities[currentCuriosityIndex].content}</p>
                    </div>
                    <div className="flex justify-center md:justify-start gap-3 mt-8">
                      {toadData.curiosities.map((_, index) => (
                        <button
                          key={index}
                          aria-label={`Ir para curiosidade ${index + 1}`}
                          onClick={() => setCurrentCuriosityIndex(index)}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${currentCuriosityIndex === index ? 'bg-green-400 w-6' : 'bg-gray-600 hover:bg-gray-500'}`}
                        />
                      ))}
                    </div>
                </div>

              </div>
            </div>
        </section>

        {/* Galeria */}
        <section className="py-20 md:py-28 bg-gray-900">
          <div className="container mx-auto px-6 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 scroll-animate">Galeria de Fotos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {toadData.gallery.map((image, index) => (
                <div key={index} className="group overflow-hidden rounded-lg shadow-lg scroll-animate" style={{ animationDelay: `${index * 100}ms` }}>
                  <img src={image} alt={`Imagem da galeria ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"/>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800/50 py-10 text-center">
        <p className="text-gray-500">Dossiê Biológico: Rhinella marina</p>
      </footer>
    </div>
  );
}
