import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard',
}

const members = [
  { name: 'Full Name', role: 'Role' },
  { name: 'Full Name', role: 'Role' },
  { name: 'Full Name', role: 'Role' },
  { name: 'Full Name', role: 'Role' },
  { name: 'Full Name', role: 'Role' },
  { name: 'Full Name', role: 'Role' },
]

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberCard({ name, role }: { name: string; role: string }) {
  return (
    <div className="flex h-[181px] flex-col items-center justify-center gap-3 rounded-[10px] border-2 border-[#ced1d8] bg-[#f7f9fd] p-5 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#3d62b2] text-xl font-bold text-white">
        {initials(name)}
      </div>
      <div>
        <p className="text-base font-medium text-[#222]">{name}</p>
        <p className="text-sm text-[#1e1e1e]/60">{role}</p>
      </div>
    </div>
  )
}

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[36px] font-bold text-[#222]">Group 13</h1>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {members.map((member, index) => (
          <MemberCard key={index} name={member.name} role={member.role} />
        ))}
      </div>
    </div>
  )
}
