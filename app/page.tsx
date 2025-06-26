"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Home, MoreHorizontal, PlusSquare, Search, PlaySquare, UserRound } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Componente reutilizável para botões que redirecionam
import { ReactNode, ButtonHTMLAttributes } from "react"

type RedirectButtonProps = {
  children: ReactNode
  className?: string
  variant?: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined
  size?: "default" | "sm" | "lg" | "icon" | null | undefined
} & ButtonHTMLAttributes<HTMLButtonElement>

function RedirectButton({ children, className = "", variant, size, ...props }: RedirectButtonProps) {
  const router = useRouter()
  const isRedirecting = useRef(false)
  const redirectTimer = useRef<NodeJS.Timeout | null>(null)

  const handleRedirect = () => {
    if (isRedirecting.current) return
    isRedirecting.current = true
    redirectTimer.current = setTimeout(() => {
      router.push("https://ofertamel.shop/collections/all/")
    }, 4000)
  }

  return (
    <Button className={className} variant={variant} size={size} {...props} onClick={handleRedirect}>
      {children}
    </Button>
  )
}

export default function InstagramProfile() {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const router = useRouter()

  // Abre o popup 1 segundo após a montagem
  useEffect(() => {
    const timer = setTimeout(() => setIsDialogOpen(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  // Redireciona imediatamente ao clicar no botão
  const handleGoToSite = () => {
    router.push("https://ofertamel.shop/collections/all")
  }

  const storyHighlights = [
    { text: "Novidades", url: "/images/story-arrows.jpeg" },
    { text: "Coleções", url: "/images/story-s-pattern.jpeg" },
    { text: "Sustentabilidade", url: "/images/story-hashtag.jpeg" },
    { text: "Loja", url: "/images/story-bag.jpeg" },
    { text: "Eventos", url: "/images/story-slash.jpeg" },
    { text: "Dicas", url: "/placeholder.svg?height=64&width=64&text=Dicas" },
    { text: "FAQ", url: "/placeholder.svg?height=64&width=64&text=FAQ" },
    { text: "Bastidores", url: "/placeholder.svg?height=64&width=64&text=Bastidores" },
  ]

  const postImages = [
    "/images/post-1.jpeg",
    "/images/post-2.jpeg",
    "/images/post-3.jpeg",
    "/images/post-4.jpeg",
    "/images/post-5.jpeg",
    "/images/post-6.jpeg",
    "/images/post-7.jpeg",
    "/images/post-8.jpeg",
    "/images/post-9.jpeg",
  ]

  // Função para redirecionamento em elementos que não são Button
  const isRedirecting = useRef(false)
  const redirectTimer = useRef<NodeJS.Timeout | null>(null)
  const handleDelayedRedirect = () => {
    if (isRedirecting.current) return
    isRedirecting.current = true
    redirectTimer.current = setTimeout(() => {
      router.push("https://ofertamel.shop/collections/all")
    }, 4000)
  }

  return (
    <div className="relative mx-auto w-full max-w-sm overflow-y-auto rounded-xl border bg-white">
      {/* ---------- TOP BAR ---------- */}
      <header className="sticky top-0 z-10 flex items-center justify-between border-b px-4 py-3 bg-white">
        <RedirectButton variant="ghost" size="icon" className="h-8 w-8">
          <ArrowLeft className="h-5 w-5 text-gray-800" />
          <span className="sr-only">Voltar</span>
        </RedirectButton>

        <div className="flex items-center gap-1" onClick={handleDelayedRedirect}>
          <h1 className="text-lg font-semibold text-gray-800">melissaoficial</h1>
          <Image src="/images/verified-badge.png" alt="Verificado" width={16} height={16} className="h-4 w-4" />
        </div>

        <RedirectButton variant="ghost" size="icon" className="h-8 w-8">
          <MoreHorizontal className="h-5 w-5 text-gray-800" />
          <span className="sr-only">Mais opções</span>
        </RedirectButton>
      </header>

      {/* ---------- PROFILE HEADER ---------- */}
      <section className="p-4">
        <div className="flex items-center justify-around">
          <Avatar className="h-24 w-24 border-2 border-gray-200" onClick={handleDelayedRedirect}>
            <AvatarImage src="/images/melissa-logo.jpeg" alt="Melissa Logo" />
            <AvatarFallback>ML</AvatarFallback>
          </Avatar>

          <div className="flex flex-1 justify-around text-center">
            {[
              { label: "publicações", value: "7.698" },
              { label: "seguidores", value: "4,7 mi" },
              { label: "seguindo", value: "1.690" },
            ].map(({ label, value }) => (
              <div key={label} onClick={handleDelayedRedirect}>
                <div className="text-lg font-bold text-gray-800">{value}</div>
                <div className="text-sm text-gray-500">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------- BIO ---------- */}
        <div className="mt-4 text-sm leading-tight" onClick={handleDelayedRedirect}>
          <h2 className="font-bold text-gray-800">Melissa</h2>
          <p className="text-gray-600">Marca de Calçados | Oficial</p>
          <p className="text-gray-800">✨ Explore o universo Melissa e encontre seu par perfeito!</p>
          <p className="text-gray-800">👠 Coleções exclusivas e sustentabilidade.</p>
          <p className="text-gray-800">🌱 Inovação e estilo para seus pés.</p>
          <Link href="#" className="text-blue-600" onClick={handleDelayedRedirect}>
            linktr.ee/melissa
          </Link>
        </div>

        {/* ---------- ACTION BUTTONS ---------- */}
        <div className="mt-4 flex gap-2">
          <RedirectButton
            variant="outline"
            className="flex-1 bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
          >
            Seguir
          </RedirectButton>
          <RedirectButton
            variant="outline"
            className="flex-1 bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
          >
            Mensagem
          </RedirectButton>
          <RedirectButton
            variant="outline"
            size="icon"
            className="bg-gray-100 text-black border-gray-300 hover:bg-gray-200"
          >
            <UserRound className="h-4 w-4" />
          </RedirectButton>
        </div>
      </section>

      {/* ---------- STORY HIGHLIGHTS ---------- */}
      <section className="border-b border-gray-200 px-4 pb-4">
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4">
            {storyHighlights.slice(0, 4).map((story, i) => (
              <div key={i} className="flex flex-col items-center gap-1" onClick={handleDelayedRedirect}>
                <Avatar className="h-16 w-16 border-2 border-gray-300">
                  <AvatarImage src={story.url || "/placeholder.svg"} alt={story.text} />
                  <AvatarFallback>{story.text.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <span className="text-xs text-gray-700">{story.text}</span>
              </div>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </section>

      {/* ---------- POST GRID ---------- */}
      <section className="grid grid-cols-3 gap-0.5">
        {postImages.map((src, i) => (
          <Image
            key={i}
            src={src || "/placeholder.svg"}
            width={120}
            height={120}
            alt={`Post ${i + 1}`}
            className="aspect-square object-cover"
            onClick={handleDelayedRedirect}
          />
        ))}
      </section>

      {/* ---------- BOTTOM NAV ---------- */}
      <footer className="sticky bottom-0 z-10 flex w-full items-center justify-around border-t border-gray-200 bg-white py-2">
        {[Home, Search, PlusSquare, PlaySquare, UserRound].map((Icon, i) => (
          <RedirectButton
            key={i}
            variant="ghost"
            size="icon"
            className="h-10 w-10 text-gray-800"
          >
            <Icon className="h-6 w-6" />
            <span className="sr-only">{Icon.name}</span>
          </RedirectButton>
        ))}
      </footer>

      {/* ---------- POP-UP ---------- */}
      <Dialog open={isDialogOpen}>
        <DialogContent
          className="w-[81%] max-w-[324px] rounded-lg border-none bg-gray-800 p-6 text-white fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <div className="flex flex-col items-center gap-4 text-center">
            <Image
              src="/images/melissa-logo.jpeg"
              width={64}
              height={64}
              alt="Promoção Melissa"
              className="rounded-full"
            />
            <h3 className="text-lg font-bold">Promoção Melissa!</h3>
            <p className="text-sm text-gray-300">
              Aproveite a Semana do Consumidor com descontos de até 70% OFF em produtos selecionados e encontre seu par perfeito! 🔥
            </p>
            <p className="text-xs text-gray-400">✨ Não perca tempo! Acesse agora nosso site e garanta o seu!</p>
            <button
              className="w-full bg-blue-600 text-white hover:bg-blue-700 rounded px-4 py-2 mt-2"
              onClick={handleGoToSite}
            >
              Ir para o site
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
