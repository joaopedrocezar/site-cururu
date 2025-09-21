
import { useState, useRef } from 'react';
import Image from 'next/image';

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
    'Bufonidae.',
    'Chordata',
    'Animalia',
    'R. marina',
    'bufotoxina',
  ];
  let result = text;
  names.forEach(name => {
    // Permite pegar nomes com ponto final
    const regex = new RegExp(`(\\*?)(${name.replace('.', '\\.')})(\\*?)`, 'g');
    result = result.replace(regex, (_, pre, match, post) => {
      return `<span class=\\"italic underline\\">${match}</span>`;
    });
  });
  return result;
}

export default function CuriositiesSection({ toadData }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current = new Audio('/sounds/sapo-cururu.mp3');
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    } else {
      // First time playing
      audioRef.current = new Audio('/sounds/sapo-cururu.mp3');
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className="py-20 md:py-28 bg-surface/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Curiosidades</h2>
          <p className="mt-4 text-lg text-text-secondary">Fatos interessantes sobre o Sapo-Cururu.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {toadData.curiosities.map((curiosity, index) => (
            <div key={index} className="bg-surface rounded-lg shadow-lg overflow-hidden flex flex-col">
              <div className="relative w-full h-64">
                <Image src={curiosity.image} alt={curiosity.title} fill={true} style={{ objectFit: 'cover' }}/>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-text-main mb-4">{curiosity.title}</h3>
                <p className="text-text-main leading-relaxed flex-grow" dangerouslySetInnerHTML={{__html: highlightScientificNames(curiosity.content)}} />
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button 
            onClick={togglePlayPause}
            className="bg-primary/80 hover:bg-primary text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 text-lg"
          >
            {isPlaying ? 'Pausar o coaxar' : 'Ouvir o coaxar do Sapo-Cururu'}
          </button>
        </div>
      </div>
    </section>
  );
}