import { UserLogo } from "../icons/userLogo"

export const Header=()=>{
    return(
        <div className="relative w-full h-[773px]">
            <img className="w-full h-full object-cover" src="HeroImage.png" alt="Hero"/>
            <div className="absolute flex inset-0 top-8 left-[60px] right-[60px] justify-between ">
                <img className="w-[101px] h-[35px]" src="logo.png"/>
                <div className="flex gap-8">
                <p className="text-[18px] font-semibold">Home</p>
                <p className="text-[18px] font-semibold">About </p>
                <p className="text-[18px] font-semibold">Contact</p>   
                <p className="w-5 h-5">
                <UserLogo/>
                </p>
                </div>
                <button className="rounded-full w-10 h-10 bg-white flex justify-center items-center text-black font-semibold">EN</button>
       </div>
       <div className="absolute inset-0 flex items-center justify-center text-center">
  <div className="leading-none">
    <p className="text-[80px] text-white/70 tracking-widest drop-shadow-lg">
      PURE MAGIC
    </p>
    <p
      className="
        text-[250px]
        font-black
        tracking-tight
        text-transparent
       text-white
        drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]
      "
    >
      AWAITS!
    </p>
    <p className="text-[64px] font-bold text-white/80 drop-shadow-md">
      2024
    </p>
  </div>
</div>
        </div>
    )
}