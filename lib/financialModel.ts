export type FinancialYear = {
  year: string;
  merchants: number;
  arpu: number;
  churn: number;
  expansion: number;
};

export type FinancialSnapshot = FinancialYear & {
  mrr: number;
  arr: number;
  variableCost: number;
  grossProfit: number;
  grossMargin: number;
};

const costPerMerchant = 2.1;

export const financialAssumptions: FinancialYear[] = [
  { year: "Year 1", merchants: 1000, arpu: 7, churn: 0.045, expansion: 0.08 },
  { year: "Year 2", merchants: 5000, arpu: 8.5, churn: 0.035, expansion: 0.12 },
  { year: "Year 3", merchants: 20000, arpu: 10.5, churn: 0.03, expansion: 0.17 }
];

export function buildFinancialSnapshots(): FinancialSnapshot[] {
  return financialAssumptions.map((year) => {
    const adjustedArpu = year.arpu * (1 + year.expansion);
    const retained = year.merchants * (1 - year.churn);
    const mrr = Number((retained * adjustedArpu).toFixed(2));
    const arr = Number((mrr * 12).toFixed(2));
    const variableCost = Number((retained * costPerMerchant).toFixed(2));
    const grossProfit = Number((mrr - variableCost).toFixed(2));
    const grossMargin = Number(((grossProfit / mrr) * 100).toFixed(2));

    return {
      ...year,
      mrr,
      arr,
      variableCost,
      grossProfit,
      grossMargin
    };
  });
}

export function unitEconomics(arpu = 8.5, cogs = 2.1, cac = 14) {
  const margin = Number((((arpu - cogs) / arpu) * 100).toFixed(2));
  const ltv = Number(((arpu * margin) / 100 * 18).toFixed(2));
  const ltvCac = Number((ltv / cac).toFixed(2));
  const breakEvenMerchants = Math.ceil(5500 / (arpu - cogs));

  return {
    arpu,
    cogs,
    cac,
    margin,
    ltv,
    ltvCac,
    breakEvenMerchants
  };
}
