import Page from "@/components/Page";
import DealsWrapper from "./_components/DealsWrapper";

export default function Home({}) {
  return (
    <Page title="전체 판매글" fullWidth>
      <DealsWrapper />
    </Page>
  );
}

export const revalidate = 5;
