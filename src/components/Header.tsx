import Link from 'next/link'
import { Cpu } from 'lucide-react'
import { ThemeToggle } from './ThemeToggle'

interface HeaderProps {
  onOpenPanel: () => void;
}

export default function Header({ onOpenPanel }: HeaderProps) {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="#">
        <Cpu className="h-6 w-6 mr-2" />
        <span className="font-bold">Bitaxe Web Flasher</span>
      </Link>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
          Features
        </Link>
        <button
          className="text-sm font-medium hover:underline underline-offset-4"
          onClick={onOpenPanel}
        >
          Get Started
        </button>
        <ThemeToggle />
      </nav>
    </header>
  )
}