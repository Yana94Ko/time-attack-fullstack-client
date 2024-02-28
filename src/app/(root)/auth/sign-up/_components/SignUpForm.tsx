"use client";
import API from "@/api/index.api";
import Input from "@/components/Input";
import { useAuth } from "@/contexts/auth.context";
import { useMutation } from "@tanstack/react-query";
import { FormEventHandler, useState } from "react";

function SignUpForm() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");
  const auth = useAuth();
  const { mutate, isPending } = useMutation({
    mutationFn: API.authAPI.signUp,
  });

  const handleClickSignUp: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    if (email === "" || password === "" || passwordCheck === "") {
      alert("입력값을 모두 입력하세요.");
      return;
    }

    if (password !== passwordCheck) {
      alert("비밀번호와 비밀번호 확인 값이 일치하지 않습니다.");
      return;
    }
    mutate(
      { email, password },
      {
        onSuccess: () => {
          auth.setIsLoggedIn(true);
        },
      }
    );
  };
  return (
    <form className="grid grid-cols-4 gap-y-4" onSubmit={handleClickSignUp}>
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
      <Input
        inputType="password"
        label="비밀번호 확인"
        minLength={8}
        value={passwordCheck}
        setValue={setPasswordCheck}
      />
      <button
        disabled={isPending}
        className="bg-orange-500 font-bold font-2xl text-white w-full col-span-4 block border px-6 h-14 my-3 rounded-lg focus:shadow-black"
      >
        가입하기
      </button>
    </form>
  );
}

export default SignUpForm;
