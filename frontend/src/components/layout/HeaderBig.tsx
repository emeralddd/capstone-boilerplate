'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { useAuth } from '@/hooks/useAuth'

const navLinkClasses =
  'flex h-10 items-center justify-center rounded-full px-3.5 text-base font-normal text-[#f7f9fd] transition-colors hover:bg-[#244da3]'

const mobileNavLinkClasses =
  'flex h-10.5 w-full items-center px-3.5 text-base font-normal text-[#f7f9fd] transition-colors hover:bg-[#244da3]'

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/profile', label: 'Profile' },
  { href: '/settings', label: 'Settings' },
  { href: '/notes', label: 'Notes' },
  { href: '/team', label: 'Team' },
]

export function HeaderBig() {
  const pathname = usePathname()
  const router = useRouter()
  const { signOut } = useAuth()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleSignOut = async () => {
    await signOut()
    router.replace('/auth/signin')
    router.refresh()
  }

  return (
    <header className="w-full border-b-2 border-[#244da3] bg-[#3d62b2] font-fira-sans text-white">
      <div className="mx-auto flex h-15 max-w-300 items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo_simple.png" alt="Logo" className="h-7.5 w-auto object-contain" />
          </Link>

          <nav className="hidden items-center gap-2.5 lg:flex">
            {navItems.map(({ href, label }) => {
              const isActive = pathname === href
              return (
                <Link
                  key={href}
                  href={href}
                  className={
                    isActive
                      ? `${navLinkClasses} underline decoration-[9%] [text-underline-position:from-font]`
                      : navLinkClasses
                  }
                >
                  {label}
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex size-10 items-center justify-center rounded-full transition-colors hover:bg-[#244da3] lg:hidden"
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>

          <button
            type="button"
            onClick={handleSignOut}
            className="flex h-10 items-center justify-center rounded-full border-2 border-transparent bg-[#ffdd4a] px-3.5 text-base font-normal text-[#222] transition-colors hover:border-[#222]"
          >
            Logout
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col border-t-2 border-[#244da3] px-5 py-2 lg:hidden">
          {navItems.map(({ href, label }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive
                    ? `${mobileNavLinkClasses} underline decoration-[9%] [text-underline-position:from-font]`
                    : mobileNavLinkClasses
                }
              >
                {label}
              </Link>
            )
          })}
        </nav>
      )}
    </header>
  )
}
