const partnerLogo3 = '/assets/RMIT.png'
const partnerLogo2 = '/assets/Telstra.png'
const partnerLogo1 = '/assets/logo_black.png'
const githubLogo = '/assets/github.png'

function LogoTile({ src, alt, link }: { src: string; alt: string; link: string }) {
    return (
        <div className="flex h-[120px] w-[120px] items-center justify-center rounded-[16px] border border-[#ced1d8] bg-white p-3 shadow-sm">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <img src={src} alt={alt} className="max-h-full max-w-full object-contain" />
            </a>
        </div>
    )
}

export function Footer() {
    return (
        <div className="w-full bg-[#3d62b2] px-6 py-10 text-white">
            <div className="mx-auto flex w-full max-w-[460px] flex-col items-center gap-6">
                <div className="flex justify-center gap-4">
                    <LogoTile src={partnerLogo2} alt="Partner logo 2" link="https://www.telstra.com.au/" />
                    <LogoTile src={partnerLogo3} alt="Partner logo 3" link="https://www.rmit.edu.au/" />
                </div>
                <div className="flex justify-center">
                    <LogoTile src={partnerLogo1} alt="Partner logo 1" link=""/>
                </div>
            </div>

            <div className="mt-8 text-center">
                <p className="text-[32px] font-bold leading-tight">RMIT Capstone Project 2026</p>
                <p className="mt-3 text-sm leading-6 text-white/80">Telstra — AI Workloads & Agentic Systems in muru-D</p>
                <p className="text-sm leading-6 text-white/80">Group 13</p>
            </div>

            <div className="mt-8 flex justify-center">
                <a
                    href="https://github.com/emeralddd/capstone-boilerplate"
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#ffdd4a] transition hover:bg-[#f7d50a]"
                >
                    <img src={githubLogo} alt="GitHub icon" className="h-6 w-6 object-contain" />
                </a>
            </div>
        </div>
    )
}
