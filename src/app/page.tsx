import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DiscIcon as Discord, Instagram, Twitter, Star, Zap, Music, Bone } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import backgroundImage from "/public/images/doginal-punks-background.png" // Add this line
import pfp from "/public/images/pfp.png" // Add this line


export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white font-punk overflow-hidden">
      {/* Header and Hero with shared Background Image */}
      <div className="relative">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src={backgroundImage} // Updated to use the imported image
            alt="Dogenal Collection"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Darker Gradient Overlay for dimmer background */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 to-black/70" />
        </div>

        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Star className="absolute top-1/4 left-1/4 text-neon-yellow opacity-50 animate-float" size={24} />
          <Zap className="absolute top-1/3 right-1/4 text-neon-pink opacity-50 animate-float-delay-1" size={32} />
          <Music className="absolute bottom-1/4 left-1/3 text-neon-green opacity-50 animate-float-delay-2" size={28} />
          <Bone className="absolute bottom-1/3 right-1/3 text-neon-blue opacity-50 animate-float-delay-3" size={36} />
        </div>

        {/* Header Content */}
        <header className="relative z-10">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center">
              <div className="text-3xl font-extrabold text-neon-pink drop-shadow-[0_0_10px_rgba(255,110,199,0.7)]">
                Dogenal
              </div>
              <nav className="hidden md:flex space-x-6">
                {["About", "Mint", "Roadmap", "FAQ"].map((item) => (
                  <Link 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-white hover:text-neon-green transition-colors duration-300 text-lg font-medium"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
              <a
              href="https://doggy.market" 
              target="_blank" 
              rel="noopener noreferrer"
              >
                <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-[0_0_15px_rgba(255,110,199,0.5)]">
                 Join The Culture
              </Button>
              </a>
              
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32 relative z-10">
          <div className="container mx-auto text-center px-4">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 
                           bg-clip-text text-transparent bg-gradient-to-r from-neon-pink via-neon-yellow to-neon-green
                           drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Unleash the Digital Rebellion with Dogenal 🐶🔥
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90 
                          drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]
                          max-w-2xl mx-auto">
              Mint Your Punk, Join the Pack! Each Dogenal is a unique piece of digital rebellion, 
              featuring hand-crafted traits and punk rock attitude.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <a 
                href="https://doggy.market" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-neon-pink hover:bg-neon-pink/80 text-white text-lg py-6 px-8
                                   transform hover:scale-105 transition-all duration-300
                                   shadow-[0_0_20px_rgba(255,110,199,0.5)] rounded-full font-bold">
                  MINT NOW
                </Button>
              </a>
              <a 
                href="https://discord.gg/t4pSNcuGJX" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button className="bg-neon-blue hover:bg-neon-blue/80 text-white text-lg py-6 px-8
                                   transform hover:scale-105 transition-all duration-300
                                   shadow-[0_0_20px_rgba(77,77,255,0.5)] rounded-full font-bold">
                  JOIN DISCORD
                </Button>
              </a>
            </div>
          </div>
        </section>
      </div>

      {/* About Section */}
      <section id="about" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-neon-yellow drop-shadow-[0_0_10px_rgba(255,255,0,0.7)]">About Dogenal</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Welcome to the Dogenal's Den, where each NFT is a rebellious canine ready to bite the hand that feeds the status quo. 
            We're not just creating collectibles; we're breeding a pack of digital anarchists, each with a bone to pick with the system.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                title: "Punk to the Bone", 
                description: "From spiked collars to leather jackets, mohawks to tattoos, each Dogenal is a middle finger to conformity. Rock studded ear tags, anarchy symbols, and more!"
              },
              { 
                title: "Bark the Vote", 
                description: "Our DAO isn't just a fancy word. It's your ticket to shaping the future of our rebel pack. Vote on projects, collaborations, and watch the fur fly in heated debates."
              },
              { 
                title: "Unleash the Beast", 
                description: "Punk's not dead, it just went digital. Join our virtual mosh pits, underground art shows, and crypto-anarchist meetups. The revolution will be tokenized!"
              },
              { 
                title: "Every Dog Has Its Day", 
                description: "Each Dogenal comes with its own backstory. Was your punk a stray turned street artist? A lab escapee with a taste for chaos? The tales are as wild as the dogs themselves."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-gray-800 border-neon-pink hover:shadow-neon-pink hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                <CardHeader>
                  <CardTitle className="text-white">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-white">
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Minting Section */}
      <section id="mint" className="py-20 bg-gray-900">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-8 text-neon-blue drop-shadow-[0_0_10px_rgba(77,77,255,0.7)]">Join the Rebellion: Mint Your Dogenal</h2>
          <div className="max-w-2xl mx-auto bg-black p-8 rounded-lg border-2 border-neon-pink shadow-lg shadow-neon-pink/20">
            <ol className="list-decimal text-left pl-6 space-y-4 text-white">
              <li>Connect your crypto-collar (wallet) to doggy marketplace and visit dogenal Collection</li>
              <li>Hit the "MINT NOW" button like you're smashing the system</li>
              <li>Choose how many Dogenal you want in your pack</li>
              <li>Confirm the transaction and watch the magic happen</li>
              <li>Wait for the blockchain to do its thing (it's brewing anarchy)</li>
              <li>Welcome to the revolution! Your Dogenal is ready to raise hell</li>
            </ol>
            <p className="mt-6 text-neon-yellow">
              Gas fees apply (because even rebels need fuel). Early birds and true punks get priority minting and discounted rates!
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900 z-0"></div>
        <div className="container mx-auto text-center px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-8 text-neon-green drop-shadow-[0_0_10px_rgba(57,255,20,0.7)]">The Pack Leaders</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: "Block_catz", role: "Punk Visionary", image: "/placeholder.svg" },
              { name: "SuccessKay", role: "Punk Visionary", image: "/placeholder.svg" },
              { name: "WellsLifa", role: "Punk Visionary", image: "/placeholder.svg" },
              { name: "Web3Joker", role: "Punk Visionary", image: "/placeholder.svg" }

            ].map((member, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg relative">
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-neon-pink rounded-full animate-float-delay-1"></div>
                <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-neon-green rounded-full animate-float-delay-2"></div>
                <Image 
                  src={pfp} 
                  alt={member.name} 
                  width={200} 
                  height={200} 
                  className="rounded-full mx-auto mb-4 border-4 border-neon-pink"
                />
                <h3 className="text-xl font-bold text-neon-yellow">{member.name}</h3>
                <p className="text-neon-blue">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center text-neon-pink drop-shadow-[0_0_10px_rgba(255,110,199,0.7)]">Roadmap to Anarchy</h2>
          <div className="max-w-3xl mx-auto">
            {[
              { phase: "Phase 1: Unleash Chaos", description: "Launch the pack, build our rebel base, initiate the first wave of digital mayhem." },
              { phase: "Phase 2: Amplify the Howl", description: "Expand our territory, forge alliances with other crypto-punks, host virtual riots (aka events)." },
              { phase: "Phase 3: Dogma Disruption", description: "Real-world impact through charitable chaos, merch that screams rebellion, global recognition of our digital uprising." }
            ].map((phase, index) => (
              <div key={index} className="mb-8 flex">
                <div className="flex flex-col items-center mr-4">
                  <div className="w-4 h-4 bg-neon-green rounded-full shadow-[0_0_10px_rgba(57,255,20,0.7)]"></div>
                  {index !== 2 && <div className="w-1 h-full bg-neon-green"></div>}
                </div>
                <div className="bg-black p-6 rounded-lg flex-1 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  <h3 className="text-2xl font-bold text-neon-yellow mb-2">{phase.phase}</h3>
                  <p className="text-white">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black z-0"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-4xl font-bold mb-12 text-center text-neon-blue drop-shadow-[0_0_10px_rgba(77,77,255,0.7)]">FAQ (Frequently Anarchy'd Questions)</h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { question: "What the hell is an NFT?", answer: "NFT stands for Non-Fungible Token. It's a unique digital asset verified using blockchain technology. Think of it as a one-of-a-kind, can't-be-copied digital punk badge." },
              { question: "How do I get my paws on a Dogenal?", answer: "Easy, rebel! Connect your wallet, smash that 'MINT NOW' button, pick how many punks you want in your pack, and confirm the transaction. Boom! Digital anarchy achieved." },
              { question: "What crypto-collars (wallets) can I use?", answer: "We roll with doggy.market inbuilt wallet. Pick your poison, as long as it's Doge-based." },
              { question: "How do I join the uprising?", answer: "Dive into our Discord, follow us on social media for the latest acts of rebellion, and once you're a Dogenal owner, you can vote in our DAO. Your voice, your choice, your revolution!" }
            ].map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-700">
                <AccordionTrigger className="text-neon-green hover:text-neon-green/80 transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-white">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="container mx-auto text-center px-4">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://discord.gg/t4pSNcuGJX" 
              className="text-neon-pink hover:text-neon-pink/80 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord size={24} />
              <span className="sr-only">Discord</span>
            </a>
            <a 
              href="https://twitter.com/dogenalondoge" 
              className="text-neon-blue hover:text-neon-blue/80 transition-colors duration-300 transform hover:scale-110"
            >
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a 
              href="#" 
              className="text-neon-yellow hover:text-neon-yellow/80 transition-colors duration-300 transform hover:scale-110"
            >
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-4">
              <li><a href="#" className="text-white hover:text-neon-green transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-white hover:text-neon-green transition-colors duration-300">Terms of Service</a></li>
              <li><a href="#" className="text-white hover:text-neon-green transition-colors duration-300">Contact Us</a></li>
            </ul>
          </nav>
          <p className="text-gray-500 mb-4">&copy; 2024 Dogenal. All rights reserved (but we don't believe in rules anyway).</p>
          <p className="text-neon-green text-xl font-bold animate-pulse">"Keep Barking, Keep Punking"</p>
        </div>
      </footer>
    </div>
  )
}