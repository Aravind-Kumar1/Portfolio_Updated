"use client"

import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Heart, Users, Coffee, Code, Lightbulb } from "lucide-react"

const facts = [
  {
    icon: GraduationCap,
    title: "4th Year Engineering Student",
    description: "Computer Science & Engineering",
  },
  {
    icon: Heart,
    title: "Minimal Design Lover",
    description: "Clean, purposeful interfaces",
  },
  {
    icon: Users,
    title: "NSS Core Team Member",
    description: "Community service leader",
  },
  {
    icon: Coffee,
    title: "Coffee Enthusiast",
    description: "Fuel for late-night coding",
  },
  {
    icon: Code,
    title: "50+ Projects Built",
    description: "From concept to deployment",
  },
  {
    icon: Lightbulb,
    title: "Problem Solver",
    description: "Love tackling complex challenges",
  },
]

export default function FunFacts() {
  return (
    <section className="py-24 bg-gray-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">Fun Facts About Me</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Beyond the code - here's what makes me tick</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facts.map((fact, index) => (
            <Card
              key={index}
              className="bg-black/40 border-white/10 hover:border-blue-400/50 transition-all duration-300 group hover:scale-105"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <fact.icon className="h-6 w-6 text-blue-400 group-hover:text-blue-300" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-blue-300 transition-colors">
                  {fact.title}
                </h3>
                <p className="text-gray-400 text-sm">{fact.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
