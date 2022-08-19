import React from "react";
export interface MetaVideoProps {
  content: string;
}

export const MetaVideo: React.FC<MetaVideoProps> = (props) => {
  if (!props) return null;
  const { content } = props;
  return <meta {...props} property="og:video" content={content} />;
};
