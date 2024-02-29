import API from "@/api/index.api";
import BookmarkButton from "@/components/BookmarkButton";
import Page from "@/components/Page";
import utils from "@/utils/utils";
import Image from "next/image";

async function DealPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await API.dealAPI.getDeal(dealId);
  return (
    <Page fullWidth={false} title={""}>
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-6">
        <div className="relative aspect-[3/4]">
          <Image
            src={deal.imgUrl}
            alt={deal.title}
            fill
            loading="lazy"
            objectPosition="absolute"
            className="object-cover"
          />
        </div>
        <div className="py-8 flex flex-col">
          <h2 className="text-lg">{deal.title}</h2>
          <div className="grid grid-cols-4 my-12 gap-y-5 text-[15px]">
            <span className="font-bold">판매가</span>
            <span className="col-span-2">
              {utils.products.convertPriceToKRW(deal.price)}
            </span>
            <span className="col-span-4 row-span-6 whitespace-wrap break-all">
              {deal.content}
            </span>
            <span>조회</span>
            <span>{deal.hit}</span>
            <span>관심</span>
            <span>{deal.bookmarksCount}</span>
          </div>
          <BookmarkButton authorId={deal.authorId} />
        </div>
      </section>
    </Page>
  );
}

export default DealPage;
