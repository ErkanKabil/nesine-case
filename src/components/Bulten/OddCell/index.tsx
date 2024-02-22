import React, { FC } from "react";
import { useMatchContext } from "@/core/context/match/matchContext";
import { BetEvent, Odd } from "@/core/type/betEvent";

interface Props {
  match: BetEvent;
  odds: Odd;
  selectedOdd?: string;
}

const OddCell: FC<Props> = ({ match, odds, selectedOdd }) => {
  const odd = odds.O;
  const MBS = odds.MBS;
  const isSelected = selectedOdd ? selectedOdd === odd : false;
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
      setOdds(match, odd, MBS);
    }
  };

  return (
    <td
      className={`border py-3 px-2 cursor-pointer ${isSelected ? "bg-blue-500 text-white" : ""}`}
      onClick={handleAddOdd}
    >
      {odd}
    </td>
  );
};

export default OddCell;
