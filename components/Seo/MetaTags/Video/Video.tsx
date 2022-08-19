import React from "react";
export interface MetaVideoProps {
  content: string;
}

export const MetaVideo: React.FC<MetaVideoProps> = ({ content, ...props }) => {
  return <meta property="og:video" content={content} {...props} />;
};
