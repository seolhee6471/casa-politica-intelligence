/** public/icons 정적 SVG URL */
export const iconPaths = {
  file: "/icons/file.svg",
  globe: "/icons/globe.svg",
  next: "/icons/next.svg",
  vercel: "/icons/vercel.svg",
  window: "/icons/window.svg",
  logo_navbar: "/icons/logo_nav2.png",
} as const;

export type IconPath = (typeof iconPaths)[keyof typeof iconPaths];
