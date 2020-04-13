import React from "react";
import "./HeadingText.scss";

type HeadingTextProps = {
  pxSize: number;
  children: string;
};

const HeadingText = ({ pxSize, children }: HeadingTextProps) => (
  <div className="HeadingText" style={{ fontSize: `${pxSize}px` }}>
    {children}
  </div>
);

export default HeadingText;
