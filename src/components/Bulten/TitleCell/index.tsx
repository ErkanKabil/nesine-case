import React, { FC } from "react";

interface Props {
  children?: React.ReactNode;
  className?: string;
}

const TitleCell: FC<Props> = ({ children, className }) => {
  return <th className={`border py-3 px-2 ${className}`}>{children}</th>;
};

export default TitleCell;
