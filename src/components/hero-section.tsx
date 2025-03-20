"use client"
import React from 'react'
import Image from 'next/image'
import { ChevronUp} from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'


export default function HeroSection() {
  const router = useRouter()
  function handleScrollTop() {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div
      className="h-screen w-full">
      <div className="absolute inset-0 pointer-events-none">
        <div className='flex justify-between mt-36 opacity-30 md:opacity-none'>
          <div>
            <Image src={"/assets/left-icons.png"} alt='floating icons' height={500} width={418} className="w-full h-auto" />
          </div>
          <div>
            <Image src={"/assets/right-icons.png"} alt='floating icons' height={500} width={418} className="w-full h-auto" />
          </div>
        </div>
      </div>
      <div className="relative z-10 container mx-auto px-4 h-full flex flex-col items-center text-center pt-40 md:pt-52">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 max-w-2xl">
          Fueling Innovation,
          <br />
          One Research at a Time
        </h1>
        <p className="text-sm md:text-base lg:text-lg text-gray-300 max-w-2xl mb-8">
          Bridging scientists and supporters through transparent, decentralized crowdfunding. Fund groundbreaking
          research with Web3 security and community-driven trust.
        </p>

          <Button size="lg" className="bg-white text-black hover:bg-gray-100"
          onClick={() => router.push('/start-campaign')}
          >
            Start Research Campaign
          </Button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-0 right-0 flex flex-col items-center">
        <div className="w-6 h-10 border-2 bg-white border-white/50 rounded-full flex items-center justify-center mb-2">
          <div className="w-1 h-2 bg-black rounded-full animate-bounce"></div>
        </div>
        <span className="text-white/70 text-sm">Scroll down</span>
      </div>

      {/* Back to top button */}
      <Button
        className="fixed bottom-6 right-6 z-50 bg-[#6247AA] p-2 rounded-md shadow-lg hover:bg-[#5B49BE] transition-colors animate-bounce"
        onClick={handleScrollTop}
      >
        <ChevronUp className="text-white" size={20} />
      </Button>

    </div>
  )
}
