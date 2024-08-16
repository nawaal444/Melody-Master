'use client'
import React, { act, useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
const Navbar = ({ className }: { className?: string }) => {
    const [active, setActive] = useState<string | null>(null);
  return (
    <div className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}>
        <Menu setActive={setActive}>
            <Link href={"/"}>
            <MenuItem setActive={setActive} active={active} item="Home">
            </MenuItem>
            </Link>
            <MenuItem setActive={setActive} active={active} item="Services">
            <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/courses">Piano Basics</HoveredLink>
            <HoveredLink href="/courses">Music Theory 101</HoveredLink>
            <HoveredLink href="/courses">Jazz Improvisation</HoveredLink>
            <HoveredLink href="/courses">Guitar Fundamentals</HoveredLink>
            <HoveredLink href="/courses">Songwriting Workshop</HoveredLink>
            </div>
            </MenuItem>
            <Link href={"/ContactUs"}>
            <MenuItem setActive={setActive} active={active} item="Contact us">
            </MenuItem>
            </Link>
        </Menu>
    </div>
  )
}

export default Navbar
