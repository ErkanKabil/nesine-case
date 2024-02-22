"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import { CouponData } from "@/core/type/couponData";

interface MatchContextProps {
  couponData: CouponData[];
  setOdds: (match: BetEvent, odds: string) => void;
  clearOdds: (match: BetEvent) => void;
  replaceOdds: (match: BetEvent, odds: string) => void;
}

const MatchContext = createContext<MatchContextProps | undefined>(undefined);

interface MatchProviderProps {
  children: ReactNode;
}

export const MatchProvider: React.FC<MatchProviderProps> = ({ children }) => {
  const [couponData, setCouponData] = useState<CouponData[]>([]);

  const setOdds = (match: BetEvent, odd: string) => {
    setCouponData([
      ...couponData,
      {
        NID: match.NID,
        odd,
        C: match.C,
        N: match.N,
      },
    ]);
  };

  const clearOdds = (match: BetEvent) => {
    setCouponData(couponData.filter((item) => item.NID !== match.NID));
  };

  const replaceOdds = (match: BetEvent, odd: string) => {
    setCouponData(
      couponData.map((item) => {
        if (item.NID === match.NID) {
          return { ...item, odd };
        }
        return item;
      }),
    );
  };

  return (
    <MatchContext.Provider
      value={{ couponData, setOdds, clearOdds, replaceOdds }}
    >
      {children}
    </MatchContext.Provider>
  );
};

export const useMatchContext = (): MatchContextProps => {
  const context = useContext(MatchContext);

  if (!context) {
    throw new Error("useMatchContext must be used within a MatchProvider");
  }

  return context;
};
