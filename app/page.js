"use client"

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  AlignJustify as Spotify,
  Linkedin,
  Github,
  Disc as Discord,
  Send,
  Calendar,
  Heart,
  TrendingUp,
  Twitch,
  Music2,
  CloudRain,
  Code,
} from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Home() {
  const mainSocialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "#",
      color: "text-[#4267B2]",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "#",
      color: "text-[#1DA1F2]",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "#",
      color: "text-[#E4405F]",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "#",
      color: "text-[#FF0000]",
    },
    {
      icon: <Spotify className="w-6 h-6" />,
      href: "#",
      color: "text-[#1DB954]",
    },
    { icon: <Github className="w-6 h-6" />, href: "#", color: "text-[#333]" },
  ]

  const otherLinks = [
    { icon: <Discord />, label: "Discord", href: "#" },
    { icon: <Send />, label: "Telegram", href: "#" },
    { icon: <Code />, label: "Drumfeet Dev", href: "#" },
    { icon: <CloudRain />, label: "Marssmarsshan", href: "#" },
    { icon: <Music2 />, label: "Fizzles", href: "#" },
    { icon: <Music2 />, label: "Forgetful Bob", href: "#" },
    { icon: <Calendar />, label: "Schedule Meeting", href: "#" },
    { icon: <Heart />, label: "Donate", href: "#" },
    { icon: <TrendingUp />, label: "TradingView", href: "#" },
    { icon: <Twitch />, label: "Twitch", href: "#" },
    { icon: <Music2 />, label: "Odysee", href: "#" },
    { icon: <Music2 />, label: "SoundCloud", href: "#" },
    { icon: <Music2 />, label: "Audius", href: "#" },
  ]

  return (
    <main className="min-h-screen bg-[#fdfd96] pattern-grid-lg">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Profile Section */}
        <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-8 mb-12">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8">
              <Image
                src="/marssmarsshan.jpg?q=80&w=400&h=400&fit=crop"
                alt="Eren Clarise"
                fill
                className="object-cover border-4 border-black"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 font-['Comic_Sans_MS']">
              Eren Clarise
            </h1>
            <p className="text-2xl mb-6 font-mono">@erenclarise</p>
            <p className="text-lg max-w-2xl mx-auto font-mono">
              Software Development. Music. Drums. Cycling. Tech. Blockchain.
              Crypto. Technical Analysis.
            </p>
          </div>
        </div>

        {/* Video Section */}
        {/* <div className="bg-white border-4 border-black shadow-[8px_8px_0_0_rgba(0,0,0,1)] p-4 mb-12">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/5C26Oh6syf0"
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="border-2 border-black"
            />
          </div>
        </div> */}

        {/* Main Social Icons */}
        <div className="flex justify-center gap-6 mb-12">
          {mainSocialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.color} transform hover:scale-125 transition-transform duration-200`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Videos Section */}
        <div className="mb-12">
          <Card className="p-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-2xl font-bold mb-4 font-['Comic_Sans_MS']">
              Featured Videos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["jjMAc-dN41s", "x-k3cEYZ12s", "C1evtYt84pY"].map((videoId) => (
                <div key={videoId} className="aspect-video">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="border-2 border-black"
                  />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Other Links */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {otherLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all p-4 flex items-center gap-3 font-mono"
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
