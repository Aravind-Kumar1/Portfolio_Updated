"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, CheckCircle } from "lucide-react"

export default function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const form = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (form.current) {
      emailjs
          .sendForm(
              "service_02vh4hz",
              "template_6odi0nn",
              form.current,
              "MikydQenH8f_SH65S"
          )
          .then(
              () => {
                setIsSubmitted(true)
                form.current?.reset()
                setTimeout(() => setIsSubmitted(false), 3000)
              },
              (error) => {
                console.error("EmailJS error:", error.text)
                alert("Failed to send message. Please try again.")
              }
          )
    }
  }

  return (
      <div className="font-[Poppins,sans-serif]">
        <Card className="bg-gray-900/50 border-white/10">
          <CardHeader>
            <CardTitle className="text-2xl text-white">Send me a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                  <Input
                      type="text"
                      name="name"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                      placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <Input
                      type="email"
                      name="email"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                      placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                <Input
                    type="text"
                    name="subject"
                    required
                    className="bg-black/40 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400"
                    placeholder="What's this about?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <Textarea
                    name="message"
                    required
                    rows={6}
                    className="bg-black/40 border-white/20 text-white placeholder:text-gray-500 focus:border-blue-400 resize-none"
                    placeholder="Tell me about your project..."
                />
              </div>

              <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
                  disabled={isSubmitted}
              >
                {isSubmitted ? (
                    <>
                      <CheckCircle className="mr-2 h-5 w-5" />
                      Message Sent!
                    </>
                ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
  )
}