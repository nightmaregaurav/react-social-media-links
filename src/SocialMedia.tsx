import {JSX} from "react";
import IconProps from "./IconProps";
import Other from "./Icons/Other";
import OtherHover from "./Icons/OtherHover";
import Facebook from "./Icons/Facebook";
import FacebookHover from "./Icons/FacebookHover";
import Instagram from "./Icons/Instagram";
import InstagramHover from "./Icons/InstagramHover";
import LinkedIn from "./Icons/LinkedIn";
import LinkedInHover from "./Icons/LinkedInHover";
import GitHub from "./Icons/GitHub";
import GitHubHover from "./Icons/GitHubHover";
import X from "./Icons/X";
import XHover from "./Icons/XHover";
import Snapchat from "./Icons/Snapchat";
import SnapchatHover from "./Icons/SnapchatHover";
import Spotify from "./Icons/Spotify";
import SpotifyHover from "./Icons/SpotifyHover";
import Medium from "./Icons/Medium";
import MediumHover from "./Icons/MediumHover";
import PayPal from "./Icons/PayPal";
import PayPalHover from "./Icons/PayPalHover";
import YouTube from "./Icons/YouTube";
import YouTubeHover from "./Icons/YouTubeHover";
import TikTok from "./Icons/TikTok";
import TikTokHover from "./Icons/TikTokHover";
import Pinterest from "./Icons/Pinterest";
import PinterestHover from "./Icons/PinterestHover";
import Reddit from "./Icons/Reddit";
import RedditHover from "./Icons/RedditHover";
import Threads from "./Icons/Threads";
import ThreadsHover from "./Icons/ThreadsHover";
import Orcid from "./Icons/Orcid";
import OrcidHover from "./Icons/OrcidHover";
import Gravatar from "./Icons/Gravatar";
import GravatarHover from "./Icons/GravatarHover";
import StackOverflow from "./Icons/StackOverflow";
import StackOverflowHover from "./Icons/StackOverflowHover";
import Tumblr from "./Icons/Tumblr";
import TumblrHover from "./Icons/TumblrHover";
import Mastodon from "./Icons/Mastodon";
import MastodonHover from "./Icons/MastodonHover";
import WordPress from "./Icons/WordPress";
import WordPressHover from "./Icons/WordPressHover";

interface SocialMediaIcon {
  normal: (props: IconProps) => JSX.Element;
  hover: (props: IconProps) => JSX.Element;
}

enum SocialMedia {
  Other = "Other",
  Facebook = "Facebook",
  Instagram = "Instagram",
  LinkedIn = "LinkedIn",
  GitHub = "GitHub",
  X = "X",
  Snapchat = "Snapchat",
  Spotify = "Spotify",
  Medium = "Medium",
  PayPal = "PayPal",
  YouTube = "YouTube",
  TikTok = "TikTok",
  Pinterest = "Pinterest",
  Reddit = "Reddit",
  Threads = "Threads",
  Orcid = "Orcid",
  Gravatar = "Gravatar",
  StackOverflow = "StackOverflow",
  Tumblr = "Tumblr",
  Mastodon = "Mastodon",
  WordPress = "WordPress",
}

export default SocialMedia;

export const SocialMediaIcons: { [key in SocialMedia]: SocialMediaIcon } = {
  [SocialMedia.Other]: {
    normal: Other,
    hover: OtherHover,
  },
  [SocialMedia.Facebook]: {
    normal: Facebook,
    hover: FacebookHover,
  },
  [SocialMedia.Instagram]: {
    normal: Instagram,
    hover: InstagramHover,
  },
  [SocialMedia.LinkedIn]: {
    normal: LinkedIn,
    hover: LinkedInHover,
  },
  [SocialMedia.GitHub]: {
    normal: GitHub,
    hover: GitHubHover,
  },
  [SocialMedia.X]: {
    normal: X,
    hover: XHover,
  },
  [SocialMedia.Snapchat]: {
    normal: Snapchat,
    hover: SnapchatHover,
  },
  [SocialMedia.Spotify]: {
    normal: Spotify,
    hover: SpotifyHover,
  },
  [SocialMedia.Medium]: {
    normal: Medium,
    hover: MediumHover,
  },
  [SocialMedia.PayPal]: {
    normal: PayPal,
    hover: PayPalHover,
  },
  [SocialMedia.YouTube]: {
    normal: YouTube,
    hover: YouTubeHover,
  },
  [SocialMedia.TikTok]: {
    normal: TikTok,
    hover: TikTokHover,
  },
  [SocialMedia.Pinterest]: {
    normal: Pinterest,
    hover: PinterestHover,
  },
  [SocialMedia.Reddit]: {
    normal: Reddit,
    hover: RedditHover,
  },
  [SocialMedia.Threads]: {
    normal: Threads,
    hover: ThreadsHover,
  },
  [SocialMedia.Orcid]: {
    normal: Orcid,
    hover: OrcidHover,
  },
  [SocialMedia.Gravatar]: {
    normal: Gravatar,
    hover: GravatarHover,
  },
  [SocialMedia.StackOverflow]: {
    normal: StackOverflow,
    hover: StackOverflowHover,
  },
  [SocialMedia.Tumblr]: {
    normal: Tumblr,
    hover: TumblrHover,
  },
  [SocialMedia.Mastodon]: {
    normal: Mastodon,
    hover: MastodonHover,
  },
  [SocialMedia.WordPress]: {
    normal: WordPress,
    hover: WordPressHover,
  }
}
