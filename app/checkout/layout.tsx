import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Checkout - ConfiPlant",
  description: "Finaliza tu compra de productos para agricultura de precisión",
}

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}

