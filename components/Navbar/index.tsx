import React from "react";
import InputSearch, { Input } from "../ui/input";

import { IBM_Plex_Mono } from "next/font/google";
import Linkedin from "@/icons/linkedin";
import Github from "@/icons/github";
const ibm = IBM_Plex_Mono({
  weight: ["300", "400", "500", "700", "100", "200"],
  subsets: ["latin"],
  preload: true,
});

function Navbar() {
  return (
    <div
      className={
        ibm.className +
        " flex flex-col w-full items-center px-32 py-0 relative bg-bg-1 overflow-hidden"
      }
    >
      <div className="flex border-b border-gray-50/10 items-center justify-between px-0 py-10 relative self-stretch w-full flex-[0_0_auto]">
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-logo-m font-[number:var(--logo-m-font-weight)] text-brand-1 text-[length:var(--logo-m-font-size)] tracking-[var(--logo-m-letter-spacing)] leading-[var(--logo-m-line-height)] whitespace-nowrap [font-style:var(--logo-m-font-style)]">
            {"<C/>"}
          </div>

          <div className="relative w-fit mt-[-1.00px] font-logo-m text-white text-[length:var(--logo-m-font-size)] tracking-[var(--logo-m-letter-spacing)] leading-[var(--logo-m-line-height)] whitespace-nowrap [font-style:var(--logo-m-font-style)]">
            Francy Malonga
          </div>
        </div>

        <div className="inline-flex items-center gap-16 relative flex-[0_0_auto]">
          {/* Links */}
          <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-menu-m font-[number:var(--menu-m-font-weight)] text-brand-1 text-[length:var(--menu-m-font-size)] tracking-[var(--menu-m-letter-spacing)] leading-[var(--menu-m-line-height)] whitespace-nowrap [font-style:var(--menu-m-font-style)]">
              Home
            </div>
            <div className="relative w-fit mt-[-1.00px] font-menu-m font-[number:var(--menu-m-font-weight)] text-white text-[length:var(--menu-m-font-size)] tracking-[var(--menu-m-letter-spacing)] leading-[var(--menu-m-line-height)] whitespace-nowrap [font-style:var(--menu-m-font-style)]">
              Blogs
            </div>
          </div>

          {/* Input search */}
          <div className="inline-flex items-center gap-16 relative flex-[0_0_auto]">
            <InputSearch />

            <div className="inline-flex items-start gap-8 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <Linkedin />
                <div className="relative w-fit mt-[-1.00px] font-media-m font-[number:var(--media-m-font-weight)] text-white text-[length:var(--media-m-font-size)] tracking-[var(--media-m-letter-spacing)] leading-[var(--media-m-line-height)] whitespace-nowrap [font-style:var(--media-m-font-style)]">
                  Linkedin
                </div>
              </div>
              {/* Discord */}
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <Github />
                <div className="relative w-fit mt-[-1.00px] font-media-m font-[number:var(--media-m-font-weight)] text-white text-[length:var(--media-m-font-size)] tracking-[var(--media-m-letter-spacing)] leading-[var(--media-m-line-height)] whitespace-nowrap [font-style:var(--media-m-font-style)]">
                  Github
                </div>
              </div>

              {/* <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Linkedin/>
                <div className="relative w-fit mt-[-1.00px] font-media-m font-[number:var(--media-m-font-weight)] text-white text-[length:var(--media-m-font-size)] tracking-[var(--media-m-letter-spacing)] leading-[var(--media-m-line-height)] whitespace-nowrap [font-style:var(--media-m-font-style)]">
                  Discord
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
