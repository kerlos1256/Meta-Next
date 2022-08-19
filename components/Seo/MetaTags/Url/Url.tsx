import React from "react";

export interface MetaUrlProps {
  url: string;
}

export const MetaUrl: React.FC<MetaUrlProps> = (props) => {
  if (!props) return null;
  const { url } = props;
  return (
    <>
      <meta name="url" content={url} {...props} />
      <meta name="og:url" content={url} {...props} />
    </>
  );
};
