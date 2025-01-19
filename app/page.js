"use client"

import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Music as Spotify,
  Github,
  MessageCircleMore as Discord,
  Send,
  Calendar,
  Heart,
  TrendingUp,
  Twitch,
  Music2,
  CloudRain,
  Code,
  Linkedin,
  Video,
  AudioLines,
} from "lucide-react"
import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function Home() {
  const mainSocialLinks = [
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/marssmarsshan",
      color: "text-[#4267B2]",
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      href: "https://www.facebook.com/marssmarsshans",
      color: "text-[#4267B2]",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      href: "https://x.com/marssmarsshan",
      color: "text-[#1DA1F2]",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/marssmarsshan",
      color: "text-[#E4405F]",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      href: "https://www.youtube.com/ethanronoelsalazar",
      color: "text-[#FF0000]",
    },
    {
      icon: <Spotify className="w-6 h-6" />,
      href: "https://open.spotify.com/artist/7LrUyckRcDq8ziPFvsjgjG",
      color: "text-[#1DB954]",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "http://github.com/drumfeet",
      color: "text-[#333]",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/ethanronoelsalazar",
      color: "text-[#0077B5]",
    },
  ]

  const otherLinks = [
    {
      icon: <Code />,
      label: "drumfeet Dev",
      href: "https://drumfeet.arweave.dev",
    },
    { icon: <Discord />, label: "Discord", href: "/discord" },
    { icon: <Send />, label: "Telegram", href: "/telegram" },
    { icon: <Music2 />, label: "Fizzles", href: "https://fizzlesmusic.com" },
    {
      icon: <Music2 />,
      label: "Forgetful Bob",
      href: "https://forgetfulbob.com",
    },
    {
      icon: <TrendingUp />,
      label: "TradingView",
      href: "https://www.tradingview.com/u/marssmarsshan",
    },
    {
      icon: <Twitch />,
      label: "Twitch",
      href: "https://www.twitch.tv/marssmarsshan",
    },
    {
      icon: <Video />,
      label: "Odysee",
      href: "https://odysee.com/@marssmarsshan:c",
    },
    {
      icon: <CloudRain />,
      label: "SoundCloud",
      href: "https://soundcloud.com/marssmarsshan",
    },
    {
      icon: <AudioLines />,
      label: "Audius",
      href: "https://audius.co/marssmarsshan",
    },
    { icon: <Heart />, label: "Post a comment", href: "/post" },
    { icon: <Calendar />, label: "Schedule Meeting", href: "/meet" },
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
                alt="Ethan Ronoel Salazar"
                fill
                className="object-cover border-4 border-black"
                priority
              />
            </div>
            <h1 className="text-6xl font-bold mb-4 font-mono">
              Ethan Ronoel Salazar
            </h1>
            <p className="text-2xl mb-6 font-mono">@marssmarsshan</p>
            <p className="text-lg max-w-2xl mx-auto font-mono">
              Software Development. Music. Drums. Cycling. Tech. Blockchain.
              Crypto. Technical Analysis.
            </p>
          </div>
        </div>

        {/* Main Social Icons */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
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
              {/* Featured Videos */}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {otherLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border-4 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all p-4 flex items-center gap-3 font-mono text-sm overflow-hidden"
            >
              <span className="flex-shrink-0">{link.icon}</span>
              <span className="truncate flex-grow min-w-0">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
