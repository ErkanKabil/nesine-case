import { calculateMBS } from "./index";
import { mockBetEvent } from "@/core/mock/betEvent";

describe("calculateMBS function", () => {
  test("should return the maximum MBS value from OCG options", () => {
    const result = calculateMBS(mockBetEvent[0]);

    expect(result).toBe("4");
  });

  test("should return undefined for an empty OCG options object", () => {
    const betEvent = {
      C: "123",
      N: "Team vs Team",
      TYPE: "Type",
      NID: "456",
      D: "2024-02-22",
      T: "12:00",
      DAY: "Monday",
      S: "Status",
      LN: "League Name",
      IMF: false,
      OCG: {},
      HEC: true,
    };

    const result = calculateMBS(betEvent);

    expect(result).toBeUndefined();
  });

  // Add more test cases as needed
});
