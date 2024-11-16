"use client";

import Image from "next/image";
import { NavigationBar } from "../leftNavigation";
import Link from "@/icons/link";
import Place from "@/icons/place";
import Mail from "@/icons/mail";
import Download from "@/icons/download";
import Left from "./left";
import LeftPart from "./left";
import { RightPart } from "./right";

function Home() {


  const title = (
    <div className="flex flex-col items-center justify-center  relative flex-1 grow">
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] text-[color:var(--Brand-2,#98FAEC)] [font-family:Ubuntu] text-[60px] font-normal leading-[134px] capitalize ">
        Developer
      </div>
    </div>
  );

  return (
    <div className="!relative flex max-h-screen flex-col w-full h-auto">
      <div className="fixed top-[140px] z-10 left-8 w-auto h-auto">
        <NavigationBar />
      </div>
      {title}
      <div
        className={
          "flex items-start  justify-start gap-3 w-full pt-4 pb-32 pl-[80px] relative bg-bg-1"
        }
      >
        <LeftPart/>
        <RightPart/>
      </div>
    </div>
  );
}
export default Home;
