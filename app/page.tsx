"use client"

import * as React from "react"
import ToggleTheme from "@/components/ToggleTheme"
import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"

export default function Home() {
  

  return (
  <div className="flex flex-col items-center justify-center">
    <header className="w-full"><Navbar/></header>
    <main className="w-full bg-bg-1"><Hero/></main>
    <footer>Footer</footer>
  </div>
  )
}
