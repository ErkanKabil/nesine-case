import { render, screen } from "@testing-library/react";
import Pagination from "./index";

// Mock useRouter:
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null,
      replace: () => null,
    };
  },
  useSearchParams: () => null,
  usePathname: () => null,
}));

describe("Pagination component", () => {
  test("renders Pagination component with page buttons", () => {
    const totalItems = 50;
    const itemPerPage = 10;
    const isLoading = false;
    const page = 1;

    render(
      <Pagination
        totalItems={totalItems}
        itemPerPage={itemPerPage}
        isLoading={isLoading}
        page={page}
      />,
    );

    const paginationComponent = screen.getByText("<");
    expect(paginationComponent).toBeInTheDocument();

    const pageButtons = screen.getAllByRole("button");
    expect(pageButtons.length).toBeGreaterThanOrEqual(3);
  });

  it("disables previous on first page", () => {
    render(
      <Pagination
        page={1}
        isLoading={false}
        itemPerPage={10}
        totalItems={20}
      />,
    );

    expect(screen.getByText("<")).toBeDisabled();
  });

  it("disables next on last page", () => {
    render(
      <Pagination
        isLoading={false}
        itemPerPage={10}
        totalItems={10}
        page={1}
      />,
    );

    expect(screen.getByText(">")).toBeDisabled();
  });
});
