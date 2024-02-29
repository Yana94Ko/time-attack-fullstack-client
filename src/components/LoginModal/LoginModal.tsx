"use client";
import API from "@/api/index.api";
import { useAuth } from "@/contexts/auth.context";
import { useUtil } from "@/contexts/util.context";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Input from "../Input";
import Modal from "../Modal";

function LoginModal() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { mutate, isPending } = useMutation({ mutationFn: API.authAPI.logIn });
  const { setIsLoggedIn } = useAuth();
  const { setModal } = useUtil();
  const router = useRouter();

  const handleClickLogin = () => {
    if (email === "" || password === "") {
      alert("이메일과 비밀번호를 입력하세요");
      return;
    }
    mutate(
      { email, password },
      {
        onSuccess: () => {
          setIsLoggedIn(true);
          setModal(<></>);
          router.push("/");
        },
      }
    );
  };
  return (
    <Modal title="로그인">
      <div className="grid grid-cols-3 content-center justify-center text-center gap-y-6">
        <Input
          inputType="email"
          label="이메일"
          value={email}
          setValue={setEmail}
        />
        <Input
          inputType="password"
          label="비밀번호"
          minLength={8}
          value={password}
          setValue={setPassword}
        />
        <button
          onClick={handleClickLogin}
          disabled={isPending}
          className="bg-orange-500 font-bold font-2xl text-white w-full col-span-4 block border px-6 h-14 rounded-lg focus:shadow-black my-4"
        >
          로그인하기
        </button>
      </div>
    </Modal>
  );
}

export default LoginModal;
