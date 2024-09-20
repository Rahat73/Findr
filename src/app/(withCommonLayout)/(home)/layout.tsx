import { ReactNode } from "react";

export default function layout({
  children,
  "recent-posts": recentPosts,
}: {
  children: ReactNode;
  "recent-posts": ReactNode;
}) {
  return (
    <>
      {children}
      {recentPosts}
    </>
  );
}
