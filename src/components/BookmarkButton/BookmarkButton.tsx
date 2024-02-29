"use client";

function BookmarkButton({ authorId }: { authorId: string }) {
  // useEffect(() => {
  //   if (authorId === "" || loggedIdUserId === "") {
  //     alert("이메일과 비밀번호를 입력하세요");
  //     return;
  //   }
  // });
  // const { mutate, isPending } = useMutation({
  //   mutationFn: API.dealAPI.createBookmark,
  // });

  // const handleClickBookmark = () => {
  //   mutate(
  //     { email, password },
  //     {
  //       onSuccess: () => {
  //         setIsLoggedIn(true);
  //         setModal(<></>);
  //         router.push("/");
  //       },
  //     }
  //   );
  // };
  return (
    <button
      // onClick={handleClickBookmark}
      className="bg-orange-500 text-white w-full h-14 col-span-2"
    >
      관심 보이기
    </button>
  );
}

export default BookmarkButton;
