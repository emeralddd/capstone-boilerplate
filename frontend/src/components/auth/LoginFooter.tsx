const partnerLogo1 = 'https://www.figma.com/api/mcp/asset/63caadb7-2be9-49b9-8e12-d6f7d00d6e96.png'
const partnerLogo2 = 'https://www.figma.com/api/mcp/asset/6f886638-a0b9-4216-859a-e39e2a7dad5d.png'
const partnerLogo3 = 'https://www.figma.com/api/mcp/asset/a7a22c96-fb0c-4db4-8281-54c2c91df5c0.png'
const githubLogo = 'https://www.figma.com/api/mcp/asset/3eb9a31b-4c74-4130-8b62-8c98b9aa2431.png'

function LogoTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[16px] border border-[#ced1d8] bg-white p-3 shadow-sm">
      <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
    </div>
  )
}

export function LoginFooter() {
  return (
    <div className="rounded-[24px] border border-[#ced1d8] bg-[#3d62b2] px-6 py-8 text-white shadow-sm">
      <div className="mx-auto flex w-full max-w-[400px] flex-wrap items-center justify-center gap-4">
        <LogoTile src={partnerLogo1} alt="Partner logo 1" />
        <LogoTile src={partnerLogo2} alt="Partner logo 2" />
        <LogoTile src={partnerLogo3} alt="Partner logo 3" />
      </div>

      <div className="mt-8 text-center">
        <p className="text-[32px] font-bold leading-tight">RMIT Capstone Project 2026</p>
        <p className="mt-3 text-sm leading-6 text-white/80">Telstra — AI Workloads & Agentic Systems in muru-D</p>
        <p className="text-sm leading-6 text-white/80">Group 13</p>
      </div>

      <div className="mt-8 flex justify-center">
        <div className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-white">
          <img src={githubLogo} alt="GitHub icon" className="h-6 w-6 object-contain" />
        </div>
      </div>
    </div>
  )
}
