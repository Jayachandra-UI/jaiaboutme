export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">© {currentYear} MERN Stack Developer. All rights reserved.</p>
          <p className="text-sm text-muted-foreground">Crafted with passion and modern web technologies</p>
        </div>
      </div>
    </footer>
  )
}
