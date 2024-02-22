import { BetEvent } from "@/core/type/betEvent";

export const getBets = async () => {
  const res = await fetch("https://nesine-case-study.onrender.com/bets");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const mapBetData = (
  data: BetEvent[],
  options: { page: number; perPage: number },
) => {
  const { perPage = 20, page = 1 } = options;
  const index = (page - 1) * perPage;
  return data.slice(index, index + perPage);
};
