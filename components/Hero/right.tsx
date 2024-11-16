import React from "react";
import profilePhoto from "./profile-photo.png";

export const RightPart = (): JSX.Element => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-[50px_128px]  py-0 relative">
      <div className="flex items-center justify-start pl-8 pr-2  relative flex-[0_0_auto]">
        <div className="flex gap-4 w-[65%] flex-col items-start relative flex-[0_0_auto]">
          {/* Head title */}
          <div className='text-[color:var(--Brand-2,#98FAEC)] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
        
            &lt;h1&gt;
          </div>
        

         
          <div className="flex flex-col items-start px-4 py-0 relative">
            <div className="text-[color:var(--White,var(--White,#FFF))] [font-family:Ubuntu] text-[50px] font-normal leading-[60px] capitalize">
              Hey
            </div>
            <p className="relative w-fit font-h1-u  text-transparent  tracking-[var(--h1-u-letter-spacing)]  whitespace-nowrap [font-style:var(--h1-u-font-style)]">
              <span className="text-white [font-family:Ubuntu] text-[50px] font-normal leading-[60px] capitalize">
                I’m
              </span>
              <span className="text-[color:var(--Brand-1,var(--White,#12F7D6))] [font-family:Ubuntu] text-[50px] font-normal leading-[60px] capitalize ml-2">
                Francy
              </span>
              <span className="text-[#ffffff] font-h1-u [font-style:var(--h1-u-font-style)]  tracking-[var(--h1-u-letter-spacing)]  ">
                ,
              </span>
            </p>
            <div className="inline-flex items-baseline gap-4 relative flex-[0_0_auto]">
              <div className="text-[color:var(--White,var(--White,#FFF))] [font-family:Ubuntu] text-[50px] font-normal leading-[60px] capitalize">
                Web developer
              </div>
              <div className='text-[color:var(--Brand-2,#98FAEC)] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
                &lt;/h1&gt;
              </div>
            </div>
          </div>
  {/* End Head title */}
           {/* About me */}
           <div className="flex  flex-col gap-2 justify-center items-start">
           <div className='text-[color:var(--Brand-2,#98FAEC)] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
                
                &lt;/p&gt;
              </div>
              <p className='max-w-[85%] pl-8  text-[color:var(--White,var(--White,#FFF))] [font-family:"IBM_Plex_Mono"] text-base font-normal leading-5'>
              I help business grow by crafting amazing web experiences.<br/> If you’re looking for  a developer  that likes to get stuff done.
              </p>
           <div className='text-[color:var(--Brand-2,#98FAEC)] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
                
                &lt;/p&gt;
              </div>
              </div>
          {/* About me */}
        </div>

        <div className="flex-col items-start justify-center gap-12 px-6 py-12 bg-bg-2 rounded-[75px] shadow-[2px_2px_4px_#00000040] inline-flex relative flex-[0_0_auto]">
          <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
            <div className='text-[color:var(--Brand-1,#12F7D6)] [font-family:"IBM_Plex_Mono"] text-5xl font-medium leading-[62px] capitalize'>
              2
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
                Programming
              </div>
              <div className="relative w-fit font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
                Language
              </div>
            </div>
          </div>
          <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
            <div className='text-[color:var(--Brand-1,#12F7D6)] [font-family:"IBM_Plex_Mono"] text-5xl font-medium leading-[62px] capitalize'>
              4
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
              frameworks
              </div>
              <div className="relative w-fit font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
                (   Front and Back)
              </div>
            </div>
          </div>
          <div className="items-center gap-4 inline-flex relative flex-[0_0_auto]">
            <div className='text-[color:var(--Brand-1,#12F7D6)] [font-family:"IBM_Plex_Mono"] text-5xl font-medium leading-[62px] capitalize'>
              3
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
                Years of
              </div>
              <div className="relative w-fit font-para-m font-[number:var(--para-m-font-weight)] text-white text-[length:var(--para-m-font-size)] tracking-[var(--para-m-letter-spacing)] leading-[var(--para-m-line-height)] whitespace-nowrap [font-style:var(--para-m-font-style)]">
                Experience
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
