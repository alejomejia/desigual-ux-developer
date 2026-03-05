import type { ReactNode } from "react";

type TabListProps = {
  children: ReactNode
}

export function TabList({ children }: TabListProps) {
  return <div className="w-fit flex gap-5 overflow-x-auto pb-1" role="tablist">{children}</div>;
}