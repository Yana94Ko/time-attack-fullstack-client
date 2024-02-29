import { ComponentProps } from "react";
import DealListItem from "../DealListItem";
interface DealListProps {
  deals: Array<ComponentProps<typeof DealListItem>["deal"]>;
}
function DealList({ deals }: DealListProps) {
  return (
    <>
      <ul className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
        {deals.map((deal) => (
          <li key={deal.id}>
            <DealListItem key={deal.id} deal={deal}></DealListItem>
          </li>
        ))}
      </ul>
    </>
  );
}

export default DealList;
