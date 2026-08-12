const partnerLogo3 = '/assets/RMIT.png'
const partnerLogo2 = '/assets/Telstra.png'
const partnerLogo1 = '/assets/logo_black.png'
const githubLogo = '/assets/github.png'

function LogoTile({ src, alt, link }: { src: string; alt: string; link: string }) {
    return (
        <div className="flex h-[152px] w-[152px] items-center justify-center rounded-[10px] border-2 border-[#ced1d8] bg-[#f7f9fd] p-2.5">
            <a
                href={link}
                target="_blank"
                rel="noreferrer"
            >
                <img src={src} alt={alt} className="size-32 rounded-[10px] object-contain" />
            </a>
        </div>
    )
}

export function Footer() {
    return (
        <div className="w-full border-t-2 border-[#244da3] bg-[#3d62b2] px-5 pt-15 pb-10 text-white">
            <div className="mx-auto flex w-full max-w-300 flex-col items-center gap-10">
                <div className="flex w-full max-w-85 flex-wrap items-center justify-center gap-5">
                    <LogoTile src={partnerLogo2} alt="Partner logo 2" link="https://www.telstra.com.au/" />
                    <LogoTile src={partnerLogo3} alt="Partner logo 3" link="https://www.rmit.edu.au/" />
                    <LogoTile src={partnerLogo1} alt="Partner logo 1" link="" />
                </div>

                <div className="flex flex-col items-center gap-5">
                    <div className="flex flex-col items-center gap-2.5 text-center">
                        <p className="text-[36px] font-bold leading-tight">RMIT Capstone Project 2026</p>
                        <div className="text-base leading-normal text-white/80">
                            <p>Telstra — AI Workloads & Agentic Systems in muru-D</p>
                            <p>Group 13</p>
                        </div>
                    </div>

                    <a
                        href="https://github.com/emeralddd/capstone-boilerplate"
                        target="_blank"
                        rel="noreferrer"
                        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdd4a] transition hover:bg-[#f7d50a]"
                    >
                        <img src={githubLogo} alt="GitHub icon" className="h-6 w-6 object-contain" />
                    </a>
                </div>
            </div>
        </div>
    )
}
