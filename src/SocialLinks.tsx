import React, {CSSProperties, useState} from 'react';
import SocialMedia, {SocialMediaIcons} from "./SocialMedia";

interface SocialLinksProps {
  socialLinks: SocialLink[];
  iconWidth: number;
  iconHeight: number;
}

interface SocialLink {
  media: SocialMedia;
  link: string;
}

const getIcon = (
  index: number,
  hoveredIconIndex: number | undefined,
  socialLink: SocialLink,
  x: number,
  y: number
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
      width={x}
      height={y}
      style={{
        ...style,
        opacity: hoveredIconIndex === index ? 0 : 1,
      }}
    />
    <HoverIcon
      width={x}
      height={y}
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
    iconWidth,
    iconHeight,

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
              minHeight: iconHeight,
              height: iconHeight,
              maxHeight: iconHeight,
              minWidth: iconWidth,
              width: iconWidth,
              maxWidth: iconWidth,
            }}
            key={index}
            onMouseEnter={() => setHoveredIconIndex(index)}
            onMouseLeave={() => setHoveredIconIndex(undefined)}
            href={socialLink.link}
            target={"_blank"}
            rel={"noreferrer"}
          >
            {getIcon(index, hoveredIconIndex, socialLink, iconWidth, iconHeight)}
          </a>
        )
      }
    </div>
  );
};

export default SocialLinks;
