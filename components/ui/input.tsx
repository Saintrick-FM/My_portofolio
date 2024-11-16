import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button";
import Image from "next/image";
import SearchIcon from "@/icons/search";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps | any>(
  ({ className, icon, customStyles, ...props }, ref) => {
    return (
      <>
        {icon && (
          <Image
            className="absolute top-1"
            style={{ left: "4px" }}
            src={`/assets/images/${icon}.png`}
            width={32}
            height={32}
            alt="Icon"
          />
        )}
        <input
          type={props.type}
          className={cn(
            "flex h-10 w-full rounded-md border pl-[10px] border-input px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-transparent focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            // styles.input,
            className
          )}
          placeholder={props.placeholder || ""}
          required={props.required ? true : false}
          ref={ref}
          {...props}
          style={{
            paddingLeft: icon ? "45px !important" : "0",
            ...customStyles,
          }}
          defaultValue={props.defaultValue}
        />
        {props.placeholder === "milliseconds" && (
          <Button
            variant={"default"}
            className="flex absolute top-[7.5px] right-0 justify-center items-center px-1 mr-1  w-[25px] h-[21px] p-[5px] text-[12px] rounded-[4px] border-[0px] "
          >
            ms
          </Button>
        )}
      </>
    );
  }
);
Input.displayName = "Input";

export { Input };

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/xy6MpYtkczL
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */

export default function InputSearch() {
  return (
    <div className="flex justify-between items-center bg-white w-[204px] pr-4 py-1.5 rounded-3xl">
      <input
          
          className={
            "flex h-full w-full justify-center items-center ml-4 bg-transparent  placeholder:text-bg-2 focus-visible:outline-none  focus-visible:ring-transparent focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:text-bg-2 "
            
          } type="search" />
          <SearchIcon className="h-auto w-auto mr-2.5" />
    </div>
  )
}

