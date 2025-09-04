export default function PopularCultureSection() {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 scroll-animate">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gradient">Na Cultura Popular</h2>
          <p className="mt-4 text-lg text-text-secondary">O Sapo-Cururu no imaginário popular.</p>
        </div>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-text-main">
            O Sapo-Cururu é uma figura presente no folclore e na cultura popular brasileira. A cantiga de roda &quot;Sapo Cururu na beira do rio&quot; é um exemplo clássico, conhecida por gerações de crianças.
          </p>
        </div>
        <div className="w-full max-w-4xl mx-auto my-8">
          <iframe 
            src="https://www.youtube.com/embed/ZrxjmULA9Ug?si=JTH70Cvf2L9io7rT" 
            title="Sapo Cururu - Galinha Pintadinha" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
            className="rounded-lg shadow-lg w-full h-[25vh] md:h-[50vh]"
          ></iframe>
        </div>
        <p className="text-center text-sm text-text-secondary">A música infantil &quot;Sapo Cururu&quot; da Galinha Pintadinha.</p>
        <div className="max-w-3xl mx-auto text-justify mt-8">
          <p className="text-lg text-text-main">
            Na literatura, o sapo é frequentemente retratado como um personagem sábio e conhecedor dos segredos da floresta. Em algumas lendas, ele é um guardião de tesouros ou um ser mágico capaz de se transformar em humano.
          </p>
          <p className="text-lg text-text-main mt-4">
            Apesar de sua aparência e veneno, o Sapo-Cururu também é visto com simpatia em algumas representações, como um animal que, apesar de sua rusticidade, faz parte do equilíbrio da natureza.
          </p>
        </div>
      </div>
    </section>
  );
}
