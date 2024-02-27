import Link from "next/link";

function HeaderNav() {
  return (
    <nav className="ml-20">
      <ul className="text-[15px] font-medium flex gap-x-4">
        <li>
          <Link href="/" className="text-lg">
            구입하기
          </Link>
        </li>
        <li>
          <Link href="/deals/create" className="text-lg">
            판매하기
          </Link>
        </li>
        <li>
          <Link href="/my/deals" className="text-lg">
            내 판매글
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default HeaderNav;
