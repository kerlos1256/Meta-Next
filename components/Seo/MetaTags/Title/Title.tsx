import React from "react";

export interface MetaTitleProps {
  content: string;
}

export const MetaTitle: React.FC<MetaTitleProps> = ({ content, ...props }) => {
  return (
    <>
      <meta property="og:title" content={content} {...props} />;
      <title>{content}</title>
    </>
  );
};
