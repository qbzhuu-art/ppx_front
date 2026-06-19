import Image from "next/image"

export function PostHeader() {
  return (
    <div className="flex items-center gap-3 px-4 pt-3 pb-1">
      <Image
        src="/images/avatar-blogger.png"
        alt="银发健康日记头像"
        width={40}
        height={40}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div className="flex flex-col">
        <span className="text-[15px] font-semibold text-foreground">银发健康日记</span>
        <span className="text-xs text-muted-foreground">5月18日 10:23</span>
      </div>
    </div>
  )
}
