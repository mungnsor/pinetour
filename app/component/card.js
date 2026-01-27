export const Card = () => {
    return (
      <div className="w-full h-[512px] relative">
        <img
          src="card.png"
          className="w-full h-full object-cover"
        />
  
        <div className="absolute inset-0 flex justify-center items-center gap-14">
          <CardItem
            img="lake.png"
            title="TERKHIIN TSAGAAN LAKE"
          />
  
          <CardItem
            img="hiid.png"
            title="AMARBAYASGALANT MONASTERY"
          />
  
          <CardItem
            img="huvsgul.png"
            title="KHUVSGUL LAKE"
          />
  
          <CardItem
            img="horgiintogoo.png"
            title="KHORGIIN TOGOO"
          />
        </div>
      </div>
    );
  };
  
  const CardItem = ({ img, title }) => {
    return (
      <div
        className="group relative w-[280px] h-[370px]
                   rounded-[56px] overflow-hidden
                   ring-[10px] ring-[#9fc3d8]
                   transition-all duration-300 ease-out
                   cursor-pointer"
      >
        <img
          src={img}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover
                     transition-opacity duration-300
                     group-hover:opacity-95"
        />
  
        <div
          className="absolute inset-0 bg-black/25
                     transition-all duration-300
                     group-hover:bg-black/45"
        />
  
        <div className="absolute inset-0 flex items-center justify-center px-8">
          <p
            className="text-white text-center font-bold uppercase
                       tracking-widest text-[36px] leading-tight
                       drop-shadow-[0_4px_10px_rgba(0,0,0,0.45)]
                       transition-all duration-300
                       group-hover:drop-shadow-[0_8px_18px_rgba(0,0,0,0.65)]"
          >
            {title}
          </p>
        </div>
      </div>
    );
  };
  