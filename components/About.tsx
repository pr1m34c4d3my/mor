import Image from "next/image";
import React from "react";
import about from "../public/img/about.png";

type Props = {};

const About = (props: Props) => {
  return (
    <section className="flex lg:flex-row flex-col w-full p-6 lg:p-0 justify-between mt-10">
      <div className="lg:w-6/12 w-full rounded-xl">
        <Image
          className="w-[550px] rounded-xl object-cover overflow-hidden"
          src={about}
          alt="about"
        ></Image>
      </div>
      <div className="flex flex-col w-full lg:w-6/12 gap-6">
        <div className="mt-5 lg:mt-0">
          <h2 className="lg:text-[40px] text-[20px] uppercase font-bold">
            Hubungi Kami
          </h2>
          <h1 className="lg:text-[80px] text-[60px] leading-[60px] lg:leading-none lg:-mt-1 uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#1D407D] to-[#37B7BD]">
            Satukan Visi
          </h1>
        </div>
        <div className="bg-[#002F7E] w-4/12 py-[2px]"></div>
        <p>
          Untuk terus memberikan standar layanan yang tinggi melalui penggunaan
          sumber daya yang efisien, integritas dalam bekerja dengan harga yang
          dapat dipertanggungjawabkan yang dapat mengurangi biaya perawatan yang
          tinggi kepada semua pengguna akhir dengan bermitra dengan perusahaan
          galangan kapal yang tepercaya dan andal dengan menggunakan metode
          terbaik dan mengembangkan alat inovasi tindakan pencegahan dengan
          biaya perawatan yang rendah{" "}
        </p>
        <div className="w-full">
          <ul className="flex flex-wrap gap-16 items-center justify-start">
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                Pengiriman Cepat
              </p>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                Aman dan Terpercaya
              </p>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                Harga Terjangkau
              </p>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                24/7 Customer Service
              </p>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                High Maintenance
              </p>
            </li>
            <li className="flex items-center">
              <div className="bg-gradient-to-r from-[#1D407D] to-cyan-500 rounded-full w-[30px] h-[30px]"></div>
              <p className="font-bold ml-2 uppercase text-[20px]">
                Pengiriman Indonesia
              </p>
            </li>
          </ul>
        </div>
        <button className="w-4/12 text-white font-medium rounded-xl mt-10 py-2 bg-gradient-to-r from-[#1D407D] to-cyan-500">
          Lebih Lanjut
        </button>
      </div>
    </section>
  );
};

export default About;
