import Image from "next/image"

export default function FeatureSection() {
  return (
    <section className="py-12 md:py-16 px-4 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
        {/* Left column - Heading */}
        <div>
          <h2 className="font-teachers text-2xl sm:text-3xl md:text-4xl leading-tight">
            Monitorea tu cultivo en tiempo real con nuestra innovadora aplicación.
          </h2>
        </div>

        {/* Right column - Description */}
        <div>
          <p className="font-fira-sans text-sm sm:text-base md:text-lg">
            Nuestra aplicación te permite supervisar cada aspecto de tu cultivo al instante. Con la automatización de
            tareas, podrás optimizar tu tiempo y recursos. Descubre cómo la tecnología puede transformar tu forma de
            cultivar.
          </p>
        </div>
      </div>

      {/* Feature Image */}
      <div className="w-full bg-[#e0e0e0] aspect-[16/9] relative rounded-xl overflow-hidden">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Monitoreo de cultivo en tiempo real"
          fill
          className="object-cover"
        />
      </div>
    </section>
  )
}

