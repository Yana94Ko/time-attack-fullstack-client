"use client";

import Link from "next/link";

function HeaderMenus() {
  const isLoggedIn = false;
  return (
    <div className="ml-auto flex item-center gap-x-4 text-lg">
      {!isLoggedIn ? (
        <>
          <Link
            href="/auth/sign-up"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition text-lg"
          >
            회원가입
          </Link>
          <button
            type="button"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition text-lg"
          >
            로그인
          </button>
        </>
      ) : (
        <>
          <button
            type="button"
            className="text-[15px] font-medium text-gray-800 hover:text-black transition text-lg"
          >
            로그아웃
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
