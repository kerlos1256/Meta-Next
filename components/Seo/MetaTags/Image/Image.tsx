import React from "react";

export interface MetaImageProps {
  content: string;
}

export const MetaImage: React.FC<MetaImageProps> = (props) => {
  // if (!props) return null;
  const { content } = props;
  return (
    <>
      <meta property="og:image" {...props} content={content} />
    </>
  );
};
