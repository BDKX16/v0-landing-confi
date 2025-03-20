import Image from "next/image"
import Link from "next/link"
import { User } from "lucide-react"

type BlogPost = {
  category: string
  title: string
  description: string
  author: string
  date: string
  readTime: string
  image: string
}

const blogPosts: BlogPost[] = [
  {
    category: "Agricultura",
    title: "Innovaciones en Control de Cultivos",
    description: "Explora las últimas tendencias en tecnología agrícola y su impacto.",
    author: "Juan Pérez",
    date: "11 Ene 2022",
    readTime: "5 min lectura",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "Tecnología",
    title: "Mejorando la Eficiencia Agrícola",
    description: "Aprovecha la tecnología para optimizar tus cultivos y aumentar la producción.",
    author: "Ana Gómez",
    date: "15 Feb 2022",
    readTime: "7 min lectura",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    category: "Sostenibilidad",
    title: "Cultivos Sostenibles y Tecnología",
    description: "La tecnología puede hacer que la agricultura sea más sostenible y eficiente.",
    author: "Luis Martínez",
    date: "20 Mar 2022",
    readTime: "6 min lectura",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <div>
          <span className="font-fira-sans text-sm md:text-base">Blog</span>
          <h2 className="font-teachers text-3xl md:text-4xl mt-2">Short heading goes here</h2>
          <p className="font-fira-sans text-sm md:text-base mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <Link href="#" className="border border-black px-4 py-2 font-fira-sans text-sm hidden sm:block rounded-lg">
          View all
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {blogPosts.map((post, index) => (
          <article key={index} className="flex flex-col">
            <Link href="#" className="block mb-4 bg-[#e0e0e0] rounded-lg overflow-hidden">
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={600}
                height={400}
                className="w-full aspect-[3/2] object-cover"
              />
            </Link>

            <div className="flex-1 flex flex-col">
              <div className="mb-2">
                <span className="font-fira-sans text-xs text-gray-700">{post.category}</span>
              </div>

              <h3 className="font-teachers text-xl mb-2">
                <Link href="#">{post.title}</Link>
              </h3>

              <p className="font-fira-sans text-sm text-gray-700 mb-4">{post.description}</p>

              <div className="mt-auto flex items-center">
                <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-gray-500" />
                </div>
                <div>
                  <p className="font-fira-sans text-sm font-medium">{post.author}</p>
                  <div className="flex items-center text-xs text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center sm:hidden">
        <Link href="#" className="border border-black px-4 py-2 font-fira-sans text-sm inline-block rounded-lg">
          View all
        </Link>
      </div>
    </section>
  )
}

