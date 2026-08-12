const logoImg = 'https://www.figma.com/api/mcp/asset/6029593e-2743-4332-8bae-a8d1444fa32b.png'

export function LoginHeader() {
  return (
    <div className="h-[60px] w-full rounded-t-[24px] bg-[#3d62b2] border-b-2 border-[#244da3] px-5 py-3 flex items-center">
      <div className="h-[30px] w-[70px]">
        <img src={logoImg} alt="App logo" className="h-full w-full object-contain" />
      </div>
    </div>
  )
}
