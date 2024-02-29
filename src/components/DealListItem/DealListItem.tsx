import utils from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";
interface DealListItemProps {
  deal: {
    id: number;
    authorId: string;
    bookmarksCount: number;
    title: string;
    content: string;
    price: number;
    hit: number;
    imgUrl: string;
    createdAt: string;
    updatedAt: string;
    bookmarks: [];
  };
}
function DealListItem({ deal }: DealListItemProps) {
  return (
    <Link href={`/deals/${deal.id}`} className="relative flex flex-col group">
      <div className="aspect-[3/4] relative mb-4">
        <Image
          src={deal.imgUrl}
          alt={deal.title}
          fill
          loading="lazy"
          objectPosition="absolute"
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="grid gap-y-2">
        <div className="text-sm font-bold">{deal.title}</div>
        <h6 className="text-[15px] text-ellipsis overflow-hidden ... ">
          {deal.content}
        </h6>
        <div className="text-sm flex flex-col sm:flex-row gap-1.5 items-end">
          <span className="font-bold">
            {utils.products.convertPriceToKRW(deal.price)}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default DealListItem;
