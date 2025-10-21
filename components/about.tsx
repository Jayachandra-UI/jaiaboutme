export default function About() {
  const cards = [
    {
      title: "Experience",
      description: "6+ years of professional development experience",
    },
    {
      title: "Focus Areas",
      description: "Full-stack development, API design, database optimization, and responsive UI",
    },
    {
      title: "Approach",
      description: "Clean code, scalable architecture, and user-centric design principles",
    },
  ]

  return (
    <section id="about" className="border-t border-border px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a passionate full-stack developer with expertise in building end-to-end web applications. With a
                strong foundation in both frontend and backend technologies, I create seamless user experiences backed
                by robust server-side logic.
              </p>
              <p>
                My journey in web development started with a curiosity about how things work on the internet. Over the
                years, I've honed my skills in the MERN stack, allowing me to build complete applications from database
                design to user interface.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects,
                or sharing knowledge with the developer community.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {cards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-accent"
              >
                <h3 className="font-semibold text-foreground mb-3">{card.title}</h3>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
