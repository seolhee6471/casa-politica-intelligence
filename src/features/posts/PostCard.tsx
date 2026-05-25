import Link from "next/link";
import type { Post } from "@/types";
import { formatDate } from "@/utils/formatDate";

type PostCardProps = {
  post: Post;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="rounded-xl border border-zinc-200 p-5 transition-shadow hover:shadow-md dark:border-zinc-800">
      <time className="text-xs text-zinc-500">{formatDate(post.publishedAt)}</time>
      <h3 className="heading mt-2 text-lg">
        <Link href={`/posts/${post.slug}`} className="hover:underline">
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 line-clamp-2 text-sm text-zinc-600 dark:text-zinc-400">
        {post.excerpt}
      </p>
    </article>
  );
}
