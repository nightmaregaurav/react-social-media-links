import SocialMedia from "./SocialMedia";

const SupportedSocialMedia = Object
  .keys(SocialMedia)
  .filter((item) => isNaN(Number(item)))
  .map((item) => item as SocialMedia);

export default SupportedSocialMedia;
