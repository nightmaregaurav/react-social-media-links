import React, {CSSProperties, useState} from 'react';
import SocialMedia, {SocialMediaIcons} from "./SocialMedia";

interface SocialLinksProps {
  socialLinks: SocialLink[];
  iconSize: number;
}

export interface SocialLink {
  media: SocialMedia;
  link: string;
}

const getIcon = (
  index: number,
  hoveredIconIndex: number | undefined,
  socialLink: SocialLink,
  iconSize: number,
) => {
  const NormalIcon = SocialMediaIcons[socialLink.media].normal;
  const HoverIcon = SocialMediaIcons[socialLink.media].hover;

  const style: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    transition: "opacity 0.3s ease",
  };

  return <>
    <NormalIcon
      width={iconSize}
      height={iconSize}
      style={{
        ...style,
        opacity: hoveredIconIndex === index ? 0 : 1,
      }}
    />
    <HoverIcon
      width={iconSize}
      height={iconSize}
      style={{
        ...style,
        opacity: hoveredIconIndex === index ? 1 : 0,
      }}
    />
  </>;
}

const SocialLinks = (
  {
    socialLinks,
    iconSize,
  }: SocialLinksProps
) => {
  const [hoveredIconIndex, setHoveredIconIndex] = useState<number>();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
        flexWrap: "wrap",
      }}
    >
      {
        socialLinks.map((socialLink, index) =>
          <a
            style={{
              position: "relative",
              minHeight: iconSize,
              height: iconSize,
              maxHeight: iconSize,
              minWidth: iconSize,
              width: iconSize,
              maxWidth: iconSize,
            }}
            key={index}
            onMouseEnter={() => setHoveredIconIndex(index)}
            onMouseLeave={() => setHoveredIconIndex(undefined)}
            href={socialLink.link}
            target={"_blank"}
            rel={"noreferrer"}
          >
            {getIcon(index, hoveredIconIndex, socialLink, iconSize)}
          </a>
        )
      }
    </div>
  );
};

export default SocialLinks;
