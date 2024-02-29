import API from "@/api/index.api";
import DealForm from "@/components/DealForm/DealForm";
import Page from "@/components/Page";

async function DealsEditPage(props: { params: { dealId: string } }) {
  const dealId = props.params.dealId;
  const deal = await API.dealAPI.getDeal(dealId);
  return (
    <Page fullWidth={false} title="판매글 작성하기">
      <DealForm deal={deal} />
    </Page>
  );
}

export default DealsEditPage;
