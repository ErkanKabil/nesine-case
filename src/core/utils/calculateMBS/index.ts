import { BetEvent } from "@/core/type/betEvent";

export const calculateMBS = (item: BetEvent) => {
  let allMBSs: string[] = [];

  Object.keys(item.OCG).forEach((key) => {
    allMBSs.push(item.OCG[key].MBS);
  });

  const sortedOdds = allMBSs.sort((a, b) => Number(b) - Number(a));

  return sortedOdds[0];
};
