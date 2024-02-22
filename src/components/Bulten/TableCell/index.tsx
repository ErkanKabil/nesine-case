import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TableCell: FC<Props> = ({ children, className }) => {
  return <td className={`border py-3 px-2 ${className}`}>{children}</td>;
};

export default TableCell;
