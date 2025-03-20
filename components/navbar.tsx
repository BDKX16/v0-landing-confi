"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="w-full py-3 md:py-4 px-4 md:px-8 flex items-center justify-between sticky top-0 bg-white z-50 shadow-sm">
      {/* Logo */}
      <Link href="/" className="font-teachers text-xl md:text-2xl">
        Logo
      </Link>

      {/* Mobile menu button */}
      <button className="md:hidden rounded-lg p-1" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        <Link href="#" className="font-fira-sans text-sm lg:text-base whitespace-nowrap">
          Inicio Rápido
        </Link>
        <Link href="#" className="font-fira-sans text-sm lg:text-base whitespace-nowrap">
          Nuestros Productos
        </Link>
        <Link href="#" className="font-fira-sans text-sm lg:text-base whitespace-nowrap">
          Ofertas Especiales
        </Link>
        <div className="relative group">
          <button className="flex items-center gap-1 font-fira-sans text-sm lg:text-base whitespace-nowrap">
            Más Opciones <ChevronDown className="w-4 h-4" />
          </button>
          <div className="absolute hidden group-hover:block top-full left-0 bg-white shadow-md py-2 px-4 min-w-40 z-10 rounded-lg">
            <Link href="#" className="block py-1 font-fira-sans text-sm">
              Opción 1
            </Link>
            <Link href="#" className="block py-1 font-fira-sans text-sm">
              Opción 2
            </Link>
            <Link href="#" className="block py-1 font-fira-sans text-sm">
              Opción 3
            </Link>
          </div>
        </div>
      </div>

      {/* Auth Buttons */}
      <div className="hidden md:flex items-center gap-2 lg:gap-4">
        <Link href="#" className="font-fira-sans border border-black px-3 py-1 lg:px-4 lg:py-2 text-sm rounded-lg">
          Entrar
        </Link>
        <Link href="#" className="font-fira-sans bg-black text-white px-3 py-1 lg:px-4 lg:py-2 text-sm rounded-lg">
          Registrarse
        </Link>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-md z-20 md:hidden rounded-b-lg">
          <div className="flex flex-col p-4">
            <Link href="#" className="py-2 font-fira-sans">
              Inicio Rápido
            </Link>
            <Link href="#" className="py-2 font-fira-sans">
              Nuestros Productos
            </Link>
            <Link href="#" className="py-2 font-fira-sans">
              Ofertas Especiales
            </Link>
            <button
              className="flex items-center justify-between py-2 font-fira-sans"
              onClick={() => setIsOpen(!isOpen)}
            >
              Más Opciones <ChevronDown className="w-4 h-4" />
            </button>
            <div className="flex flex-col gap-2 mt-4">
              <Link href="#" className="font-fira-sans border border-black px-4 py-2 text-center rounded-lg">
                Entrar
              </Link>
              <Link href="#" className="font-fira-sans bg-black text-white px-4 py-2 text-center rounded-lg">
                Registrarse
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

