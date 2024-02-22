import { getBets, mapBetData } from "./index";
import { mockBetEvent } from "../../mock/betEvent";

const mockFetchValue: any = {
  data: "test",
};
describe("getBets function", () => {
  beforeEach(() => {
    // Clear the fetch mock between tests
    jest.clearAllMocks();
  });

  test("should fetch data successfully", async () => {
    jest
      .spyOn(global, "fetch")
      .mockImplementation(() =>
        Promise.resolve(new Response(JSON.stringify(mockFetchValue))),
      );

    const result = await getBets();

    expect(result).toEqual(mockFetchValue);
    expect(global.fetch).toHaveBeenCalledWith(
      "https://nesine-case-study.onrender.com/bets",
    );
  });
});

describe("mapBetData function", () => {
  test("should return the correct subset of data based on page and perPage options", () => {
    const options = { page: 2, perPage: 1 };

    const result = mapBetData(mockBetEvent, options);

    expect(result).toEqual([mockBetEvent[1]]);
  });
});
