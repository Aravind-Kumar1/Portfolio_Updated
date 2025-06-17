"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter, Mail } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/Aravind-Kumar1",
    description: "Check out my code",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/aravind-chamaakuri/",
    description: "Professional network",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    description: "Follow my journey",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:aravind.chamaakuri@outlook.com",
    description: "Direct contact",
  },
]

export default function SocialLinks() {
  return (
      <div className="space-y-8">
        <Card className="bg-gray-900/50 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Connect with me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                  <Button
                      key={index}
                      variant="outline"
                      className="h-auto p-4 border-white/20 hover:border-blue-400/50 hover:bg-blue-400/10 flex flex-col items-center gap-2 group"
                      asChild
                  >
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="h-6 w-6 text-gray-400 group-hover:text-blue-400 transition-colors" />
                      <div className="text-center">
                        <div className="text-white font-medium">{link.name}</div>
                        <div className="text-xs text-gray-400">{link.description}</div>
                      </div>
                    </a>
                  </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/*<Card className="bg-gradient-to-r from-blue-900/20 to-purple-900/20 border-blue-400/30">*/}
        {/*  <CardContent className="p-6 text-center">*/}
        {/*    <h3 className="text-xl font-semibold text-white mb-2">Available for freelance work</h3>*/}
        {/*    <p className="text-gray-300 mb-4">I'm currently accepting new projects and would love to hear about yours.</p>*/}
        {/*    <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white">*/}
        {/*      Let's Work Together*/}
        {/*    </Button>*/}
        {/*  </CardContent>*/}
        {/*</Card>*/}
      </div>
  )
}