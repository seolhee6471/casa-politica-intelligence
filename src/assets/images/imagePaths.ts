/** public/images 정적 이미지 URL (파일 추가 시 여기 경로 등록) */
export const imagePaths = {
  dataFlow: "/images/data_flow.jpg",
  // hero: { banner: "/images/hero/banner.webp" },
  // posts: { thumbnail: "/images/posts/thumbnail.webp" },
} as const;

/** `public/images` 기준 상대 경로 → URL */
export function imageUrl(path: string): string {
  const normalized = path.replace(/^\//, "");
  return normalized.startsWith("images/")
    ? `/${normalized}`
    : `/images/${normalized}`;
}
