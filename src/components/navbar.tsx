"use client"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

import { Menu, X } from "lucide-react"

import {CustomConnectWallet} from "@/components/ConnectWeb3Wallet"


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false) 
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
        <div className="flex items-center justify-between h-24 p-4 md:px-16 lg:px-24 mx-auto">
          {/* Logo */}
          <Link href="/">
            <Image src="/assets/Logo.png" alt="Fundlab" width={150} height={32} />
          </Link>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            <Link href="/" className="text-white hover:text-[#9B89FA] transition-colors">
              Home
            </Link>
            <Link href="/campaign" className="text-white hover:text-[#9B89FA] transition-colors">
              Campaign
            </Link>
            <Link
              href="/#"
              className="text-white hover:text-[#9B89FA] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("campaign")
              }}
            >
              How It Works
            </Link>
            <Link
              href="/#"
              className="text-white hover:text-[#9B89FA] transition-colors"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("about")
              }}
            >
              About
            </Link>
 
            {/* Mobile Menu Button */}
            <button className="md:hidden text-white p-2" onClick={toggleMenu} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>

            {/* Connect Wallet Button - Desktop */}
            <div className="hidden md:block">
              <CustomConnectWallet />
            </div>
          </nav>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#2A2A3A]/80 bg-opacity-95 backdrop-blur-sm">
            <nav className="flex flex-col space-y-4 p-4">
              <Link
                href="/"
                className="text-white hover:text-[#9B89FA] transition-colors py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/campaign"
                className="text-white hover:text-[#9B89FA] transition-colors py-2"
                //     onClick={() => setIsMenuOpen(false)}
              >
                Campaign
              </Link>
              <Link
                href="/#"
                className="text-white hover:text-[#9B89FA] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("campaign")
                }}
              >
                How It Works
              </Link>
              <Link
                href="/#"
                className="text-white hover:text-[#9B89FA] transition-colors py-2"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("about")
                }}
              >
                About
              </Link>

              <CustomConnectWallet />
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

