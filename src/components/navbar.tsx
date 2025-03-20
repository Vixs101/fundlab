"use client"
import Link from "next/link"
import Image from "next/image"
import {CustomConnectWallet} from "@/components/ConnectWeb3Wallet"

export default function Navbar() {

    const scrollToSection = (sectionId: string) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            <div className="h-full w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50">
                <div className="flex items-center justify-between h-24 p-4 md:px-16 lg:px-24 mx-auto">
                    {/* Logo */}
                    <Link href="/">
                        <Image
                            src="/assets/Logo.png"
                            alt="Fundlab"
                            width={150}
                            height={32}
                        />
                    </Link>

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
                        <Link href="/" className="text-white hover:text-[#9B89FA] transition-colors">
                            Home
                        </Link>
                        <Link href="#campaign" className="text-white hover:text-[#9B89FA] transition-colors">
                            Campaign
                        </Link>
                        <Link href="/#"
                            className="text-white hover:text-[#9B89FA] transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("campaign")
                            }}
                        >
                            How It Works
                        </Link>
                        <Link href="/#"
                            className="text-white hover:text-[#9B89FA] transition-colors"
                            onClick={(e) => {
                                e.preventDefault()
                                scrollToSection("about")
                            }}
                        >
                            About
                        </Link>
                    </nav>

                    {/* Connect Wallet Button */}
                    <CustomConnectWallet />
                </div>
            </div>
        </header>
    )
}
