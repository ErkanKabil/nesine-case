"use client";
import React from "react";
import { useMatchContext } from "@/core/context/match/matchContext";

const Coupon = () => {
  const { couponData } = useMatchContext();

  return (
    <div
      className={
        "fixed right-0 md:right-6 bottom-0 w-[500px] max-w-full max-h-[700px] overflow-auto md:rounded shadow-xl bg-blue-900 text-white"
      }
    >
      {couponData.map((item) => (
        <div
          className={"flex gap-2 p-3 border-b border-blue-200"}
          key={item.NID}
        >
          <span className={"flex-[0_0_1rem]"}>{item.MBS}</span>
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
