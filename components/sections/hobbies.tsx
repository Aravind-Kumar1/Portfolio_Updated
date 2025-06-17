"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Camera, Music, Gamepad2, Book, Plane, Palette } from "lucide-react"

const hobbies = [
  { icon: Camera, name: "Photography", color: "from-pink-500 to-rose-500" },
  { icon: Music, name: "Music", color: "from-purple-500 to-indigo-500" },
  { icon: Gamepad2, name: "Gaming", color: "from-green-500 to-emerald-500" },
  { icon: Book, name: "Reading", color: "from-blue-500 to-cyan-500" },
  { icon: Plane, name: "Travel", color: "from-orange-500 to-red-500" },
  { icon: Palette, name: "Design", color: "from-violet-500 to-purple-500" },
]

export default function Hobbies() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-white">When I'm Not Coding</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Life is about balance - here are the things that inspire and energize me
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="bg-gray-900/50 border-white/10 hover:border-white/30 transition-all duration-300 group hover:scale-110 cursor-pointer"
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4 flex justify-center">
                  <div
                    className={`p-4 bg-gradient-to-r ${hobby.color} rounded-full opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
                  >
                    <hobby.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <h3 className="text-sm font-medium text-white group-hover:text-gray-200 transition-colors">
                  {hobby.name}
                </h3>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
