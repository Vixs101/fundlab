"use client"
import Image from "next/image"

export default function FeaturesSection() {
    return (
        <section className="w-full py-20 ">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-white text-lg font-semibold uppercase tracking-wider mb-2">Features</h2>
                    <h3 className="text-white text-3xl md:text-4xl font-bold mb-4">That Power Innovation</h3>
                    <p className="text-white/70 max-w-2xl mx-auto text-sm md:text-base">
                        FUNDLAB transforms how scientific research is funded through Web3 transparency, NFT-based contributions, and
                        decentralized governance.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                    {/* Feature 1: Transparent & Secure Research Funding */}
                    <div className="bg-[#2A2A3A]/80 backdrop-blur-sm rounded-xl p-10 md:p-8 flex flex-col lg:flex-row items-center lg:items-start  gap-6 col-span-1 md:col-span-2 h-[474px]">
                        <div className="flex-1">
                            <h4 className="text-white text-xl md:text-4xl font-bold mb-3">Transparent & Secure Research Funding</h4>
                            <p className="text-white/70 text-sm md:text-base">
                                Each contribution is tracked on the blockchain, ensuring full transparency and secure funding. Funds are
                                released as verified research milestones are met.
                            </p>
                        </div>
                        <div className="w-[257px] h-[237px] relative flex-shrink-0 lg:mt-32">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-[#6C55E0] rounded-full opacity-10 blur-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={"/assets/features3.png"} alt={"Shield"} fill className="w-12 h-12 md:w-16 md:h-16 text-teal-400" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 2: NFT Rewards & Access */}
                    <div className="bg-[#2A2A3A]/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center md:items-start h-[474px]">
                        <div className="flex-1">
                            <h4 className="text-white text-xl md:text-4xl font-bold mb-3">NFT Rewards & Access</h4>
                            <p className="text-white/70 text-sm mb-6">
                                Contributors receive unique NFTs that provide exclusive access to research updates, raw datasets, and
                                intellectual property sharing opportunities.
                            </p>
                        </div>
                        <div className="w-[257px] h-[237px] relative flex-shrink-0 md:self-end">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-[#6C55E0] rounded-full opacity-10 blur-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={"/assets/features4.png"} alt={"Nfts"} fill className="w-12 h-12 md:w-16 md:h-16 text-teal-400" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 3: Community Governance */}
                    <div className="bg-[#2A2A3A]/80 backdrop-blur-sm rounded-xl p-6 flex flex-col items-center md:items-start h-full">
                        <div className="flex-1">
                            <h4 className="text-white text-xl md:text-4xl font-bold mb-3">Community Governance</h4>
                            <p className="text-white/70 text-sm mb-6">
                                Funders influence research priorities and funding decisions through transparent voting mechanisms on our
                                decentralized platform.
                            </p>
                        </div>
                        <div className="w-[257px] h-[237px] relative flex-shrink-0 md:self-end mt-10 md:mt-0">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-[#6C55E0] rounded-full opacity-10 blur-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={"/assets/features1.png"} alt={"Speaker"} fill className="w-12 h-12 md:w-16 md:h-16 text-teal-400" />
                            </div>
                        </div>
                    </div>

                    {/* Feature 4: Crypto & Fiat Payments */}
                    <div className="bg-[#2A2A3A]/80 backdrop-blur-sm rounded-xl p-6 md:p-8  flex flex-col lg:flex-row lg:items-start items-center gap-6 col-span-1 md:col-span-2 h-[473px]">
                        <div className="flex-1">
                            <h4 className="text-white text-xl md:text-2xl font-bold mb-3">Crypto & Fiat Payments</h4>
                            <p className="text-white/70 text-sm md:text-base">
                                Support methods ranging from cryptocurrencies to traditional payment methods, making funding accessible
                                to everyone.
                            </p>
                        </div>
                        <div className="w-[257px] h-[237px] relative flex-shrink-0 lg:mt-32">
                            <div className="absolute inset-0 bg-gradient-to-br from-teal-400 to-[#6C55E0] rounded-full opacity-10 blur-xl"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <Image src={"/assets/features2.png"} alt={"Shield"} fill className="w-12 h-12 md:w-16 md:h-16 text-teal-400" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

