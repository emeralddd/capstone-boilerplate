import Link from 'next/link'

const navLinkClasses =
  'flex h-10 items-center justify-center rounded-full px-3.5 text-base font-normal text-[#f7f9fd] transition-colors hover:bg-[#244da3]'

export function HeaderBig() {
  return (
    <header className="w-full border-b-2 border-[#244da3] bg-[#3d62b2] text-white">
      <div className="mx-auto flex h-15 max-w-300 items-center justify-between px-5">
        <div className="flex items-center gap-5">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo_simple.png" alt="Logo" className="h-7.5 w-auto object-contain" />
          </Link>

          <nav className="flex items-center gap-2.5">
            <Link href="/dashboard" className={navLinkClasses}>
              Dashboard
            </Link>
            <Link
              href="#"
              className={`${navLinkClasses} underline decoration-[9%] [text-underline-position:from-font]`}
            >
              Team
            </Link>
          </nav>
        </div>

        <button
          type="button"
          className="flex h-10 items-center justify-center rounded-full border-2 border-transparent bg-[#ffdd4a] px-3.5 text-base font-normal text-[#222] transition-colors hover:border-[#222]"
        >
          Logout
        </button>
      </div>
    </header>
  )
}
