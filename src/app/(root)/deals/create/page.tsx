import DealForm from "@/components/DealForm/DealForm";
import Page from "@/components/Page";

function DealsCreatePage() {
  return (
    <Page fullWidth={false} title="판매글 작성하기">
      <DealForm />
    </Page>
  );
}

export default DealsCreatePage;
