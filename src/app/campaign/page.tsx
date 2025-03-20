"use client"

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

import Image from "next/image"
import Link  from "next/link"

export default function CampaignsPage() {
    return (
        <section className="bg-[url('/assets/CampaignBg.png')] bg-cover bg-center min-h-screen">
            <div className="mx-auto px-4 pt-32 pb-16">
                <div className="p-4 md:px-16 lg:px-24 mx-auto">
                    <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Research Campaigns</h1>
                    <p className="text-white/70 mb-8">
                        Explore current and completed research projects powered by FundLab. Support groundbreaking discoveries or
                        review past successes.
                    </p>

                    <Tabs defaultValue="all" className="mb-8 w-80">
                        <TabsList className="bg-[#2A2A3A]/80 border border-white/10 ">
                            <TabsTrigger value="all" className="data-[state=active]:bg-white data-[state=active]:text-black">
                                Active
                            </TabsTrigger>
                            <TabsTrigger value="funded" className="data-[state=active]:bg-white data-[state=active]:text-black">
                                Ended
                            </TabsTrigger>
                        </TabsList>
                    </Tabs>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full justify-center items-center">
                        {/* Campaign Card 1 */}
                        <CampaignCard
                            id="quantum-drug-discovery"
                            image="/assets/campaign3.png"
                            title="Quantum Computing for Drug Discovery"
                            category="Pharmaceutical Research"
                            raised="$200,000"
                            progress={72}
                            days={14}
                        />

                        {/* Campaign Card 2 */}
                        <CampaignCard
                            id="sustainable-bioplastics"
                            image="/assets/campaign2.png"
                            title="Sustainable Bioplastics for Ocean Waste"
                            category="Environmental Science"
                            raised="$100,000"
                            progress={89}
                            days={7}
                        />

                        {/* Campaign Card 3 */}
                        <CampaignCard
                            id="ai-medical-diagnostics"
                            image="/assets/campaign1.png"
                            title="AI-Powered Medical Image Diagnostics"
                            category="Healthcare Technology"
                            raised="$250,000"
                            progress={84}
                            days={14}
                        />

                        {/* Campaign Card 4 */}
                        <CampaignCard
                            id="neural-interfaces"
                            image="/assets/campaign6.png"
                            title="Neural Interfaces for Cognitive Enhancement"
                            category="Neuroscience"
                            raised="$150,000"
                            progress={52}
                            days={21}
                        />

                        {/* Campaign Card 5 */}
                        <CampaignCard
                            id="crispr-rare-diseases"
                            image="/assets/campaign5.png"
                            title="CRISPR Applications for Rare Diseases worldwide"
                            category="Genetic Research"
                            raised="$400,000"
                            progress={80}
                            days={14}
                        />

                        {/* Campaign Card 6 */}
                        <CampaignCard
                            id="quantum-cryptography"
                            image="/assets/campaign4.png"
                            title="Quantum Cryptography for Secure Communications"
                            category="Information Security"
                            raised="$120,000"
                            progress={79}
                            days={57}

                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

interface CampaignCardProps {
    id: string
    image: string
    title: string
    category: string
    raised: string
    progress: number
    days: number
}

function CampaignCard({ id, image, title, category, raised, progress, days }: CampaignCardProps) {
    return (
        <div className="bg-[#2A2A3A]/80 rounded-xl overflow-hidden border border-white/10 hover:border-[#5B49BE]/50 transition-all hover:shadow-lg hover:shadow-[#5B49BE]/20 xl:w-[391px] xl:h-[516px] p-4">
            <div className="relative">
                <Image
                    src={image || "/placeholder.svg"}
                    alt={title}
                    width={300}
                    height={200}
                    className="w-full h-72 object-cover rounded-2xl"
                />
            </div>

            <div className="p-4">
                <div className="flex justify-between items-center mb-4">
                    <div className="bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 flex items-center gap-2 text-white text-sm xl:text-lg p1-1 xl:p-2 rounded-full">
                        <Avatar className="md:h-4 md:w-4 xl:h-8 xl:w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <h4>0xe3443..46</h4>
                    </div>
                    <Button variant="default" className="bg-white rounded-full text-black">Active</Button>

                </div>
                <h3 className="text-white font-semibold mb-1 line-clamp-2">{title}</h3>
                <p className="text-white/50 text-xs mb-4">{category} 
                    <Link href={`/campaign/${id}`}
                        className="cursor-pointer underline hover:text-[#9B89FA] ml-1">
                        <span>view more</span>
                    </Link>
                </p>

                <div className="flex justify-between items-center text-sm">
                    <div>
                        <p className="text-white font-medium">{raised}</p>
                    </div>
                    <div className="text-right">
                        <p className="text-white font-medium">%{days}</p>
                    </div>
                </div>
                {/* Progress bar */}
                <div className="w-full h-1.5 bg-white/10 rounded-full my-3">
                    <div
                        className="h-full bg-gradient-to-r from-[#6247AA] to-[#5B49BE] rounded-full"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>


            </div>
        </div>
    )
}

