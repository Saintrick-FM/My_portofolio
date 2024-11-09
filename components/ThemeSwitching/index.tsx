"use client"

import { changeTheme } from "@/utils/helper"

const HandleThemeSwiching = ()=>{
    return  <div>
    <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("black")}>Default</button>
    <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("black")}>theme 1</button>
    <button className='py-2 px-8 bg-buttons text-typography m-2' onClick={() => changeTheme("white")}>theme 2</button>
  </div>
}
export default HandleThemeSwiching