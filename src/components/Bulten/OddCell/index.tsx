import React, { FC } from "react";
import { useMatchContext } from "@/core/context/match/matchContext";

interface Props {
  match: BetEvent;
  odd: string;
  selectedOdd?: string;
}

const OddCell: FC<Props> = ({ match, odd, selectedOdd }) => {
  const isSelected = selectedOdd === odd;
  const { couponData, setOdds, clearOdds, replaceOdds } = useMatchContext();

  const handleAddOdd = () => {
    const crrOdd = couponData.find((item) => item.NID === match.NID);
    if (crrOdd && crrOdd.NID === match.NID) {
      if (crrOdd.odd !== odd) {
        replaceOdds(match, odd);
      } else {
        clearOdds(match);
      }
    } else {
      setOdds(match, odd);
    }
  };

  return (
    <td
      className={`border py-3 px-2 cursor-pointer ${isSelected ? "bg-blue-500" : ""}`}
      onClick={handleAddOdd}
    >
      {odd}
    </td>
  );
};

export default OddCell;
