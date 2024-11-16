"use client";

import Image from "next/image";
import { NavigationBar } from "../leftNavigation";

function Home() {

  const LeftPresentation = (
    <div className=" flex w-80 h-auto flex-col justify-center items-start gap-4 border-[color:var(--White,#FFF)] bg-bg-1 shadow-[-4px_-4px_2px_0px_#12F7D6] p-6 rounded-[160px_0px] border-4 border-solid">
      <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto] mr-[-2.00px]">
        <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
          <div className="relative w-24 h-24 flex-[0_0_auto] mt-[-3.00px] rounded-[64px] border-[3px]  bg-[url(/images/profile_photo.png)] bg-cover bg-[50%_50%]" />

          <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-logo-m font-[number:var(--logo-m-font-weight)] text-white text-[length:var(--logo-m-font-size)] tracking-[var(--logo-m-letter-spacing)] leading-[var(--logo-m-line-height)] whitespace-nowrap [font-style:var(--logo-m-font-style)]">
              Francy
            </div>
            <div className="relative w-fit font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
              Web developer
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
          <div className="flex-col items-start inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="w-3.5 h-3.5 bg-[url(/icon-mail.svg)] relative bg-[100%_100%]" />
              <input
                className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)] [background:transparent] border-[none] p-0"
                placeholder="francymalonga8@gmail.com"
                type="email"
              />
            </div>
            <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="relative w-3.5 h-3.5 bg-[url(/icon-map-pin.svg)] bg-[100%_100%]" />
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                Republic of Congo
              </div>
            </div>
            {/* <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
          <div className="w-3.5 h-3.5 bg-[url(/icon-briefcase.svg)] relative bg-[100%_100%]" />
          <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
            Full-time / Web dev
          </div>
        </div> */}
            <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="w-3.5 h-3.5 bg-[url(/icon-link.svg)] relative bg-[100%_100%]" />
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                www.francy-malo.com
              </div>
            </div>
          </div>
          <div className="items-start inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                HTML
              </div>
            </div>
            <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                CSS
              </div>
            </div>
            <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                JS
              </div>
            </div>
            <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
                REACT
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="all-[unset] box-border inline-flex flex-col items-center relative flex-[0_0_auto]">
        <button className="all-[unset] box-border inline-flex items-center justify-center gap-4 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[32px]">
          <div className="relative w-fit mt-[-1.00px] font-button-u font-[number:var(--button-u-font-weight)] text-bg-1 text-[length:var(--button-u-font-size)] tracking-[var(--button-u-letter-spacing)] leading-[var(--button-u-line-height)] whitespace-nowrap [font-style:var(--button-u-font-style)]">
            Download Cv
          </div>
          <div className="w-6 h-6 bg-[url(/icon-download.svg)] relative bg-[100%_100%]" />
        </button>
      </button>
    </div>
  );

  const title = (
    <div className="flex flex-col items-center justify-center  relative flex-1 grow">
      <div className="flex items-center justify-center relative self-stretch w-full flex-[0_0_auto] text-[color:var(--Brand-2,#98FAEC)] [font-family:Ubuntu] text-[60px] font-normal leading-[134px] capitalize ">
        Web Developer
      </div>
    </div>
  );

  return (
    <div className="!relative flex max-h-screen flex-col w-full h-auto">
        <div className="fixed top-[140px] z-10 left-8 w-auto h-auto">

        <NavigationBar/>
        </div>
{title}
    <div
      className={
          "flex items-start justify-between w-full pt-4 pb-32 px-32 relative bg-bg-1"
        }
        >
      {LeftPresentation}
      <div className="">Francy</div>
    </div>
        </div>
  );
}
export default Home;
