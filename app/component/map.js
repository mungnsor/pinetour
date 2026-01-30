"use client"

import { useState } from "react"

const DAYS = [
    {
        id: "day1",
        day: "DAY 1",
        title: "Sukhbaatar square",
        location: "Ulaanbaatar",
        bg: "bg-[#eee9d9]",
        mapImage: "talbai.png",
      },
  {
    id: "day2",
    day: "DAY 2",
    title: "Amarbaysgalant monastery",
    location: "Bulgan",
    bg: "bg-[#8bb8c1]",
    mapImage: "hiid2.png",
  },
  {
    id: "day3",
    day: "DAY 3",
    title: "Khorgiin togoo",
    location: "Arkhangai",
    bg: "bg-[#aad8d7]",
    mapImage: "togoo.png",
  },
  {
    id: "day4",
    day: "DAY 4",
    title: "Terkhiin tsagaan lake",
    location: "Arkhangai",
    bg: "bg-[#8bc0bd]",
    mapImage: "terh.png",
  },
  {
    id: "day5",
    day: "DAY 5",
    title: "Khuvsgul lake",
    location: "Khuvsgul",
    bg: "bg-[#97cce0]",
    mapImage: "huv.png",
  },
]

export const Map = () => {
  const [activeId, setActiveId] = useState("day1")
  const activeDay = DAYS.find(d => d.id === activeId)

  const goTo = (id) => {
    setActiveId(id)
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="w-full h-[1022px] relative overflow-hidden">
      {/* Background map */}
      <img
        src="map.png"
        alt="Map"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Title */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center">
        <p className="text-[42px] font-semibold text-black">
          Destination of Our Agency
        </p>
        <p className="text-[20px] text-[#18181b]">Pack your bags and get ready</p>
      </div>

      {/* Content row */}
      <div
        className="absolute top-[180px] left-1/2 -translate-x-1/2
                   flex items-start gap-24 w-[1200px]"
      >
        {/* Left list */}
        <div className="flex flex-col gap-4 w-[520px]">
          {DAYS.map((item) => {
            const active = activeId === item.id
            return (
              <div
                key={item.id}
                onClick={() => goTo(item.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && goTo(item.id)}
                className={`
                  w-full h-[112px] rounded-full flex items-center px-6 cursor-pointer
                  ${item.bg}
                  transition-all duration-200
                  ${active ? "ring-4 ring-black/20 scale-[1.01]" : "hover:scale-[1.01]"}
                `}
              >
                <div className="flex justify-between w-full items-center">
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-[24px] text-black">
                      {item.title}
                    </p>
                    <p className="flex gap-2 items-center text-black/70">
                      <img className="w-[14px] h-[14px]" src="key.png" alt="" />
                      {item.location}
                    </p>
                  </div>

                  <span
                    className={`
                      bg-white rounded-full flex justify-center items-center
                      w-[52px] h-[52px] font-semibold text-sm text-black
                      ${active ? "ring-2 ring-black/15" : ""}
                    `}
                  >
                    {item.day}
                  </span>
                </div>
              </div>
            )
          })}
        </div>

       
        <div className="flex flex-col items-center gap-3">
  <div
    className="relative w-[240px] h-[240px]
               rounded-full overflow-hidden
               ring-4 ring-black/10"
  >
    <img
      src={activeDay.mapImage}
      alt="Map"
      className="w-full h-full object-cover
                 transition-opacity duration-300"
    />
  </div>

  <p className="text-[18px] font-semibold text-[#6972b5]">
    Mongolia
  </p>
</div>

      </div>
    </section>
  )
}
