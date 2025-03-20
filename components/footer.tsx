import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div className="max-w-xl mb-6 md:mb-0">
            <h2 className="font-teachers text-3xl md:text-4xl mb-4">Conéctate con nosotros y descubre más</h2>
            <p className="font-fira-sans text-sm md:text-base">
              Estamos aquí para ayudarte a alcanzar tus metas. Contáctanos para más información y asistencia.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="bg-black text-white font-fira-sans px-6 py-3 rounded-lg">
              Unirse
            </Link>
            <Link href="#" className="border border-black font-fira-sans px-6 py-3 rounded-lg">
              Contacto
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-10"></div>

        {/* Links Section */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {/* Column 1 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Uno</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Inicio Rápido
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Nuestros Servicios
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Testimonios
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Contáctanos
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Dos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Términos de Uso
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Soporte Técnico
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Ayuda Adicional
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Tres</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Eventos
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Noticias
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Actualizaciones
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Cuatro</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Contacto Directo
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Asesoría
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Colaboraciones
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Redes Sociales
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Suscríbete
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Cinco</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Únete a Nosotros
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Síguenos en Redes
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Contáctanos Aquí
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Visita Nuestro Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Explora Nuestros Servicios
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6 */}
          <div>
            <h3 className="font-teachers text-base mb-4">Sección Seis</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Más Información Aquí
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Contáctanos para Ayuda
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Síguenos en Instagram
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Visítanos en Facebook
                </Link>
              </li>
              <li>
                <Link href="#" className="font-fira-sans text-sm hover:underline">
                  Enlaces Útiles
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link href="/" className="font-teachers text-2xl mb-6 md:mb-0">
            Logo
          </Link>

          <div className="flex gap-4 mb-6 md:mb-0">
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="sr-only">Facebook</span>
              <Facebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="sr-only">Instagram</span>
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="sr-only">Twitter</span>
              <Twitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="w-5 h-5" />
            </Link>
            <Link href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="sr-only">YouTube</span>
              <Youtube className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-200 my-8"></div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="font-fira-sans text-sm text-gray-500 mb-4 md:mb-0">© 2024 Relume. All rights reserved.</p>

          <div className="flex gap-6">
            <Link href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Youtube className="w-5 h-5 text-gray-500 hover:text-black" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

