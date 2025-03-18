import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Calendar } from "lucide-react"
import Image from "next/image"

export default function CampaignDetailPage({ params }: { params: { id: string; image: string } }) {

  console.log("hello", params)
  const campaign = {
    id: params.id,
    title: "AI-Powered Quantum Drug Discovery",
    image: "/assets/campaign3.png",
    creator: "0xd9443...4e90",
    startDate: "2-08-2023",
    safetyScore: 92,
    deadline: "4 days (ends on 02/20/2024)",
    description: `
      AI-Powered Quantum Drug Discovery is revolutionizing Medicine.
      
      Our team is applying the latest quantum computing algorithms and artificial intelligence to discover novel drug candidates for treating resistant infections. This interdisciplinary approach combines expertise in quantum physics, medicinal chemistry, and machine learning to accelerate the drug discovery process by orders of magnitude compared to traditional methods. The computational power of quantum systems allows us to model complex molecular interactions with unprecedented accuracy.
      
      The FUNDLAB community will gain access to:
      
      • Detailed research progress reports and insights into our methodology
      • Early access to published findings before public release
      • NFT certificates that represent partial intellectual property rights to discoveries
      • Participation in decision-making for future research directions through our DAO
      
      Our approach leverages quantum computing's unique ability to simultaneously evaluate multiple molecular configurations, dramatically reducing the time required to identify promising drug candidates. By combining this with advanced AI models trained on vast chemical and biological datasets, we can predict efficacy and potential side effects with greater precision than conventional methods.
      
      Key Research Objectives:
      
      • Develop novel quantum algorithms specifically optimized for molecular modeling
      • Train AI systems on specialized pharmaceutical datasets to improve prediction accuracy
      • Identify at least 5 novel antibiotic candidates for laboratory testing
      • Establish a decentralized framework for collaborative drug discovery that can be applied to other disease targets
      
      Timeline and Milestones:
      
      • Month 1-2: Finalize quantum algorithm development and AI model architecture
      • Month 3-4: Run initial screening of 10,000+ molecular candidates
      • Month 5-6: Analyze results and select top candidates for laboratory validation
      • Month 7-8: Conduct preliminary laboratory testing and refine computational models
      • Month 9-10: Prepare research publications and patent applications
      • Month 11-12: Develop roadmap for Phase 2 research
      
      Your contribution will directly fund:
      
      • Quantum computing time on specialized hardware (40% of budget)
      • AI researcher and computational chemist salaries (30% of budget)
      • Laboratory testing of promising candidates (20% of budget)
      • Publication and intellectual property protection (10% of budget)
      
      By supporting this project, you're not just funding research—you're becoming part of a community that's redefining how medical innovation happens. Together, we can accelerate the discovery of life-saving treatments while establishing a new paradigm for scientific collaboration.
      
      Join us in this revolution at the intersection of quantum computing, AI, and medicine.
    `,
    contributors: [
      { id: "0xd9443...4e90", amount: "345 USDC" },
      { id: "0xc8443...4e90", amount: "258 USDC" },
      { id: "0xb5443...4e90", amount: "210 USDC" },
      { id: "0xa3443...4e90", amount: "180 USDC" },
      { id: "0x92443...4e90", amount: "150 USDC" },
      { id: "0x81443...4e90", amount: "120 USDC" },
      { id: "0x70443...4e90", amount: "100 USDC" },
      { id: "0x60443...4e90", amount: "100 USDC" },
    ],
  }

  return (
    <section className="bg-[url('/assets/CampaignBg.png')] bg-cover bg-center min-h-screen">
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="rounded-md bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 overflow-hidden border border-white/10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
            {/* Main Content - 2/3 width on desktop */}
            <div className="md:col-span-2">
              <h1 className="text-white text-2xl md:text-3xl font-bold mb-4">{campaign.title}</h1>

              <div className="relative mb-6">
                <Image
                  src={campaign.image || "/placeholder.svg"}
                  alt={campaign.title}
                  width={600}
                  height={400}
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
              </div>

              <div className="flex items-center gap-6 mb-6">
                <div className="flex items-center text-white/70 text-sm">
                  <div className="h-6 w-6 bg-[#6247AA] rounded-full mr-2 flex items-center justify-center text-xs">
                    <span>FD</span>
                  </div>
                  <span>Created by {campaign.creator}</span>
                </div>

                <div className="flex items-center text-white/70 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>Start Date: {campaign.startDate}</span>
                </div>
              </div>

              <div className="text-white/80 text-sm space-y-4 whitespace-pre-line">{campaign.description}</div>
            </div>

            {/* Sidebar - 1/3 width on desktop */}
            <div className="bg-[#232330] rounded-xl p-5 h-fit">
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center text-white">
                    <h4>$60k/$100k</h4>
                  </div>
                  <span className="text-white/70 text-sm">{campaign.safetyScore}/100</span>
                </div>
                <div className="w-full h-1.5 bg-white/10 rounded-full my-3">
                  <div
                    className="h-full bg-gradient-to-r from-[#6247AA] to-[#5B49BE] rounded-full"
                    style={{ width: `${70}%` }}
                  ></div>
                </div>
              </div>

              <div className="mb-6 space-y-4">
                <Label className="text-white font-medium mb-2">Campaign Deadline</Label>
                <Input
                  type="number"
                  placeholder="Enter amount to contribute"
                  className="bg-[#2A2A3A] rounded-md p-3 text-white/70 text-sm" />
              </div>

              <Button className="w-full bg-white text-black hover:bg-gray-100 mb-6">Contribute</Button>

              <div>
                <h3 className="text-white font-medium mb-4">Contributors</h3>
                <div className="space-y-3 max-h-80 overflow-y-auto pr-2 max-h-100 [&::-webkit-scrollbar]:w-2
  [&::-webkit-scrollbar-track]:rounded-full
  [&::-webkit-scrollbar-track]:bg-gray-100
  [&::-webkit-scrollbar-thumb]:rounded-full
  [&::-webkit-scrollbar-thumb]:bg-gray-4z00
  dark:[&::-webkit-scrollbar-track]:bg-neutral-700
  dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800">
                  {campaign.contributors.map((contributor, index) => (
                    <div key={index} className="flex items-center justify-between bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-50 gap-2 text-white text-sm xl:text-lg p1-1 xl:p-2 rounded-full">
                      <div className="flex items-center ">
                        <div className="flex gap-2">
                          <Avatar className="md:h-4 md:w-4 xl:h-8 xl:w-8">
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>CN</AvatarFallback>
                          </Avatar>
                          <h4>0xe3443..46</h4>
                        </div>
                      </div>
                      <span className="text-white font-medium text-sm">{contributor.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

