import React from "react";

export interface MetaTitleProps {
  content: string;
}

export const MetaTitle: React.FC<MetaTitleProps> = (props) => {
  if (!props) return null;
  const { content } = props;
  return (
    <>
      <meta {...props} property="og:title" content={content} />;
      <title>{content}</title>
    </>
  );
};
