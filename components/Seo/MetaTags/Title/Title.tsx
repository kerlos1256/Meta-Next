import React from "react";

export interface MetaTitleProps {
  content?: string;
}

export const MetaTitle: React.FC<MetaTitleProps> = (props) => {
  return (
    <>
      <meta {...props} property="og:title" content={"test"} />;
      <title>{"test"}</title>
    </>
  );
};
