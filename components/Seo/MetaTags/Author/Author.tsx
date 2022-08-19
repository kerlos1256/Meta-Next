import React from "react";

export interface MetaAuthorProps {
  author: string;
}

export const MetaAuthor: React.FC<MetaAuthorProps> = (props) => {
  if (!props) return null;
  const { author } = props;
  return (
    <>
      <meta property="twitter:creator" content={author} {...props} />;
      <meta name="author" content={author} />
    </>
  );
};
