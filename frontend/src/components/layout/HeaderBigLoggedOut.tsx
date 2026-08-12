import Link from 'next/link'

export function HeaderBigLoggedOut() {
  return (
    <header className="w-full border-b-2 border-[#244da3] bg-[#3d62b2] font-fira-sans text-white">
      <div className="mx-auto flex h-15 max-w-300 items-center px-5">
        <Link href="/" className="flex items-center">
          <img src="/assets/logo_simple.png" alt="Logo" className="h-7.5 w-auto object-contain" />
        </Link>
      </div>
    </header>
  )
}
