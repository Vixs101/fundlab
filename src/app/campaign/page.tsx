"use client"

import { useEffect, useState } from "react"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { getContract } from "@/hooks/useContract"
import Image from "next/image"
import Link from "next/link"
import { ethers } from "ethers"
import { convertToDecimalValue } from "@/functions/misc-functions"

// Define the Campaign type based on the contract structure
interface Contribution {
  contributor: string
  amount: string
  timestamp: number
}

interface Campaign {
  id: number
  title: string
  description: string
  imageLink: string
  goal: string
  endDate: number
  createdAt: number
  creator: string
  preferredToken: string
  tokenDecimals: number
  totalRaised: string
  status: number
  contributions: Contribution[]
}

export default function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([])
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState("active")

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        setLoading(true)
        const contract = getContract()
        const campaignsData = await contract.getAllCampaigns()
        
        // Transform the data to match our interface
        const formattedCampaigns = campaignsData.map((campaign: any) => ({
          id: Number(campaign.id),
          title: campaign.title,
          description: campaign.description,
          imageLink: campaign.imageLink,
          goal: convertToDecimalValue(String(campaign.goal), 18),
          endDate: Number(campaign.endDate),
          createdAt: Number(campaign.createdAt),
          creator: campaign.creator,
          preferredToken: campaign.preferredToken,
          tokenDecimals: Number(campaign.tokenDecimals),
          totalRaised: convertToDecimalValue(String(campaign.totalRaised), 18),
          status: Number(campaign.status),
          contributions: campaign.contributions.map((contribution: any) => ({
            contributor: contribution.contributor,
            amount: convertToDecimalValue(String(campaign.amount), 18),
            timestamp: Number(contribution.timestamp)
          }))
        }))
        
        setCampaigns(formattedCampaigns)
      } catch (error) {
        console.error("Failed to fetch campaigns:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCampaigns()
  }, [])

  // Filter campaigns based on active tab
  const filteredCampaigns = campaigns.filter(campaign => {
    const now = Math.floor(Date.now() / 1000)
    if (activeTab === "active") {
      return campaign.endDate > now && campaign.status === 0 // Active campaigns
    } else {
      return campaign.endDate < now || campaign.status !== 0 // Ended campaigns
    }
  })

  return (
    <section className="bg-[url('/assets/CampaignBg.png')] bg-cover bg-center min-h-screen">
      <div className="mx-auto px-4 pt-32 pb-16">
        <div className="p-4 md:px-16 lg:px-24 mx-auto">
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-4">Research Campaigns</h1>
          <p className="text-white/70 mb-8">
            Explore current and completed research projects powered by FundLab. Support groundbreaking discoveries or
            review past successes.
          </p>

          <Tabs defaultValue="active" className="mb-8 w-80" onValueChange={setActiveTab}>
            <TabsList className="bg-[#2A2A3A]/80 border border-white/10 ">
              <TabsTrigger value="active" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Active
              </TabsTrigger>
              <TabsTrigger value="ended" className="data-[state=active]:bg-white data-[state=active]:text-black">
                Ended
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-white">Loading campaigns...</p>
            </div>
          ) : filteredCampaigns.length === 0 ? (
            <div className="flex justify-center items-center h-64">
              <p className="text-white">No {activeTab} campaigns found</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full justify-center items-center">
              {filteredCampaigns.map((campaign) => (
                <CampaignCard
                  key={campaign.id.toString()}
                  id={campaign.id.toString()}
                  image={campaign.imageLink || "/assets/campaign-placeholder.png"}
                  title={campaign.title}
                  category={campaign.description.length > 30 ? campaign.description.substring(0, 30) + "..." : campaign.description}
                  raised={campaign.totalRaised}
                  goal={campaign.goal}
                  progress={calculateProgress(campaign.totalRaised, campaign.goal)}
                  days={calculateDaysLeft(campaign.endDate)}
                  creator={campaign.creator}
                  status={campaign.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

// Helper functions
function calculateProgress(raised: string, goal: string): number {
  const raisedNum = parseFloat(raised)
  const goalNum = parseFloat(goal)
  if (goalNum === 0) return 0
  return Math.min(Math.round((raisedNum / goalNum) * 100), 100)
}

function calculateDaysLeft(endDate: number): number {
  const now = Math.floor(Date.now() / 1000)
  const secondsLeft = endDate - now
  return secondsLeft > 0 ? Math.ceil(secondsLeft / (60 * 60 * 24)) : 0
}

function shortenAddress(address: string): string {
  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

interface CampaignCardProps {
  id: string
  image: string
  title: string
  category: string
  raised: string
  goal: string
  progress: number
  days: number
  creator: string
  status: number
}

function CampaignCard({ id, image, title, category, raised, goal, progress, days, creator, status }: CampaignCardProps) {
  const statusLabel = status === 0 ? "Active" : status === 1 ? "Successful" : status === 2 ? "Failed" : "Cancelled"
  
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
              <AvatarImage src={`https://avatars.dicebear.com/api/identicon/${creator}.svg`} />
              <AvatarFallback>{creator.substring(0, 2)}</AvatarFallback>
            </Avatar>
            <h4>{shortenAddress(creator)}</h4>
          </div>
          <Button 
            variant="default" 
            className={`rounded-full ${
              status === 0 ? "bg-white text-black" : 
              status === 1 ? "bg-green-500 text-white" : 
              status === 2 ? "bg-red-500 text-white" : 
              "bg-gray-500 text-white"
            }`}
          >
            {statusLabel}
          </Button>
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
            <p className="text-white font-medium">{raised} EDU</p>
            <p className="text-white/50 text-xs">of {goal} EDU</p>
          </div>
          <div className="text-right">
            <p className="text-white font-medium">{days} days</p>
            <p className="text-white/50 text-xs">remaining</p>
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