import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>PT Mandiri Orion Raya | MOR</title>
        <meta
          name="description"
          content="PT MANDIRI ORION RAYA (MOR) bergerak dalam bidang pengelolaan kapal dengan fokus pada pemeliharaan, perbaikan kapal, pengadaan barang dan jasa, yang bermitra dengan beberapa galangan yang tersebar di Indonesia"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="lg:max-w-[1280px] w-full mx-auto">
        <Header />
        <Hero />
        <About />
      </div>
    </>
  );
}
