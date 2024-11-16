"use client"

import { changeTheme } from "@/utils/helper"

const HandleThemeSwiching = ()=>{
    return  <div>
    <button className='py-2 px-8 bg-bg-1 text-foreground m-2' onClick={() => changeTheme("black")}>Default</button>
    <button className='py-2 px-8 bg-brand-2 text-foreground m-2' onClick={() => changeTheme("black")}>theme black</button>
    <button className='py-2 px-8 bg-brand-1 text-foreground m-2' onClick={() => changeTheme("white")}>theme white</button>
  </div>
}
export default HandleThemeSwiching