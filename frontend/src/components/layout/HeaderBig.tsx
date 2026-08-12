import Link from 'next/link'

export function HeaderBig() {
  return (
    <header className="w-full bg-[#3d62b2] text-white ring-2 ring-[#244da3]">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center">
            <img src="/assets/logo_simple.png" alt="Logo" className="h-8 w-auto" />
          </Link>

          <nav className="flex items-center gap-6">
            <Link href="/dashboard" className="text-sm font-medium text-white hover:underline">
              Dashboard
            </Link>
            <Link href="#" className="text-sm font-medium text-white underline decoration-2 underline-offset-4">
              Team
            </Link>
          </nav>
        </div>

        <div className="flex items-center">
          <button
            type="button"
            className="rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-black shadow-sm hover:bg-yellow-500"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  )
}
