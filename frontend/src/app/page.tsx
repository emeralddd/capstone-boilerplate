import type { Metadata } from 'next'
import Link from 'next/link'
import { Footer } from '@/components/layout/Footer'
import { HeaderBigLoggedOut } from '@/components/layout/HeaderBigLoggedOut'
import { getServerSession } from '@/actions/auth.actions'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'AI Workloads & Agentic Systems in muru-D',
  description: 'Welcome to the app',
}

export default async function LandingPage() {
  const session = await getServerSession()
    if (session) redirect('/dashboard')
  
  return (
    <main className="flex min-h-screen flex-col justify-between bg-white font-fira-sans">
      <HeaderBigLoggedOut />
      <div className="flex flex-col items-center justify-center gap-8 py-12">
        <div className="space-y-4 px-8 text-center">
          <h1 className="text-4xl mx-auto font-bold tracking-tight text-zinc-900">
            {process.env.NEXT_PUBLIC_APP_NAME ?? 'App'}
          </h1>
          <p className="max-w-md mx-auto text-lg text-zinc-600">
            Login to view my dashboard.
          </p>
        </div>

        <div className="flex gap-4">
          <Link
            href="/auth/signin"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#ffdd4a] px-6 text-base font-normal text-[#222] transition-colors hover:bg-[#f7d50a]"
          >
            Sign in
          </Link>
          <Link
            href="/auth/signup"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#ffdd4a] px-6 text-base font-normal text-[#222] transition-colors hover:bg-[#f7d50a]"
          >
            Create account
          </Link>
        </div>
      </div>

      <Footer />
    </main>
  )
}