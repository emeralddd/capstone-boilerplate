import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}


export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[36px] font-bold text-[#222]">Group 13 Dashboard</h1>
    </div>
  )
}
