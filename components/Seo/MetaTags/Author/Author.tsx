import React from "react";

export interface MetaAuthorProps {
  author: string;
}

export const MetaAuthor: React.FC<MetaAuthorProps> = ({ author, ...props }) => {
  return <meta property="twitter:creator" content={author} {...props} />;
};
