import React from "react";
import { NextSeo } from "next-seo";

const baseUrl = "";

const SEO = ({ title, description, imagePath, path }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={path ? `${baseUrl}/${path}` : baseUrl}
      openGraph={{
        url: path ? `${baseUrl}/${path}` : baseUrl,
        title,
        description: "Dapp Template",
        images: [],
        site_name: "Dapp Template",
      }}
      twitter={{
        handle: "@b0nesFAFZ",
        site: baseUrl,
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[{ rel: "icon", href: "/images/favicon.ico" }]}
      additionalMetaTags={[
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "keywords",
          content: "KEYWORDS GO HERE",
        },
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
      }}
    />
  );
};

export default SEO;
