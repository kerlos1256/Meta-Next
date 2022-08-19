import React from "react";

export interface MetaImageProps {
  content: string;
}

export const MetaImage: React.FC<MetaImageProps> = (props) => {
  // if (!props) return null;
  const { content } = props;
  return (
    <>
      <meta name={"image"} itemProp="image" content={content} />
      <meta property="og:image" itemProp="image" {...props} content={content} />
    </>
  );
};
