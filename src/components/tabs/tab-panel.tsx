import type { ReactNode } from "react";

import { useTabs } from "./hooks/use-tabs";

type TabPanelProps = {
  value: string
  className?: string
  children: ReactNode
}

export function TabPanel({ value, className, children }: TabPanelProps) {
  const { activeTab } = useTabs();

  if (activeTab !== value) return null;

  return (
    <div role="tabpanel" className={className}>
      {children}
    </div>
  );
}