export const getBets = async () => {
  const res = await fetch("https://nesine-case-study.onrender.com/bets");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
