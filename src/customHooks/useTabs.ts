import { useState } from "react";

type UseTabsProps = {
  initialTab: Tab;
  activeStyle: string;
  inActiveStyle?: string;
};

type Tab = string;

export const useTabs = ({
  initialTab,
  activeStyle,
  inActiveStyle = "bg-gray-300",
}: UseTabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(initialTab);

  const handleTabClick = (tab: Tab) => setActiveTab(tab);

  const getTabStyle = (tab: Tab) =>
    tab === activeTab ? activeStyle : inActiveStyle;

  return {
    activeTab,
    handleTabClick,
    getTabStyle,
  };
};
