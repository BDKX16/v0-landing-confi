import Link from "next/link"
import Image from "next/image"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import CheckoutForm from "@/components/checkout-form"

export default function CheckoutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />

      <main className="flex-grow py-8 md:py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex text-sm">
              <li className="flex items-center">
                <Link href="/" className="text-gray-500 hover:text-black">
                  Inicio
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="flex items-center">
                <Link href="/productos" className="text-gray-500 hover:text-black">
                  Productos
                </Link>
                <span className="mx-2 text-gray-400">/</span>
              </li>
              <li className="text-black font-medium">Checkout</li>
            </ol>
          </nav>

          <h1 className="font-teachers text-3xl md:text-4xl mb-8">Finalizar Compra</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <CheckoutForm />
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white p-6 border rounded-lg shadow-sm">
                <h2 className="font-teachers text-xl mb-4">Resumen del Pedido</h2>

                {/* Product */}
                <div className="flex gap-4 pb-4 border-b">
                  <div className="w-20 h-20 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="/placeholder.svg?height=80&width=80"
                      alt="Controlador de Cultivo Pro"
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-fira-sans font-medium">Controlador de Cultivo Pro</h3>
                    <p className="text-sm text-gray-500">Modelo: CC-2024</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm">Cantidad: 1</span>
                      <span className="font-medium">$299.99</span>
                    </div>
                  </div>
                </div>

                {/* Price Details */}
                <div className="py-4 space-y-2 border-b">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>$299.99</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Envío</span>
                    <span>$15.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Impuestos</span>
                    <span>$30.00</span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-4">
                  <div className="flex justify-between font-medium text-lg">
                    <span>Total</span>
                    <span>$344.99</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Los precios incluyen IVA. El tiempo estimado de entrega es de 3-5 días hábiles.
                  </p>
                </div>

                {/* Promo Code */}
                <div className="mt-6">
                  <label htmlFor="promo" className="block text-sm font-medium mb-2">
                    Código Promocional
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="promo"
                      className="flex-grow border rounded-l-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-action-green"
                      placeholder="Ingresa tu código"
                    />
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded-r-md text-sm font-medium hover:bg-gray-300">
                      Aplicar
                    </button>
                  </div>
                </div>

                {/* Secure Checkout */}
                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Pago seguro garantizado
                  </p>
                </div>
              </div>

              {/* Need Help */}
              <div className="mt-6 bg-white p-6 border rounded-lg shadow-sm">
                <h3 className="font-teachers text-lg mb-2">¿Necesitas ayuda?</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Si tienes alguna pregunta sobre tu pedido, no dudes en contactarnos.
                </p>
                <Link href="/contacto" className="text-action-green font-medium text-sm hover:underline">
                  Contactar a soporte
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

