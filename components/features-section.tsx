import { ArrowRight, Box } from "lucide-react"
import Link from "next/link"

export default function FeaturesSection() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="mb-12">
        <span className="font-fira-sans text-sm md:text-base">Innovación</span>
        <h2 className="font-teachers text-3xl md:text-4xl mt-4 mb-6">
          Características Destacadas de Nuestra Aplicación
        </h2>
        <p className="font-fira-sans text-base md:text-lg max-w-3xl">
          Nuestra aplicación ofrece alertas personalizadas para que estés siempre informado sobre el estado de tus
          cultivos. Además, proporciona informes detallados que te ayudarán a tomar decisiones más informadas.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {/* Feature 1 */}
        <div className="flex flex-col">
          <Box className="h-10 w-10 mb-6" />
          <h3 className="font-teachers text-xl md:text-2xl mb-4">Alertas Personalizadas para Cultivos Efectivos</h3>
          <p className="font-fira-sans">Recibe notificaciones en tiempo real sobre tus cultivos.</p>
        </div>

        {/* Feature 2 */}
        <div className="flex flex-col">
          <Box className="h-10 w-10 mb-6" />
          <h3 className="font-teachers text-xl md:text-2xl mb-4">Informes Detallados para Mejorar tu Estrategia</h3>
          <p className="font-fira-sans">Accede a análisis profundos que optimizan tu rendimiento.</p>
        </div>

        {/* Feature 3 */}
        <div className="flex flex-col">
          <Box className="h-10 w-10 mb-6" />
          <h3 className="font-teachers text-xl md:text-2xl mb-4">
            Compatibilidad con Múltiples Dispositivos y Plataformas
          </h3>
          <p className="font-fira-sans">Usa la aplicación en tu móvil, tablet o computadora.</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <Link href="#" className="border border-black px-8 py-3 font-fira-sans rounded-lg">
          Descubre
        </Link>
        <Link href="#" className="flex items-center gap-2 px-4 py-3 font-fira-sans">
          Explora <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}

