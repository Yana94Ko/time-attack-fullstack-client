import Image from "next/image";
import Link from "next/link";
import HeaderMenus from "./components/HeaderMenus";
import HeaderNav from "./components/HeaderNav";

function Header() {
  return (
    <header className="bg-white sticky top-0 h-20 border-b flex items-center px-10 lg:px-80 z-10 shrink-0">
      <Image src={"/icon.ico"} alt="icon" width={60} height={60} />
      <Link href="/" className="text-3xl font-bold">
        중고마켓
      </Link>
      <HeaderNav />
      <HeaderMenus />
    </header>
  );
}

export default Header;
