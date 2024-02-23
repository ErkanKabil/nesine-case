"use client";
import React, { FC } from "react";
import OddCell from "@/components/Bulten/OddCell";
import { useSearchParams } from "next/navigation";
import Pagination from "@/components/Pagination";
import { mapBetData } from "@/core/requests/bets";
import { calculateMBS } from "@/core/utils/calculateMBS";
import { BetEvent } from "@/core/type/betEvent";
import TitleCell from "@/components/Bulten/TitleCell";
import TableCell from "@/components/Bulten/TableCell";

interface Props {
  data: BetEvent[];
}

const Bulten: FC<Props> = ({ data }) => {
  const searchParams = useSearchParams();

  const page = searchParams.get("page");

  const mappedData = mapBetData(data, {
    page: page ? Number(page) : 1,
    perPage: 20,
  });

  return (
    <section className={"overflow-auto"}>
      <table
        className={
          "bulten-table min-w-full text-center mb-4 table table-auto border-collapse"
        }
      >
        <thead className={"bg-blue-500 text-amber-50 sticky top-0"}>
          <tr className={"border-blue-500"}>
            <TitleCell className={"min-w-60"}>
              Event Count: {data.length}
            </TitleCell>
            <TitleCell>Yorumlar</TitleCell>
            <TitleCell></TitleCell>
            <TitleCell>1</TitleCell>
            <TitleCell>x</TitleCell>
            <TitleCell>2</TitleCell>
            <TitleCell>Alt</TitleCell>
            <TitleCell>Üst</TitleCell>
            <TitleCell>H1</TitleCell>
            <TitleCell>1</TitleCell>
            <TitleCell>x</TitleCell>
            <TitleCell>2</TitleCell>
            <TitleCell>H2</TitleCell>
            <TitleCell>1-X</TitleCell>
            <TitleCell>1-2</TitleCell>
            <TitleCell>X-2</TitleCell>
            <TitleCell>Var</TitleCell>
            <TitleCell>Yok</TitleCell>
            <TitleCell>99</TitleCell>
          </tr>
        </thead>
        <tbody>
          {mappedData.map((item) => {
            const maxMBS = calculateMBS(item);

            const selectedOdd = "4.12";

            return (
              <>
                <tr className={"border"} key={`head-${item.NID}`}>
                  <TitleCell className={"text-left min-w-60"}>
                    {item.D} {item.DAY} {item.LN}
                  </TitleCell>
                  <TitleCell>Yorumlar</TitleCell>
                  <TitleCell></TitleCell>
                  <TitleCell>1</TitleCell>
                  <TitleCell>x</TitleCell>
                  <TitleCell>2</TitleCell>
                  <TitleCell>Alt</TitleCell>
                  <TitleCell>Üst</TitleCell>
                  <TitleCell>H1</TitleCell>
                  <TitleCell>1</TitleCell>
                  <TitleCell>x</TitleCell>
                  <TitleCell>2</TitleCell>
                  <TitleCell>H2</TitleCell>
                  <TitleCell>1-X</TitleCell>
                  <TitleCell>1-2</TitleCell>
                  <TitleCell>X-2</TitleCell>
                  <TitleCell>Var</TitleCell>
                  <TitleCell>Yok</TitleCell>
                  <TitleCell>99</TitleCell>
                </tr>
                <tr className={"border"} key={`body-${item.NID}`}>
                  <TableCell className={"text-left min-w-60"}>
                    <strong>{item.C}</strong> {item.T} {item.N}
                  </TableCell>
                  <TableCell>Yorumlar</TableCell>
                  <TableCell>{maxMBS}</TableCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["1"].OC["0"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["1"].OC["1"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <TableCell></TableCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["5"].OC["25"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["5"].OC["26"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["2"].OC["3"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["2"].OC["4"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <OddCell
                    match={item}
                    odds={item.OCG["2"].OC["5"]}
                    selectedOdd={selectedOdd}
                  ></OddCell>
                  <TableCell></TableCell>
                  <TableCell></TableCell>
                  <TableCell>3</TableCell>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Pagination
        totalItems={data.length}
        itemPerPage={20}
        isLoading={false}
        page={page ? Number(page) : 1}
      />
    </section>
  );
};

export default Bulten;
