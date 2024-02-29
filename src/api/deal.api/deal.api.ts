import { Deal } from "@/types/Deal.type";
import { coreClient } from "../index.api";

export async function createDeal(data: FormData) {
  const url = `/deals`;
  const response = await coreClient.post(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const result = await response.data.result;
  return result as Deal;
}
export async function getDeal(dealId: string) {
  const url = `/deals/${dealId}`;
  console.log("url", url);
  const response = await coreClient.get(url);
  const result = await response.data.result;
  return result as Deal;
}
export async function getDeals(type: string, cnt?: string) {
  let url = `/deals?`;
  if (type) url += `type=${type}`;
  if (cnt) url += `cnt=${cnt}`;
  const response = await coreClient.get(url);
  const result = await response.data.result;
  return result as Deal[];
}
export async function updateDeal(data: FormData, dealId: string) {
  const url = `/deals/${dealId}`;
  const response = await coreClient.patch(url, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  const result = await response.data.result;
  return result as Deal;
}
export async function deleteDeal(dealId: string) {
  const url = `/deals/${dealId}`;
  const response = await coreClient.delete(url);
  const result = await response.data.result;
  return result as Deal;
}

const dealAPI = { createDeal, deleteDeal, getDeal, getDeals, updateDeal };

export default dealAPI;
