import type { Metadata } from 'next'
import { Footer } from '@/components/layout/Footer'
import { HeaderBigLoggedOut } from '@/components/layout/HeaderBigLoggedOut'

export const metadata: Metadata = {
  title: 'Authentication',
}

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white">
      <HeaderBigLoggedOut />
      <div className="flex flex-1 items-center justify-center px-5 py-12">
        <div className="w-full max-w-182">{children}</div>
      </div>
      <Footer />
    </main>
  )
}
