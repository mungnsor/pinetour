import { RigthIcon } from "../icons/rigthIcon"
const packages = [
  {
    title: "Budget package",
    price: "500$",
    subtitle: "Essentials Covered",
    icon: "heart.png",
    features: [
      "Group transportation (shared van/bus)",
      "Standard accommodation (yurt or guesthouse)",
      "Guided lake tour",
      "1 meal per day (breakfast)",
    ],
  },
  {
    title: "Standard package",
    price: "800$",
    subtitle: "Balanced adventure",
    badge: "Popular",
    icon: "heart.png",
    features: [
      "Comfortable transportation (mini-bus)",
      "Mid-range accommodation (private yurt or lodge)",
      "Guided lake tour + nearby hiking",
      "2 meals per day (breakfast and dinner)",
    ],
  },
  {
    title: "Luxury package",
    price: "1200$",
    subtitle: "Ultimate Comfort",
    icon: "heart.png",
    features: [
      "Private transportation (SUV)",
      "Luxury accommodation (lakefront lodge)",
      "Guided tours (lake + reindeer herder experience)",
      "All meals included (local cuisine)",
    ],
  },
]

export const Footer = () => {
  return (
    <div className="w-full h-[1120px] relative">
      <img className="w-full h-full" src="footer.png" />

      {/* Title */}
      <div className="absolute inset-0 flex flex-col items-center mt-10 gap-2.5">
        <p className="text-[42px] font-semibold text-black">
          Pricing of Our Agency
        </p>
        <p className="text-[20px] text-[#18181b]">
          Choose a package that’s right for you
        </p>
      </div>

      {/* Cards */}
      <div className="absolute inset-0 flex justify-center items-center gap-6">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="w-[384px] h-[527px] bg-white rounded-3xl
                       flex flex-col items-start p-8 gap-3"
          >
            {/* Header */}
            <div className="flex gap-3 items-center">
              <img className="w-9 h-9" src={pkg.icon} />
              <span className="text-black font-medium">{pkg.title}</span>
            </div>

            {/* Price */}
            <div className="mt-3">
              <p className="text-[40px] font-semibold text-black">
                {pkg.price}
              </p>

              <div className="flex items-center justify-between w-[336px]">
                <p className="text-[16px] text-[#919191]">{pkg.subtitle}</p>
                {pkg.badge && (
                  <span className="px-3 py-1 text-sm rounded-full bg-[#6972b5] text-white">
                    {pkg.badge}
                  </span>
                )}
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3 mt-5 w-full">
              <p className="ml-10 text-[18px] font-semibold text-black">
                Includes:
              </p>

              {pkg.features.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 shrink-0 mt-1 flex justify-center">
                    <RigthIcon />
                  </div>
                  <p className="text-[16px] text-[#3f3f46]">{item}</p>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className="mt-auto w-[336px] h-12 rounded-3xl
                         bg-[#a4d1e2] text-black font-semibold
                         transition hover:bg-black hover:text-white"
            >
              Select package
            </button>
          </div>
        ))}
      </div>

      {/* Social */}
      <div className="absolute inset-0 flex items-end justify-around mb-10">
        <div className="flex gap-5">
          <button className="w-[167px] h-11 rounded-3xl bg-white
                             text-[#6972b5] font-bold flex gap-3 items-center justify-center">
            <img className="w-6 h-6" src="facebook.png" />
            Facebook
          </button>

          <button className="w-[167px] h-11 rounded-3xl bg-white
                             text-[#6972b5] font-bold flex gap-3 items-center justify-center">
            <img className="w-6 h-6" src="ig.png" />
            Instagram
          </button>
        </div>

        <img className="w-[101px] h-[35px]" src="logo.png" />
      </div>
    </div>
  )
}
