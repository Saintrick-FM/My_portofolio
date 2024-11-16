import Blog from "@/icons/blog";
import Code from "@/icons/code";
import Home from "@/icons/home";
import LeftNavMail from "@/icons/leftNavMail";
import User from "@/icons/user";
import Work from "@/icons/work";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

type NavLabels = "Home" | "User" | "Work" | "Code" | "Blog" | "LeftNavMail";
type NavItems = Record<NavLabels, {isActive:boolean, hoverText:string}>;

export const NavigationBar = (): JSX.Element => {
  const [navItems, setNavItems] = useState<NavItems>({
    Home: {isActive:true, hoverText:"Home"},
    User: {isActive:false, hoverText:"User"},
    Code: {isActive:false, hoverText:"Code"},
    Work: {isActive:false, hoverText:"Work"},
    Blog: {isActive:false, hoverText:"Blog"},
    LeftNavMail: {isActive:false, hoverText:"LeftNavMail"},
  });

  // Toggle active navigation item
  const toggleActiveItem = (currentItem: NavLabels) => {
    setNavItems((prev) => {
      // Reset all to false, then set the currentItem to true
      const updatedNav = Object.keys(prev).reduce(
        (acc, key) => ({
          ...acc,
          [key]: {...[key],isActive: key === currentItem},
        }),
        {} as NavItems
      );
      return updatedNav;
    });
  };

  return (
    <div className="flex-col gap-6 px-3 py-2 bg-bg-2 border border-solid border-white inline-flex items-start relative rounded-[40px]">
      <div
        className={cn("flex p-2 flex-[0_0_auto] w-auto h-auto items-start relative rounded-[40px]",navItems["Home"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("Home")}
      >
        <Home isActive={navItems.Home["isActive"]} />
      </div>
      <div
        className={cn("inline-flex items-start  p-2 relative flex-[0_0_auto] rounded-[40px]",navItems["User"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("User")}
      >
        <User isActive={navItems.User["isActive"]} />
      </div>
      <div
        
        className={cn("inline-flex items-start p-2 relative flex-[0_0_auto] rounded-[40px]",navItems["Code"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("Code")}
      >
        <Code isActive={navItems.Code["isActive"]} />
      </div>
      <div
        className={cn("inline-flex items-start p-2 relative flex-[0_0_auto] rounded-[40px]",navItems["Work"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("Work")}
      >
        <Work isActive={navItems.Work["isActive"]} />
      </div>
      <div
        className={cn("inline-flex items-start p-2 relative flex-[0_0_auto] rounded-[40px]",navItems["Blog"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("Blog")}
      >
        <Blog isActive={navItems.Blog["isActive"]} />
      </div>
      <div
        className={cn("inline-flex items-start p-2 relative flex-[0_0_auto] rounded-[40px]",navItems["LeftNavMail"].isActive?"bg-white":"bg-bg-2")}
        onClick={() => toggleActiveItem("LeftNavMail")}
      >
        <LeftNavMail isActive={navItems.LeftNavMail["isActive"]} />
      </div>
    </div>
  );
};
