import { PropsWithChildren } from "react";
interface PageProps {
  title: string;
  fullWidth: boolean;
}

function Page({ title, fullWidth, children }: PropsWithChildren<PageProps>) {
  return (
    <main
      data-full-width={fullWidth}
      className="px-5 lg:px-10 py-6 lg:py-10 mx-auto max-w-screen-lg data-[full-width=true]:max-w-none data-[full-width=false]:px-40 flex flex-col grow w-full items-stretch"
    >
      {title && <h2 className="font-bold text-4xl my-12">{title}</h2>}
      {children}
    </main>
  );
}

export default Page;
