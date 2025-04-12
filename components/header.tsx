"use client" // Required for hooks

import Link from "next/link"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/about", label: "About" },
    // { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-xl">Journey</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            pathname === `${link.href}/` ||
            (link.href !== "/" && pathname.startsWith(`${link.href}/`))

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium hover:underline underline-offset-4 ${
                isActive ? "text-primary underline" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          )
        })}
      </nav>
    </header>
  )
}