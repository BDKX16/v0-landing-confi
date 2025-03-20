"use client"

import type React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { CreditCard, Building, ArrowRight } from "lucide-react"

export default function CheckoutForm() {
  const [paymentMethod, setPaymentMethod] = useState<"mercadopago" | "transfer">("mercadopago")
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    postalCode: "",
    country: "México",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    console.log("Form submitted", { formData, paymentMethod })
    alert("¡Pedido enviado con éxito! Gracias por tu compra.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Shipping Information */}
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="font-teachers text-xl mb-4">Información de Envío</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-1">
              Nombre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-1">
              Apellido <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              Teléfono <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Dirección <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium mb-1">
              Ciudad <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="state" className="block text-sm font-medium mb-1">
              Estado/Provincia <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="postalCode" className="block text-sm font-medium mb-1">
              Código Postal <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="postalCode"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            />
          </div>

          <div>
            <label htmlFor="country" className="block text-sm font-medium mb-1">
              País <span className="text-red-500">*</span>
            </label>
            <select
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-action-green"
            >
              <option value="México">México</option>
              <option value="Argentina">Argentina</option>
              <option value="Colombia">Colombia</option>
              <option value="Chile">Chile</option>
              <option value="Perú">Perú</option>
              <option value="España">España</option>
              <option value="Estados Unidos">Estados Unidos</option>
            </select>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 border rounded-lg shadow-sm">
        <h2 className="font-teachers text-xl mb-4">Método de Pago</h2>

        <div className="space-y-4">
          {/* MercadoPago Option */}
          <div
            className={`border rounded-lg p-4 cursor-pointer ${
              paymentMethod === "mercadopago" ? "border-action-green bg-green-50" : "hover:bg-gray-50"
            }`}
            onClick={() => setPaymentMethod("mercadopago")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="mercadopago"
                name="paymentMethod"
                checked={paymentMethod === "mercadopago"}
                onChange={() => setPaymentMethod("mercadopago")}
                className="h-4 w-4 text-action-green focus:ring-action-green"
              />
              <label htmlFor="mercadopago" className="ml-3 flex items-center cursor-pointer">
                <CreditCard className="h-5 w-5 mr-2 text-blue-500" />
                <span className="font-medium">MercadoPago</span>
              </label>
              <div className="ml-auto flex items-center space-x-2">
                <div className="h-6 w-10 bg-blue-500 rounded-md"></div>
                <div className="h-6 w-10 bg-yellow-500 rounded-md"></div>
              </div>
            </div>

            {paymentMethod === "mercadopago" && (
              <div className="mt-4 pl-7">
                <p className="text-sm text-gray-600 mb-4">
                  Serás redirigido a MercadoPago para completar tu pago de forma segura.
                </p>
                <img src="/placeholder.svg?height=40&width=150" alt="MercadoPago" className="h-10 rounded-md" />
              </div>
            )}
          </div>

          {/* Bank Transfer Option */}
          <div
            className={`border rounded-lg p-4 cursor-pointer ${
              paymentMethod === "transfer" ? "border-action-green bg-green-50" : "hover:bg-gray-50"
            }`}
            onClick={() => setPaymentMethod("transfer")}
          >
            <div className="flex items-center">
              <input
                type="radio"
                id="transfer"
                name="paymentMethod"
                checked={paymentMethod === "transfer"}
                onChange={() => setPaymentMethod("transfer")}
                className="h-4 w-4 text-action-green focus:ring-action-green"
              />
              <label htmlFor="transfer" className="ml-3 flex items-center cursor-pointer">
                <Building className="h-5 w-5 mr-2 text-gray-700" />
                <span className="font-medium">Transferencia Bancaria</span>
              </label>
            </div>

            {paymentMethod === "transfer" && (
              <div className="mt-4 pl-7">
                <p className="text-sm text-gray-600 mb-2">Realiza una transferencia a la siguiente cuenta bancaria:</p>
                <div className="bg-gray-50 p-3 rounded-lg text-sm">
                  <p>
                    <strong>Banco:</strong> Banco Nacional
                  </p>
                  <p>
                    <strong>Titular:</strong> ConfiPlant S.A. de C.V.
                  </p>
                  <p>
                    <strong>CLABE:</strong> 012 345 6789 0123 45
                  </p>
                  <p>
                    <strong>Referencia:</strong> Tu número de pedido
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">Tu pedido será procesado una vez que confirmemos el pago.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-start">
        <input
          type="checkbox"
          id="terms"
          required
          className="h-4 w-4 mt-1 text-action-green focus:ring-action-green rounded"
        />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
          He leído y acepto los{" "}
          <Link to="/terminos" className="text-action-green hover:underline">
            Términos y Condiciones
          </Link>{" "}
          y la{" "}
          <Link to="/privacidad" className="text-action-green hover:underline">
            Política de Privacidad
          </Link>
          .
        </label>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-action-green text-white font-fira-sans font-medium py-3 px-6 rounded-lg hover:bg-opacity-90 flex items-center justify-center"
      >
        Finalizar Compra <ArrowRight className="ml-2 h-4 w-4" />
      </button>
    </form>
  )
}

