import type { ReactNode } from "react";

type TabListProps = {
  children: ReactNode
}

export function TabList({ children }: TabListProps) {
  return <div className="flex gap-5" role="tablist">{children}</div>;
}