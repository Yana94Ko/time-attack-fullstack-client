"use client";

import API from "@/api/index.api";
import LoginModal from "@/components/LoginModal";
import { useAuth } from "@/contexts/auth.context";
import { useUtil } from "@/contexts/util.context";
import utils from "@/utils/utils";
import Link from "next/link";
import { useEffect } from "react";

function HeaderMenus() {
  const { setModal } = useUtil();
  const {
    isLoggedIn,
    setIsLoggedIn,
    nickname,
    setNickname,
    setLoggedInUserId,
  } = useAuth();

  const handleClickLogin = () => {
    setModal(<LoginModal />);
  };
  const handleClickLogOut = () => {
    API.authAPI.logOut();
    setIsLoggedIn(false);
  };

  useEffect(() => {
    API.authAPI.refreshToken().then((isLoggedIn) => setIsLoggedIn(isLoggedIn));
  }, []);

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
            onClick={handleClickLogin}
            className="text-[15px] font-medium text-gray-800 hover:text-black transition text-lg"
          >
            로그인
          </button>
        </>
      ) : (
        <>
          <button
            onClick={handleClickLogOut}
            className="text-[15px] font-medium text-gray-800 hover:text-black transition text-lg"
          >
            {utils.nickname.getRandomNickname()}님 로그아웃
          </button>
        </>
      )}
    </div>
  );
}

export default HeaderMenus;
