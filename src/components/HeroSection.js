export default function HeroSection({ toadData }) {
  return (
    <header className="h-screen min-h-[600px] w-full relative flex items-center justify-center text-center">
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <img src={toadData.heroImage} alt="Sapo-Cururu em detalhe" className="absolute inset-0 w-full h-full object-cover z-0" />
      <div className="relative z-20 p-6 max-w-4xl mx-auto">
        <p className="text-lg md:text-xl text-text-main">{toadData.popularName}</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-text-main leading-tight mt-2">
          Sapo-Cururu
        </h1>
        <p className="text-xl md:text-2xl mt-4 text-text-main italic">{toadData.scientificName}</p>
      </div>
    </header>
  );
}
