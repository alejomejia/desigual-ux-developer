import type { ReactNode } from "react";

import { cn } from "@/lib/utils/helpers";

import { useTabs } from "./hooks/use-tabs";

type TabTriggerProps = {
  value: string
  children: ReactNode
}

export function TabTrigger({ value, children }: TabTriggerProps) {
  const { activeTab, updateTab } = useTabs();
  const isActive = activeTab === value;

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      className={cn(
        "cursor-pointer border-b pb-0.5 text-nowrap",
        "uppercase text-xs",
        {
          "border-b-brand-black": isActive,
          "border-b-transparent": !isActive
        }
      )}
      onClick={() => updateTab(value)}
    >
      {children}
    </button>
  );
}