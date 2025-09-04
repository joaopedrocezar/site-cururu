import Image from 'next/image';

export default function GallerySection({ toadData }) {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 scroll-animate">Galeria de Fotos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {toadData.gallery.map((image, index) => (
            <div key={index} className="group overflow-hidden rounded-lg shadow-lg scroll-animate h-64" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="relative w-full h-full">
                <Image src={image} alt={`Imagem da galeria ${index + 1}`} fill={true} style={{ objectFit: 'cover' }} className="transition-transform duration-500 ease-in-out group-hover:scale-110"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
