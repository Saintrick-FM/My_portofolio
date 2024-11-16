import Download from "@/icons/download";
import Link from "@/icons/link";
import Mail from "@/icons/mail";
import Place from "@/icons/place";

function LeftPart() {
    return (    <div className=" ml-[120px] flex w-[330px] h-auto flex-col justify-center items-start gap-4 border-[color:var(--White,#FFF)] bg-bg-1 shadow-[-4px_-4px_2px_0px_#12F7D6] p-6 rounded-[160px_0px] border-4 border-solid">
   
    <div className="inline-flex flex-col items-center gap-8 relative flex-[0_0_auto] mr-[-2.00px]">
      <div className="inline-flex flex-col items-center gap-4 relative flex-[0_0_auto]">
        <div className="relative w-24 h-24 flex-[0_0_auto] mt-[10px] rounded-[64px] border-[3px]  bg-[url(/images/profile_photo.png)] bg-cover bg-[50%_50%]" />

        <div className="inline-flex flex-col items-center relative flex-[0_0_auto]">
          <div className='text-white [font-family:"IBM_Plex_Mono"] text-[20px] font-medium leading-[42px] capitalize'>
            Francy Malonga
          </div>
          {/* <div className="relative w-fit font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
            Web developer
          </div> */}
        </div>
      </div>

      {/* Contact */}
      <div className="inline-flex flex-col items-start gap-4 relative flex-[0_0_auto]">
        <div className="flex-col w-full items-start inline-flex gap-4 relative flex-[0_0_auto]">
          
          <div className="items-center  justify-center inline-flex gap-4 relative flex-[0_0_auto]">
          <Mail isActive={true}/>
            <span
              className='text-[color:var(--White,var(--White,#FFF))] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px] w-full'
             
            >francymalonga8@gmail.com</span>
          </div>
          <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
            <Place/>
            <span className='text-[color:var(--White,var(--White,#FFF))] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
              Republic of Congo
            </span>
          </div>
          {/* <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
        <div className="w-3.5 h-3.5 bg-[url(/icon-briefcase.svg)] relative bg-[100%_100%]" />
        <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-white text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
          Full-time / Web dev
        </div>
      </div> */}
          <div className="items-center justify-center inline-flex gap-4 relative flex-[0_0_auto]">
            
            <Link />
            <div className='text-[color:var(--White,var(--White,#FFF))] [font-family:"IBM_Plex_Mono"] text-sm font-normal leading-[18px]'>
              www.francy-malo.com
            </div>
          </div>
        </div>
        <div className="items-start inline-flex gap-4 relative flex-[0_0_auto]">
          <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
              Next.js
            </div>
          </div>
          <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
              React Native
            </div>
          </div>
          <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
              Nest.js
            </div>
          </div>
          {/* <div className="items-center justify-center px-2 py-0 bg-brand-1 rounded-lg inline-flex gap-4 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-code-m font-[number:var(--code-m-font-weight)] text-bg-1 text-[length:var(--code-m-font-size)] tracking-[var(--code-m-letter-spacing)] leading-[var(--code-m-line-height)] whitespace-nowrap [font-style:var(--code-m-font-style)]">
              CI/CD
            </div>
          </div> */}
        </div>
      </div>
    </div>

    <button className="all-[unset] my-2 box-border inline-flex flex-col items-center relative flex-[0_0_auto]">
      <button className="all-[unset] box-border inline-flex items-center justify-center gap-4 px-8 py-4 relative flex-[0_0_auto] bg-white rounded-[32px]">
        <div className="relative w-fit mt-[-1.00px] font-button-u font-[number:var(--button-u-font-weight)] text-bg-1 text-[length:var(--button-u-font-size)] tracking-[var(--button-u-letter-spacing)] leading-[var(--button-u-line-height)] whitespace-nowrap [font-style:var(--button-u-font-style)]">
          Download CV
        </div>
        {/* <div className="w-6 h-6 bg-[url(/icon-download.svg)] relative bg-[100%_100%]" /> */}
        <Download/>
      </button>
    </button>
  </div> );
}

export default LeftPart;