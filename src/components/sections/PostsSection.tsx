"use client";

import { PostList } from "@/features/posts";
import { useLocaleMessage } from "@/i18n";
import type { Post } from "@/types";

type PostsSectionProps = {
  posts: Post[];
};

export function PostsSection({ posts }: PostsSectionProps) {
  const { $localeMessage } = useLocaleMessage();

  return (
    <section>
      <h2 className="heading mb-6 text-xl text-brand-navy">
        {$localeMessage("home.recentPosts")}
      </h2>
      <PostList posts={posts} />
    </section>
  );
}
