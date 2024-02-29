import API from "@/api/index.api";
import DealList from "@/components/DealList";

async function ProductsWrapper() {
  // const { data: deals } = useQuery({
  //   queryKey: ["deals", { isList: true, type: "default" }],
  //   queryFn: {API.dealAPI.getDeals("createdAt")},
  // });
  const deals = await API.dealAPI.getDeals("createdAt");

  return (
    <>
      <DealList deals={deals || []} />
    </>
  );
}

export default ProductsWrapper;
