function convertPriceToKRW(amount: number) {
  return `${amount.toLocaleString()}원`;
}
export const dealsUtils = {
  convertPriceToKRW,
};

export default dealsUtils;
