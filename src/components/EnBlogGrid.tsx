import type { Post } from "@/lib/blog";
import {
  POSTS_PER_ARCHIVE_PAGE,
  PaginatedBlogGrid,
  blogPagePath,
} from "@/components/PaginatedBlogGrid";

export const EN_POSTS_PER_PAGE = POSTS_PER_ARCHIVE_PAGE;

/** Chemin d'une page de la liste EN (page 1 = /en/blog). */
export function enBlogPagePath(page: number): string {
  return blogPagePath("en", page);
}

type Props = {
  posts: Post[];
  currentPage: number;
  totalPages: number;
};

/** Grille EN : enveloppe locale de PaginatedBlogGrid. */
export function EnBlogGrid(props: Props) {
  return <PaginatedBlogGrid {...props} locale="en" />;
}
