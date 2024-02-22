"use client";
import React, { FC } from "react";
import { useMatchContext } from "@/core/context/match/matchContext";
import OddCell from "@/components/Bulten/OddCell";

interface Props {
  data: BetEvent[];
}

const Bulten: FC<Props> = ({ data }) => {
  const { couponData } = useMatchContext();

  return (
    <section className={"overflow-auto"}>
      <table className={"bulten-table min-w-full text-center"}>
        <thead className={"bg-blue-500 text-amber-50 sticky top-0"}>
          <tr className={"border-blue-500"}>
            <th className={"border py-3 px-4"}>Event Count: {data.length}</th>
            <th className={"border py-3 px-4"}>Yorumlar</th>
            <th className={"border py-3 px-4"}></th>
            <th className={"border py-3 px-4"}>1</th>
            <th className={"border py-3 px-4"}>x</th>
            <th className={"border py-3 px-4"}>2</th>
            <th className={"border py-3 px-4"}>Alt</th>
            <th className={"border py-3 px-4"}>Üst</th>
            <th className={"border py-3 px-4"}>H1</th>
            <th className={"border py-3 px-4"}>1</th>
            <th className={"border py-3 px-4"}>x</th>
            <th className={"border py-3 px-4"}>2</th>
            <th className={"border py-3 px-4"}>H2</th>
            <th className={"border py-3 px-4"}>1-X</th>
            <th className={"border py-3 px-4"}>1-2</th>
            <th className={"border py-3 px-4"}>X-2</th>
            <th className={"border py-3 px-4"}>Var</th>
            <th className={"border py-3 px-4"}>Yok</th>
            <th className={"border py-3 px-4"}>99</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            const selectedMatch = couponData.find(
              (couponItem) => couponItem.NID === item.NID,
            );
            const selectedOdd = selectedMatch ? selectedMatch.odd : undefined;
            return (
              <>
                <tr className={"border"}>
                  <th className={"border px-2 text-left"}>
                    {item.D} {item.DAY} {item.LN}
                  </th>
                  <th className={"border px-2"}>Yorumlar</th>
                  <th className={"border px-2"}></th>
                  <th className={"border px-2"}>1</th>
                  <th className={"border px-2"}>x</th>
                  <th className={"border px-2"}>2</th>
                  <th className={"border px-2"}>Alt</th>
                  <th className={"border px-2"}>Üst</th>
                  <th className={"border px-2"}>H1</th>
                  <th className={"border px-2"}>1</th>
                  <th className={"border px-2"}>x</th>
                  <th className={"border px-2"}>2</th>
                  <th className={"border px-2"}>H2</th>
                  <th className={"border px-2"}>1-X</th>
                  <th className={"border px-2"}>1-2</th>
                  <th className={"border px-2"}>X-2</th>
                  <th className={"border px-2"}>Var</th>
                  <th className={"border px-2"}>Yok</th>
                  <th className={"border px-2"}>99</th>
                </tr>
                <tr className={"border"}>
                  <td className={"border py-3 px-2 text-left"}>
                    <strong>{item.C}</strong> {item.T} {item.N}
                  </td>
                  <td className={"border py-3 px-2"}>Yorumlar</td>
                  <td className={"border py-3 px-2"}>4</td>
                  <OddCell
                    match={item}
                    odd={item.OCG["1"].OC["0"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odd={item.OCG["1"].OC["1"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <td className={"border py-3 px-2"}></td>
                  <OddCell
                    match={item}
                    odd={item.OCG["5"].OC["25"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odd={item.OCG["5"].OC["26"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}></td>
                  <OddCell
                    match={item}
                    odd={item.OCG["2"].OC["3"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odd={item.OCG["2"].OC["4"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odd={item.OCG["2"].OC["5"].O}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}></td>
                  <td className={"border py-3 px-2"}>3</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default Bulten;
