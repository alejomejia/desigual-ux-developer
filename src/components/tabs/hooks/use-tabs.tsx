"use client"

import { createContext, useContext } from "react";

type TabsContext = {
  activeTab: string
  updateTab: (newTab: string) => void
}

export const TabsContext = createContext<TabsContext | null>(null);

export function useTabs() {
  const ctx = useContext(TabsContext);
  if (!ctx) throw new Error("Tabs subcomponents must be used within <Tabs>");

  return ctx;
};