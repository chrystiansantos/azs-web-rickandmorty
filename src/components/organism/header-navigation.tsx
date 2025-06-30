import { Link } from "../atoms";

export function HeaderNavigation() {
  return (
    <header className="w-full pt-8">
      <nav>
        <ul className="list-none flex justify-center gap-4 md:gap-10 md:justify-start">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/favorites">Favoritos</Link></li>
          <li><Link href="/watches">Assistidos</Link></li>
        </ul>
      </nav>
    </header>
  )
}