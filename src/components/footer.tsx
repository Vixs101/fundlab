import Link from "next/link"
import { Twitter, Linkedin, Facebook } from "lucide-react"
import Image from "next/image"


export default function Footer() {
    return (
        <footer className="bg-[#151516] border-t border-white/10 pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* FUNDLAB and Connect */}
                    <div className="md:col-span-1">
                        {/* Logo */}
                        <Link href="/" className="flex items-center mb-6">
                            <Image
                                src="/assets/Logo.png"
                                alt="Fundlab"
                                width={150}
                                height={32}
                            />
                        </Link>

                        {/* Let's Connect */}
                        <h4 className="text-white font-semibold mb-3">Let&apos;s Connect</h4>
                        <p className="text-white/70 text-sm mb-4">
                            Stay up-to-date with the latest news, features and updates from FUNDLAB. Follow us on social media!
                        </p>

                        {/* Social Media Icons */}
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#5B49BE] transition-colors"
                            >
                                <Twitter className="h-4 w-4 text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#5B49BE] transition-colors"
                            >
                                <Linkedin className="h-4 w-4 text-white" />
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#5B49BE] transition-colors"
                            >
                                <svg className="h-4 w-4 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19.7027 4.67151C18.1373 3.9 16.4413 3.33513 14.6693 3C14.4493 3.39753 14.1973 3.93092 14.0213 4.35552C12.1347 4.04698 10.2693 4.04698 8.4187 4.35552C8.2427 3.93092 7.9853 3.39753 7.7627 3C5.9893 3.33513 4.2907 3.90266 2.7253 4.67417C0.4533 8.05362 -0.2787 11.3405 0.0867 14.5804C2.1627 16.1275 4.1667 17.0516 6.1347 17.6591C6.6213 16.9856 7.0533 16.2694 7.4213 15.5159C6.7147 15.2553 6.0427 14.9333 5.4053 14.5591C5.5813 14.4329 5.7533 14.3014 5.9187 14.1646C9.8467 15.9804 14.1667 15.9804 18.0467 14.1646C18.2147 14.3014 18.3867 14.4329 18.5613 14.5591C17.9213 14.9359 17.2467 15.2579 16.5387 15.5186C16.9067 16.2694 17.3387 16.9882 17.8253 17.6618C19.7947 17.0543 21.7987 16.1302 23.8747 14.5804C24.3067 10.8143 23.1627 7.56428 21.0347 4.67151H19.7027ZM8.0053 12.5143C6.8267 12.5143 5.8667 11.4488 5.8667 10.1488C5.8667 8.84881 6.8027 7.78063 8.0053 7.78063C9.2067 7.78063 10.1667 8.84615 10.1427 10.1488C10.1453 11.4488 9.2067 12.5143 8.0053 12.5143ZM16.4573 12.5143C15.2787 12.5143 14.3187 11.4488 14.3187 10.1488C14.3187 8.84881 15.2547 7.78063 16.4573 7.78063C17.6587 7.78063 18.6187 8.84615 18.5947 10.1488C18.5947 11.4488 17.6587 12.5143 16.4573 12.5143Z"
                                        fill="currentColor"
                                    />
                                </svg>
                            </Link>
                            <Link
                                href="#"
                                className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-[#5B49BE] transition-colors"
                            >
                                <Facebook className="h-4 w-4 text-white" />
                            </Link>
                        </div>
                    </div>

                    {/* Company */}
                    <div className="md:col-span-1">
                        <h4 className="text-white font-semibold mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/about" className="text-white/70 text-sm hover:text-white transition-colors">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="text-white/70 text-sm hover:text-white transition-colors">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div className="md:col-span-1">
                        <h4 className="text-white font-semibold mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/terms" className="text-white/70 text-sm hover:text-white transition-colors">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/privacy" className="text-white/70 text-sm hover:text-white transition-colors">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="md:col-span-1">
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="/faq" className="text-white/70 text-sm hover:text-white transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white/70 text-sm hover:text-white transition-colors">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="border-t border-white/10 pt-6 pb-4">
                    <p className="text-white/50 text-xs text-center md:text-left">
                        FUNDLAB is a decentralized crowdfunding platform for scientific research. It does not provide financial
                        advice or guarantees on funding outcomes. Users should conduct their own due diligence and consult
                        professional advisors before making any funding decisions.
                    </p>
                </div>

                {/* Copyright */}
                <div className="text-center md:text-left">
                    <p className="text-white/50 text-xs">© FUNDLAB, Inc. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    )
}

