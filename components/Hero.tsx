import Image from "next/image";
import React from "react";
import hero from "../public/img/hero1.jpg";

type Props = {};

const Hero = (props: Props) => {
  return (
    <main className="flex lg:flex-row flex-col p-5 lg:p-0 w-full justify-start gap-3 h-screen mt-0 lg:-mt-20 items-center">
      <div className="flex flex-col w-full mt-5 lg:mt-0 lg:w-4/12 gap-6 ">
        <h1 className="text-[60px] leading-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#1D407D] to-[#37B7BD] font-bold lg:text-[80px] uppercase lg:leading-[50px]">
          Mandiri{" "}
          <span className="text-black text-[40px] ml-1 font-medium">
            Orion Raya
          </span>
        </h1>
        <div className="bg-[#002F7E] w-4/12 py-[2px]"></div>
        <p>
          PT MANDIRI ORION RAYA (MOR) bergerak dalam bidang pengelolaan kapal
          dengan fokus pada pemeliharaan, perbaikan kapal, pengadaan barang dan
          jasa, yang bermitra dengan beberapa galangan yang tersebar di
          Indonesia
        </p>
        <button className="w-5/12 text-white font-medium rounded-xl py-2 bg-gradient-to-r from-[#1D407D] to-cyan-500">
          Tentang Kami
        </button>
      </div>
      <div className="lg:w-8/12 w-full">
        <Image src={hero} alt="hero"></Image>
      </div>
    </main>
  );
};

export default Hero;
