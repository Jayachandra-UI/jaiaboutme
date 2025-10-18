import Link from "next/link"

export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with product catalog, shopping cart, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description: "Collaborative task management tool with real-time updates and team collaboration features.",
      tags: ["React", "Express", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "Social Media Dashboard",
      description: "Analytics dashboard for managing multiple social media accounts with real-time metrics.",
      tags: ["Next.js", "TypeScript", "MongoDB", "Chart.js"],
      link: "#",
    },
    {
      title: "Weather Application",
      description: "Real-time weather app with location-based forecasts and interactive weather maps.",
      tags: ["React", "Node.js", "OpenWeather API", "Tailwind CSS"],
      link: "#",
    },
    {
      title: "Blog Platform",
      description: "Content management system with markdown support, user authentication, and comments.",
      tags: ["Next.js", "MongoDB", "NextAuth", "Prisma"],
      link: "#",
    },
    {
      title: "Chat Application",
      description: "Real-time messaging app with user authentication, group chats, and file sharing.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
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
