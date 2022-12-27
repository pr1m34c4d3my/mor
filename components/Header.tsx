import Image from "next/image";
import Link from "next/link";
import logo from "../public/img/logo.png";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex justify-between items-center py-3 lg:shadow-sm px-5 ">
      <figure className="lg:w-[300px] w-[150px]">
        <Link href="/">
          <Image src={logo} alt="logo"></Image>
        </Link>
      </figure>
      <nav className="hidden lg:block">
        <ul className="font-bold uppercase flex gap-5 text-slate-600">
          <li>
            <Link href="#">Beranda</Link>
          </li>
          <li>
            <Link href="#">Tentang Kami</Link>
          </li>
          <li>
            <Link href="#">Layanan</Link>
          </li>
          <li>
            <Link href="#">Portofolio</Link>
          </li>
          <li>
            <Link href="#">Artikel</Link>
          </li>
          <li>
            <Link href="#">Kontak</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
