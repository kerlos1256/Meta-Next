import React from "react";
import { MetaTwitterCard } from "../";
export interface RequiredSocialMediaTagsProps {}

export const RequiredSocialMediaTags: React.FC<
  RequiredSocialMediaTagsProps
> = () => {
  return (
    <>
      <MetaTwitterCard variant="large" />
    </>
  );
};
