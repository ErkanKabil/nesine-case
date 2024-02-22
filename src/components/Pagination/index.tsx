"use client";
import { FC, useState } from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

const PageSplit = 5;

interface Props {
  itemPerPage: number;
  totalItems: number;
  isLoading: boolean;
  page: number;
}

const Pagination: FC<Props> = ({
  itemPerPage,
  totalItems,
  isLoading,
  page,
}) => {
  let pageCount = Math.ceil(totalItems / itemPerPage);

  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const paginate = (value: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (value) {
      params.set("page", value.toString());
    } else {
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const getPageArray = () => {
    const pageArray: (string | number)[] = [];
    if (isLoading) {
      for (let index = 1; index <= 9; index += 1) {
        pageArray.push(" ");
      }
      return pageArray;
    }

    if (pageCount <= PageSplit + 4) {
      for (let index = 1; index <= pageCount; index += 1) {
        pageArray.push(index);
      }
      return pageArray;
    }
    if (page <= PageSplit) {
      for (let index = 1; index <= PageSplit + 2; index += 1) {
        pageArray.push(index);
      }

      pageArray.push("DOTS");
      pageArray.push(pageCount);
    } else if (page >= pageCount - PageSplit) {
      pageArray.push("1");
      pageArray.push("DOTS");
      for (
        let index = pageCount - (PageSplit + 1);
        index <= pageCount;
        index += 1
      ) {
        pageArray.push(index);
      }
    } else {
      pageArray.push("1");
      pageArray.push("DOTS");
      for (let index = page - 2; index <= page + 2; index += 1) {
        pageArray.push(index);
      }
      pageArray.push("DOTS");
      pageArray.push(pageCount);
    }
    return pageArray;
  };

  const pageButtonClass =
    "text-gray-500 text-sm flex items-center justify-center p-0.5 rounded-full w-8 h-8 p-2";

  return (
    <div className="flex items-center justify-center gap-3">
      <button
        className={`${pageButtonClass} h-12 w-12 !p-0 disabled:opacity-40`}
        type="button"
        disabled={page === 1}
        onClick={() => paginate(1)}
        key={-1}
      >
        {"<"}
      </button>
      {getPageArray().map((number) => {
        if (number === "DOTS") return "...";
        const isActive = number.toString() === page.toString();
        return (
          <button
            className={`${pageButtonClass} hover:bg-blue-600 hover:text-white ${
              isActive && "bg-blue-600 text-white"
            }`}
            type="button"
            onClick={() => paginate(number as number)}
            key={number}
          >
            {number}
          </button>
        );
      })}
      <button
        className={`${pageButtonClass} h-12 w-12 !p-0 disabled:opacity-40`}
        type="button"
        disabled={page === pageCount}
        onClick={() => paginate(pageCount)}
        key={pageCount}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
