import React from "react";

export interface MetaDescriptionProps {
  content: string;
}

export const MetaDescription: React.FC<MetaDescriptionProps> = ({
  content,
  ...props
}) => {
  return (
    <>
      <meta {...props} name="description" content={content} />
      <meta {...props} property="og:description" content={content} />
    </>
  );
};
