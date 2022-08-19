import React from "react";

export interface MetaUrlProps {
  url: string;
}

export const MetaUrl: React.FC<MetaUrlProps> = ({ url, ...props }) => {
  return (
    <>
      <meta name="url" content={url} {...props} />
      <meta name="og:url" content={url} {...props} />
    </>
  );
};
