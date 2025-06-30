import { Link } from "../atoms";

export function HeaderNavigation() {
  return (
    <header className="w-full pt-8">
      <nav>
        <ul className="list-none flex justify-center gap-4 md:gap-10 md:justify-start">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/episodes">Episódios</Link></li>
          <li><Link href="/characters">Favoritos</Link></li>
          <li><Link href="/location">Assistidos</Link></li>
        </ul>
      </nav>
    </header>
  )
}