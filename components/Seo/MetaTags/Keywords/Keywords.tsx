import React from "react";

export const SeperatedStringArray = (arr: string[], seperator: string) => {
  return arr.reduce((acc, curr, i) => {
    return i === 0 ? `${curr}` : `${acc}${seperator}${curr}`;
  }, "");
};

export interface MetaKeywordsProps {
  content: string[];
}

export const MetaKeywords: React.FC<MetaKeywordsProps> = ({
  content,
  ...props
}) => {
  return (
    <meta
      {...props}
      property="keyword"
      content={`${SeperatedStringArray(content, ", ")}`}
    />
  );
};
