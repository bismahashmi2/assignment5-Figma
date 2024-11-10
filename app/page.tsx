import React from "react";
import Header from "./components/Header";
import Image from "next/image";

const Home = () => {
  return (
    <div className="h-screen">
      <Header />

      <div className="flex h-[80%]">

        <div className="w-1/2 flex flex-col justify-center items-start ml-[170px] mt-[198px]">

        <h1 className="font-bold w-[496px] h-[189px] mt-[316px] text-[40px]">IMPECCABLE CRAFTSMANSHIP AND FINESSE</h1>

        <p className="text-[#A29875] max-w-[902px] text-[20px]">
        An example of intricate workmanship and detail, elegant necklaces
            and long and short chains form a part of our desirable collection.
          </p>

          <button className="bg-[#A29875] text-white text-[18px] w-Fixed-[288px] mt-[110px] p-[10px] rounded-lg border-radius-[10px]">
            Explore Now
          </button>

          </div>

          <div className="max-w-[462px] mt-[198px] ml-[106px] h-[647px]">
   
          <Image
           src={"/img.jpg"}
           alt="img"
           width={462}
           height={647} 
           />
        </div>
      </div>
  </div>
  );
};

export default Home;
