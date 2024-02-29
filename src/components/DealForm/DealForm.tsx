"use client";
import API from "@/api/index.api";
import Input from "@/components/Input";
import { Deal } from "@/types/Deal.type";
import { useRouter } from "next/navigation";
import { FormEventHandler, useEffect, useId, useState } from "react";

function DealForm({ deal }: { deal?: Deal }) {
  const [title, setTitle] = useState<string>(deal ? deal.title : "");
  const [content, setContent] = useState<string>(deal ? deal.content : "");
  const [price, setPrice] = useState<number>(deal ? deal.price : 0);
  const [location, setLocation] = useState<string>(deal ? "" : "");
  const [isPending, setIsPending] = useState<boolean>(true);
  const [file, setFile] = useState<any>();
  const contentId = useId();
  const router = useRouter();

  useEffect(() => {
    if (title && content && price && location && file) setIsPending(false);
  }, [title, content, price, location, file]);

  const onChangeImg = (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (e.target.files) {
      const uploadFile = e.target.files[0];
      setFile(uploadFile);
    }
  };
  const handleClickSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    if (
      title === "" ||
      content === "" ||
      price === 0 ||
      location === "" ||
      !file
    ) {
      alert("입력값을 모두 입력하세요.");
      return;
    }

    setIsPending(true);

    let formData = new FormData(e.currentTarget);
    formData.append("title", title);
    formData.append("content", content);
    formData.append("price", String(price));
    formData.append("location", location);
    formData.append("productImg", file);

    API.dealAPI.createDeal(formData).then((res) => {
      router.push(`/deals/${res.id}`);
    });
  };

  return (
    <form className="grid grid-cols-4 gap-y-5" onSubmit={handleClickSubmit}>
      <Input
        inputType="text"
        label="글 제목"
        value={title}
        setValue={setTitle}
      />
      <label
        className=" text-gray-800 w-full min-h-64- text-lg font-bold px-6 py-3 rounded focus:border-black transition border-slate-300 row-span-12"
        htmlFor={contentId}
      >
        글 내용
      </label>
      <textarea
        className="block border w-full px-6 col-span-3 row-span-12"
        id={contentId}
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <Input
        inputType="text"
        label="직거래 위치"
        minLength={8}
        value={location}
        setValue={setLocation}
      />
      <Input
        inputType="number"
        label="판매 가격"
        minLength={8}
        value={price}
        setValue={setPrice}
      />
      <label
        className=" text-gray-800 w-full min-h-64- text-lg font-bold px-6 py-3 rounded focus:border-black transition border-slate-300"
        htmlFor="file_input"
      >
        사진 올리기
      </label>
      <input
        onChange={onChangeImg}
        type="file"
        id="file_input"
        className="block w-full text-sm text-gray-500 col-span-3 h-full my-0
        file:me-6  file:py-5 file:px-4
        file:rounded-lg file:border-0
        file:text-sm file:font-semibold
        file:bg-orange-300 file:text-white
        hover:file:bg-orange-700
        file:disabled:opacity-50 file:disabled:pointer-events-none
        dark:file:bg-orange-300
        dark:hover:file:bg-orange-500
        border"
      />
      <button
        disabled={isPending}
        className="bg-orange-500 font-bold font-2xl text-white w-full col-span-4 block border px-6 h-14 my-3 rounded-lg focus:shadow-black disabled:bg-orange-200"
      >
        판매글 작성하기
      </button>
    </form>
  );
}

export default DealForm;
