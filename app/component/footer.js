import { RigthIcon } from "../icons/rigthIcon"

export const Footer=()=>{
    return(
        <div className="w-full h-[1120px] relative">
            <img className="w-full h-full" src="footer.png"/>
            <div className="flex justify-start items-center text-center absolute inset-0 flex-col mt-10 gap-2.5">
                <p className="text-[42px] font-semibold text-black">Pricing of Our Agency</p>
                <p className="text-[20px] font-normal text-[#18181b]">Choose a package that’s right for you</p>
            </div>
            <div className="flex gap-6 absolute inset-0 justify-center items-center">
               
                <button className="w-[384px] h-[650px] bg-white rounded-3xl flex flex-col items-start justify-start p-8 gap-3">
                    <p className="flex gap-3 items-center">
                    <img className="w-9 h-9" src="heart.png"/>
                    <span className="text-black">Budget package</span>
                    </p>
                    <div className="flex flex-col justify-start items-start mt-3">
                    <p className="text-[40px] font-semibold text-black">500$</p>
                    <p className="text-[16px] font-medium text-[#919191]">Essentials Covered </p>
                    </div> 
                    <div className="flex flex-col gap-4 w-full mt-5">
  <p className="text-[18px] font-medium text-black">Includes:</p>
  {[
    "Group transportation (shared van/bus)",
    "Standard accommodation (yurt or guesthouse)",
    "Guided lake tour",
    "1 meal per day (breakfast)",
  ].map((t) => (
    <div key={t} className="flex items-start gap-4 w-full">
      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
        <RigthIcon />
      </div>
      <p className="flex-1 text-[16px] font-medium text-[#3f3f46] leading-snug">
        {t}
      </p>
    </div>
  ))}
</div>
<div className="mb-10">
               <button className="rounded-3xl h-12 flex justify-center items-center bg-[#a4d1e2] w-[336px] text-black mt-9 text-[16px] font-semibold">Select package</button>
               </div>
                </button>
                <button className="w-[384px] h-[650px] bg-white rounded-3xl flex flex-col items-start justify-start p-8 gap-3">
                    <p className="flex gap-3 items-center">
                    <img className="w-9 h-9" src="heart.png"/>
                    <span className="text-black">Standard package</span>
                    </p>
                    <div className="flex flex-col justify-start items-start mt-3 ">
                    <p className="text-[40px] font-semibold text-black">800$</p>
                    <div className="flex justify-between w-[336px]" >
                    <p className="text-[16px] font-medium text-[#919191]">Balanced adventure </p>
                    <button className="w-[91px] h-[27px] rounded-3xl flex justify-center items-center bg-[#6972b5] ">Popular</button>
                    </div>
                    </div> 
                    <div className="flex flex-col gap-4 w-full mt-5">
  <p className="text-[18px] font-medium text-black">Includes:</p>

  {[
    "Comfortable transportation (mini-bus)",
    "Mid-range accommodation (private yurt or lodge)",
    "Guided lake tour + nearby hiking",
    "2 meals per day (breakfast and dinner)",
  ].map((t) => (
    <div key={t} className="flex items-start gap-4 w-full">
      <div className="w-6 h-6 shrink-0 flex items-center justify-center">
        <RigthIcon />
      </div>
      <p className="flex-1 text-[16px] font-medium text-[#3f3f46] leading-snug">
        {t}
      </p>
    </div>
  ))}
</div>

               <button className="rounded-3xl h-12 flex justify-center items-center bg-[#a4d1e2] w-[336px] text-black mt-9 text-[16px] font-semibold">Select package</button>
                </button>
                <button className="w-[384px] h-[650px] bg-white rounded-3xl flex flex-col items-start justify-start p-8 gap-3">
                    <p className="flex gap-3 items-center">
                    <img className="w-9 h-9" src="heart.png"/>
                    <span className="text-black">Luxury package</span>
                    </p>
                    <div className="flex flex-col justify-start items-start mt-3">
                    <p className="text-[40px] font-semibold text-black">1200$</p>
                    <p className="text-[16px] font-medium text-[#919191]">Ultimate Comfort </p>
                    </div> 
                    <div className="flex flex-col gap-2 w-full mt-5">
  <p className="text-[18px] font-semibold text-black">Includes:</p>

  <div className="flex items-start gap-6">
    <div className="w-6 h-6 flex items-center justify-center shrink-0">
      <RigthIcon />
    </div>
    <p className="text-[20px] font-normal text-[#3f3f46] leading-relaxed">
      Private transportation (SUV)
    </p>
  </div>

  <div className="flex items-start gap-6">
    <div className="w-6 h-6 flex items-center justify-center shrink-0">
      <RigthIcon />
    </div>
    <p className="text-[20px] font-normal text-[#3f3f46] leading-relaxed">
      Luxury accommodation (lakefront lodge)
    </p>
  </div>

  <div className="flex items-start gap-6">
    <div className="w-6 h-6 flex items-center justify-center shrink-0">
      <RigthIcon />
    </div>
    <p className="text-[20px] font-normal text-[#3f3f46] leading-relaxed">
      Guided tours (lake + reindeer herder experience)
    </p>
  </div>

  <div className="flex items-start gap-6">
    <div className="w-6 h-6 flex items-center justify-center shrink-0">
      <RigthIcon />
    </div>
    <p className="text-[20px] font-normal text-[#3f3f46] leading-relaxed">
      All meals included (local cuisine)
    </p>
  </div>
</div>

               <button className="rounded-3xl h-12 flex justify-center items-center bg-[#a4d1e2] w-[336px] text-black mt-9 text-[16px] font-semibold">Select package</button>
                </button>
                
            </div>
            <div className="absolute inset-0 flex items-end justify-around  mb-10">
<div className="flex gap-5 ">
    <button className="w-[167px] h-11 rounded-3xl flex justify-center items-center bg-white text-[#6972b5] font-bold text-[18px] gap-3">
        <img className="w-6 h-6" src="facebook.png"/>
        Facebook</button>
    <button className="w-[167px] h-11 rounded-3xl flex justify-center items-center bg-white text-[#6972b5] font-bold text-[18px] gap-3">
        <img className="w-6 h-6" src="ig.png"/>
        Instagram</button>
</div>
<div className="w-[101px] h-[35px] ">
    <img className="w-full h-full" src="logo.png"/>
</div>
            </div>
        </div>
    )
}