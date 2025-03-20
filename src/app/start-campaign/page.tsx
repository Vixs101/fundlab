import React from 'react'
import Navbar from "@/components/navbar"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Calendar } from 'lucide-react'

export default function StartCampaignPage() {
  return (
    <main className="bg-[url('/assets/Campaign.jpg')] bg-cover bg-center min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">
              Start Your Research Campaign
            </h1>
            <p className="text-white/70 max-w-2xl mx-auto">
              Get the funding you need to turn your research into reality. FUNDLAB connects you with a 
              global community of supporters who believe in your vision.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left Column - Instructions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-white text-xl font-semibold mb-3">How it Works</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  Submit your campaign by providing key details about your research, funding goals, and 
                  milestones. Once submitted, our AI-powered system and community will review and verify your project for authenticity 
                  and feasibility. Approved campaigns receive funding through crypto, fiat, or NFTs, as your team verified 
                  research milestones. Funds are released through smart contracts, ensuring transparency and accountability.
                </p>
              </div>
              
              <div>
                <h2 className="text-white text-xl font-semibold mb-3">Tips for a Successful Campaign</h2>
                <p className="text-white/70 text-sm leading-relaxed">
                  To maximize your chances of funding success, be clear and concise in your 
                  description so that everyone understands. Set realistic and achievable 
                  milestones with associated progress. Include your team&apos;s qualifications and experience, especially in 
                  scientific disciplines like medicine, NFT, or early-stage ventures. 
                  Use high-quality images and videos to make your campaign more compelling and trustworthy.
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Need help? Read Our <span className="text-[#5B49BE] cursor-pointer">Campaign Guide</span>
                </p>
              </div>
            </div>
            
            {/* Right Column - Form */}
            <div className="bg-[#2A2A3A]/80 rounded-xl p-6 border border-white/10">
              <form className="space-y-5">
                <div>
                  <label htmlFor="title" className="block text-white text-sm mb-2">Campaign Title</label>
                  <Input 
                    id="title" 
                    placeholder="Enter campaign title" 
                    className="bg-[#232330] border-0 text-white focus-visible:ring-[#5B49BE] focus-visible:ring-offset-0"
                  />
                </div>
                
                <div>
                  <label htmlFor="description" className="block text-white text-sm mb-2">Description</label>
                  <Textarea 
                    id="description" 
                    placeholder="Describe your campaign..." 
                    className="bg-[#232330] border-0 text-white focus-visible:ring-[#5B49BE] focus-visible:ring-offset-0 min-h-[100px]"
                  />
                </div>
                
                <div>
                  <label htmlFor="image" className="block text-white text-sm mb-2">Campaign Image</label>
                  <Input 
                    id="image" 
                    type="file" 
                    className="bg-[#232330] border-0 text-white focus-visible:ring-[#5B49BE] focus-visible:ring-offset-0 file:bg-[#5B49BE] file:text-white file:border-0"
                  />
                </div>
                
                <div>
                  <label htmlFor="goal" className="block text-white text-sm mb-2">Funding Goal</label>
                  <Input 
                    id="goal" 
                    placeholder="Enter the funding goal" 
                    className="bg-[#232330] border-0 text-white focus-visible:ring-[#5B49BE] focus-visible:ring-offset-0"
                  />
                </div>
                
                <div>
                  <label htmlFor="token" className="block text-white text-sm mb-2">Preferred Token</label>
                  <Select>
                    <SelectTrigger className="bg-[#232330] border-0 text-white focus:ring-[#5B49BE] focus:ring-offset-0">
                      <SelectValue placeholder="Select token" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#232330] border border-white/10 text-white">
                      <SelectItem value="usdc">USDC</SelectItem>
                      <SelectItem value="eth">ETH</SelectItem>
                      <SelectItem value="usdt">USDT</SelectItem>
                      <SelectItem value="dai">DAI</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label htmlFor="deadline" className="block text-white text-sm mb-2">Campaign Deadline</label>
                  <div className="relative">
                    <Input 
                      id="deadline" 
                      type="date" 
                      placeholder="MM/DD/YYYY" 
                      className="bg-[#232330] border-0 text-white focus-visible:ring-[#5B49BE] focus-visible:ring-offset-0 pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-white/50" />
                  </div>
                </div>
                
                <Button type="submit" className="w-full bg-[#5B49BE] hover:bg-[#4C3DB2] mt-6">
                  Submit Campaign
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
    </main>
  )
}
