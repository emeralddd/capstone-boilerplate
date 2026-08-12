import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team',
}

const members = [
  {
    name: 'Khac Tung Lam Nguyen',
    role: 'Project Manager',
    bio: 'My name is Khac Tung Lam Nguyen (as in the post), and you can call me Lam. I’m PM.',
    avatarClass: 'bg-[#d8d6e7] text-[#1a1d2d]',
  },
  {
    name: 'Hiep Vu',
    role: 'Business Analyst',
    bio: 'Hi, im Hiep Vu and my role in this project is Business Analyst.',
    avatarClass: 'bg-[#e9d0d8] text-[#20314a]',
  },
  {
    name: 'Marcell Joe Sugianto',
    role: 'UX/UI Designer',
    bio: "Hey, my name is Marcell. I've been allotted the UX role for this capstone project. I'm looking forward to working with all of you guys!",
    avatarClass: 'bg-[#eadfb2] text-[#2c2b2c]',
  },
  {
    name: 'Kieran Chau',
    role: 'Developer',
    bio: "Hello, I'm Kieran Chau and I'm one of the devs. Super excited to work on this project with you all!",
    avatarClass: 'bg-[#f2d6ce] text-[#1f2a40]',
  },
  {
    name: 'Rhys Carrol',
    role: 'Developer',
    bio: "I'm Rhys Carroll, you can just call me Rhys, I'm one of the Developers. I have full intentions of seeing this course through to the end, will be nice meeting everyone else.",
    avatarClass: 'bg-[#dfe7f1] text-[#1e2f53]',
  },
] as const

function initials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function MemberCard({
  name,
  role,
  bio,
  avatarClass,
}: {
  name: string
  role: string
  bio: string
  avatarClass: string
}) {
  return (
    <article className="flex min-h-[220px] flex-col rounded-[18px] border border-[#d3d7df] bg-[#f7f9fc] p-4 shadow-[0_1px_0_rgba(30,41,59,0.04)] md:p-5">
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold md:h-14 md:w-14 ${avatarClass}`}
        >
          {initials(name)}
        </div>

        <div className="min-w-0 flex-1">
          <p className="truncate text-[1.1rem] font-semibold tracking-[-0.03em] text-[#1a1f2b] md:text-[1.5rem]">
            {name}
          </p>
          <p className="mt-0.5 text-sm text-[#595f6d] md:text-base">{role}</p>
        </div>
      </div>

      <p className="text-sm leading-6 text-[#1d2330] md:text-[1rem] md:leading-7">{bio}</p>
    </article>
  )
}


export default function TeamPage() {
  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-[36px] font-bold text-[#222]">Group 13</h1>

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {members.map((member) => (
              <MemberCard
                key={member.name}
                name={member.name}
                role={member.role}
                bio={member.bio}
                avatarClass={member.avatarClass}
              />
            ))}
      </div>
    </div>
  )
}
