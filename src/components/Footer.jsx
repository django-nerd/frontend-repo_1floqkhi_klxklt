export default function Footer() {
  return (
    <footer className="py-10 border-t border-white/10 mt-10">
      <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-400">
        <div>© {new Date().getFullYear()} Reiikuzoo. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-white">Dribbble</a>
          <a href="#" className="hover:text-white">Behance</a>
          <a href="#" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
