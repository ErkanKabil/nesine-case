"use client";
import React from "react";
import { useMatchContext } from "@/core/context/match/matchContext";

const Coupon = () => {
  const { couponData } = useMatchContext();

  return (
    <div
      className={
        "fixed right-6 bottom-0 w-[500px] max-w-full max-h-[700px] overflow-auto bg-white border border-blue-200 rounded shadow-xl"
      }
    >
      {couponData.map((item) => (
        <div className={"flex gap-2 p-3 border-b border-blue-200"}>
          <span className={"flex-[0_0_2rem]"}>{item.odd}</span>
          <span className={"flex-[0_0_5rem]"}>Kod: {item.C}</span>
          <span className={"flex-1"}>Maç: {item.N}</span>
          <strong className={"flex-[0_0_6rem] ms-auto"}>
            Oran: {item.odd}
          </strong>
        </div>
      ))}
    </div>
  );
};

export default Coupon;
