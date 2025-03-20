export default function HeroSection() {
  return (
    <section className="px-4 py-8 md:py-16 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="font-teachers text-3xl sm:text-4xl md:text-5xl mb-4">
          Controladores de Cultivo:
          <br />
          Innovación al Alcance
        </h1>
        <p className="font-fira-sans text-sm sm:text-base md:text-lg max-w-3xl mx-auto mb-8">
          Descubre nuestra aplicación móvil y web, diseñada para optimizar el cultivo con la tecnología más avanzada.
          Con un enfoque moderno, te ofrecemos herramientas innovadoras que transformarán tu experiencia agrícola.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-action-green text-white font-fira-sans px-6 sm:px-8 py-2 sm:py-3 rounded-lg">
            Descubre
          </button>
          <button className="border border-black text-black font-fira-sans px-6 sm:px-8 py-2 sm:py-3 rounded-lg">
            Más
          </button>
        </div>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mb-2">
        {[1, 2, 3].map((i) => (
          <div key={`top-${i}`} className="bg-[#e0e0e0] aspect-square rounded-lg overflow-hidden">
            <img
              src={`/placeholder.svg?height=400&width=400`}
              alt={`Feature ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {[1, 2, 3, 4].map((i) => (
          <div key={`bottom-${i}`} className="bg-[#e0e0e0] aspect-square rounded-lg overflow-hidden">
            <img
              src={`/placeholder.svg?height=300&width=300`}
              alt={`Feature ${i + 3}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

