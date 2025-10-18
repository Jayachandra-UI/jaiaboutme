"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      console.log("Form submitted:", formData)
      setFormData({ name: "", email: "", message: "" })
      setIsSubmitting(false)
    }, 1000)
  }

  const socialLinks = [
    { label: "GitHub", href: "https://github.com/Jayachandra-UI", icon: "github" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jaya-chandra-07915a184/", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com", icon: "twitter" },
    { label: "Email", href: "mailto:jaichandraios@gmail.com", icon: "mail" },
  ]

  return (
    <section id="contact" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Get In Touch</h2>
          <p className="mt-4 text-muted-foreground">
            Have a project in mind? Let's collaborate and create something amazing together.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 mb-12">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all duration-300"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full rounded-lg border border-border bg-card px-4 py-2 text-foreground placeholder-muted-foreground focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none transition-all duration-300"
              placeholder="Tell me about your project..."
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>

        <div className="border-t border-border pt-12">
          <p className="text-center text-sm text-muted-foreground mb-6">Or connect with me on social media</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-lg border border-border flex items-center justify-center text-muted-foreground transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/10 hover:shadow-lg"
                aria-label={link.label}
              >
                <span className="text-lg">
                  {link.icon === "github" && "⚙️"}
                  {link.icon === "linkedin" && "💼"}
                  {link.icon === "twitter" && "𝕏"}
                  {link.icon === "mail" && "✉️"}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
