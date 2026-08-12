import { redirect } from 'next/navigation'
import { getServerSession } from '@/actions/auth.actions'
import { Footer } from '@/components/layout/Footer'
import { HeaderBig } from '@/components/layout/HeaderBig'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession()
  if (!session) redirect('/auth/signin')

  return (
    <main className="flex min-h-screen flex-col justify-between bg-white font-fira-sans">
      <HeaderBig />
      <div className="mx-auto w-full max-w-300 flex-1 px-5 py-12">{children}</div>
      <Footer />
    </main>
  )
}
