"use client"

import Link from "next/link"

export default function Hero() {
  const handleResumeDownload = () => {
    const link = document.createElement("a")
    link.href = "/resume/Jaya-Chandra-Resume.pdf"
    link.download = "Jaya-Chandra-Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 lg:items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-semibold text-accent">Welcome to my portfolio</p>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-balance">
                Full-Stack Developer
              </h1>
              <p className="text-xl text-muted-foreground">
                Building scalable web applications with MongoDB, Express, React, and Node.js
              </p>
            </div>

            <p className="text-base leading-relaxed text-muted-foreground max-w-lg">
              I craft modern, performant web applications with a focus on user experience and clean code. Specializing
              in MERN stack development, I transform ideas into robust digital solutions.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-lg bg-accent px-6 py-3 font-medium text-accent-foreground transition-all duration-300 hover:opacity-90 hover:shadow-lg"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-all duration-300 hover:bg-card hover:border-accent hover:shadow-lg"
              >
                Get in Touch
              </Link>
              <button
                onClick={handleResumeDownload}
                className="inline-flex items-center justify-center rounded-lg border border-accent bg-accent/10 px-6 py-3 font-medium text-accent transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-lg"
              >
                <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Resume
              </button>
            </div>
          </div>

          <div className="relative h-96 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl font-bold text-accent/30">MERN</div>
              <p className="text-muted-foreground mt-4">Full-Stack Development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
