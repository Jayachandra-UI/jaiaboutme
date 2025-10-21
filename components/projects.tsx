import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "MeetHour Video Conferencing Platform - SaaS",
      description: "Full-stack video conferencing solution with real-time chat and screen sharing.Implemented live transcription feature using Google Speech-to-Text (STT) API to improve meeting accessibility.Designed and developed Breakout Rooms functionality to enable dynamic group collaboration during meetings.",
      tags: ["React", "Next.js", "MongoDB", "WebRTC"],
      link: "https://meethour.io",
    },
    {
      title: "eVisitNB — Online Doctor & Patient Consultation Platform Web Application",
      description: "Developed the entire platform from scratch to enable secure online consultations between doctors and patients. Built appointment booking, video consultations, and patient management modules using modern web technologies.",
      tags: ["React", "Next.js", "Tailwind CSS", "REST API Integration", "Pusher", "Socket.io", "Firebase push notifications"],
      link: "https://www.evisitnb.ca/",
    },
    {
      title: "eVisitNB — Online Doctor & Patient Consultation Mobile Platform",
      description: "Developed the entire platform from scratch to enable secure online consultations between doctors and patients. Built appointment booking, video consultations, and patient management modules using modern web technologies.",
      tags: ["React Native", "Native Base", "Tailwind CSS", "REST API Integration", "Pusher", "Socket.io", "Firebase push notifications"],
      link: "https://www.evisitnb.ca/",
    },
    {
      title: "SigmaPlot NG",
      description: "SigmaPlot NG Cloudification is a proprietary software package for scientific graphing and data analysis. It runs on a web browser. The software can read multiple formats, such as Microsoft Excel spreadsheets, and can also perform mathematical transforms and statistical analyses.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Chart.js"],
      link: "#",
    },
    {
      title: "BULLFORCE",
      description: "Bullforce is an Indian financial services company that provides a multi-exchange trading platform for equities and derivatives.Provides a user-friendly platform for trading stocks, futures, options, and IPOs across exchanges like NSE and BSE. Includes features for fundamental analysis, analyst ratings, research-based tools, and expert-curated portfolios called Wealth Vaults.",
      tags: ["React", "Node.js", "Material UI", "Tailwind CSS", "Socket.io",],
      link: "https://bullforce.co/",
    },
    {
      title: "FXEQUITY",
      description: "FXEQUITY is a world class trading platform for people who want to trade and invest in stock markets. Providing round the clock assistance. Oﬀering experiences of diﬀerent trading platforms like CTrader and MT5.",
      tags: ["Next.js", "MongoDB", "NextAuth", "Prisma"],
      link: "#",
    },
    {
      title: "eGovernments",
      description: "eGovernments is a web-based application intended for citizens in the state, apply to the government for their new construction buildings to get the fire no objection certificate from the nearest fire station.",
      tags: ["React", "Redux", "JavaScript", "Material UI", "REST API Integration"],
      link: "#",
    },
  ]

  return (
    <section id="projects" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Featured Projects</h2>
          <p className="mt-4 text-muted-foreground">Showcasing my best work and technical expertise</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.link}
              className="group rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:border-accent hover:bg-card/50 hover:shadow-lg"
            >
              <h3 className="font-semibold text-foreground group-hover:text-accent transition-colors mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent transition-all duration-300 group-hover:bg-accent/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
