export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "Tailwind CSS", "Next js", "Redux", "HTML/CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Authentication", "Middleware"],
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "AWS", "Vercel", "Postman", "VS Code"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Communication", "Team Collaboration", "Project Management"],
    },
  ]

  return (
    <section id="skills" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills & Expertise</h2>
          <p className="mt-4 text-muted-foreground">Technologies and tools I work with</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-accent"
            >
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills.map((skill) => (
                  <li key={skill} className="text-sm text-muted-foreground flex items-center">
                    <span className="mr-2 h-1.5 w-1.5 rounded-full bg-accent"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
