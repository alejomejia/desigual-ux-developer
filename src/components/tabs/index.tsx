"use client"

import { type ReactNode, useState } from "react";

import { TabsContext } from "./hooks/use-tabs";
import { TabList } from "./tab-list";
import { TabPanel } from "./tab-panel";
import { TabTrigger } from "./tab-trigger";

type TabsProps = {
  children: ReactNode
  defaultValue: string
}

export function Tabs({ children, defaultValue }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultValue);

  const updateTab = (newTab: string) => setActiveTab(newTab)

  return (
    <TabsContext.Provider value={{ activeTab, updateTab }}>
      {children}
    </TabsContext.Provider>
  );
}

Tabs.List = TabList
Tabs.Tab = TabTrigger
Tabs.Panel = TabPanel