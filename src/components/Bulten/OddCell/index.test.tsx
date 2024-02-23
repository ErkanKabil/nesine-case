import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import OddCell from "@/components/Bulten/OddCell/index";
import { mockBetEvent } from "@/core/mock/betEvent";
import { MatchProvider } from "@/core/context/match/matchContext";

describe("OddCell", () => {
  test("renders correctly with default props", () => {
    const match = mockBetEvent[0];
    const odds = match.OCG["1"].OC["0"];
    render(
      <MatchProvider>
        <table>
          <tbody>
            <tr>
              <OddCell match={match} odds={odds} />
            </tr>
          </tbody>
        </table>
      </MatchProvider>,
    );

    const element = screen.getAllByText(odds.O);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(element).toBeInTheDocument());
  });

  test("renders selected style when selectedOdd matches", () => {
    const match = mockBetEvent[0];
    const odds = match.OCG["1"].OC["0"];
    render(
      <MatchProvider>
        <table>
          <tbody>
            <tr>
              <OddCell match={match} odds={odds} selectedOdd={odds.O} />
            </tr>
          </tbody>
        </table>
      </MatchProvider>,
    );

    const element = screen.getAllByText(odds.O);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(element).toHaveClass("bg-blue-500"));
  });

  test("calls setOdds on click if not already in coupon", () => {
    const setOddsMock = jest.fn();
    jest.mock("../../../core/context/match/matchContext", () => ({
      useMatchContext: () => {
        return {
          couponData: [],
          setOdds: setOddsMock,
        };
      },
    }));

    const match = mockBetEvent[0];
    const odds = match.OCG["1"].OC["0"];
    render(
      <MatchProvider>
        <table>
          <tbody>
            <tr>
              <OddCell match={match} odds={odds} />
            </tr>
          </tbody>
        </table>
      </MatchProvider>,
    );

    const element = screen.getByText(odds.O);

    fireEvent.click(element);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(setOddsMock).toHaveBeenCalledWith(match, "1.5", "M"));
  });

  test("calls replaceOdds on click if already in coupon with different odd", () => {
    const replaceOddsMock = jest.fn();
    jest.mock("../../../core/context/match/matchContext", () => ({
      useMatchContext: () => {
        return {
          couponData: [{ NID: "123", odd: "1.5" }],
          replaceOdds: replaceOddsMock,
        };
      },
    }));

    const match = mockBetEvent[0];
    const odds = match.OCG["1"].OC["0"];
    render(
      <MatchProvider>
        <table>
          <tbody>
            <tr>
              <OddCell match={match} odds={odds} selectedOdd={"1.5"} />
            </tr>
          </tbody>
        </table>
      </MatchProvider>,
    );

    const element = screen.getByText(odds.O);

    fireEvent.click(element);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() =>
      expect(replaceOddsMock).toHaveBeenCalledWith(match, odds.O, odds.MBS),
    );
  });

  test("calls clearOdds on click if already in coupon with same odd", () => {
    const match = mockBetEvent[0];
    const odds = match.OCG["1"].OC["0"];
    const clearOddsMock = jest.fn();
    jest.mock("../../../core/context/match/matchContext", () => ({
      useMatchContext: () => {
        return {
          couponData: [{ NID: match.NID, O: odds.O }],
          clearOdds: clearOddsMock,
        };
      },
    }));

    render(
      <MatchProvider>
        <table>
          <tbody>
            <tr>
              <OddCell match={match} odds={odds} selectedOdd={odds.O} />
            </tr>
          </tbody>
        </table>
      </MatchProvider>,
    );

    const element = screen.getByText(odds.O);

    fireEvent.click(element);

    // eslint-disable-next-line testing-library/await-async-utils
    waitFor(() => expect(clearOddsMock).toHaveBeenCalledWith(match));
  });
});
