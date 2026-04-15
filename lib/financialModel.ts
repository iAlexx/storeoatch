export type FinancialYear = {
  year: string;
  merchants: number;
  arpu: number;
};

export type MrrProjection = FinancialYear & {
  mrr: number;
};

export const financialAssumptions: FinancialYear[] = [
  { year: "Year 1", merchants: 1000, arpu: 7 },
  { year: "Year 2", merchants: 5000, arpu: 8.5 },
  { year: "Year 3", merchants: 20000, arpu: 10.5 }
];

export function buildMrrProjection(): MrrProjection[] {
  return financialAssumptions.map((year) => ({
    ...year,
    mrr: Math.round(year.merchants * year.arpu)
  }));
}
