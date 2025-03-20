import { Link } from "react-router-dom"

export default function CTASection() {
  return (
    <section className="w-full bg-[#6B6B6B] py-16 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:max-w-xl mb-8 md:mb-0">
          <h2 className="font-teachers text-white text-3xl sm:text-4xl md:text-5xl mb-4">Transforma tu cultivo hoy</h2>
          <p className="font-fira-sans text-white text-sm sm:text-base md:text-lg mb-8">
            Descarga nuestra aplicación y optimiza tu cultivo con la tecnología más avanzada del mercado.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              to="#"
              className="bg-white text-black font-fira-sans px-6 sm:px-8 py-2 sm:py-3 inline-block rounded-lg"
            >
              Descargar
            </Link>
            <Link
              to="#"
              className="border border-white text-white font-fira-sans px-6 sm:px-8 py-2 sm:py-3 inline-block rounded-lg"
            >
              Registrarse
            </Link>
          </div>
        </div>
        <div className="w-full md:w-auto">
          <div className="w-full max-w-[300px] mx-auto md:mx-0 rounded-lg overflow-hidden">
            <img src="/placeholder.svg?height=300&width=300" alt="App preview" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}

