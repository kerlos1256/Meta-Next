import React from "react";

export interface MetaImageProps {
  content: string;
}

export const MetaImage: React.FC<MetaImageProps> = ({ content, ...props }) => {
  return (
    <>
      <meta property="og:image" content={content} {...props} />
    </>
  );
};
