"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
// import Logo from "../../../public/img/logo.svg";
import { ThemeToggle } from "../theme-toggle";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import NavbarMobile from "./NavbarMobile";
import {
  EarthIcon,
  Languages,
  LanguagesIcon,
  LucideLanguages,
} from "lucide-react";
import Logo from "../Logo";

const links = [
  { name: "Vår Kompetanse", href: "/", description: "pfierjpoiwjefipoj" },
  { name: "Prosjekter", href: "/about", description: "pfierjpoiwjefipoj" },
  { name: "Om Oss", href: "/contact", description: "pfierjpoiwjefipoj" },
];

const languages = [
  { name: "Norsk", code: "no" },
  { name: "English", code: "en" },
];
// test
function Navbar() {
  return (
    <nav className="relative flex justify-between border-b border-gray-200 bg-background py-4 pl-4 dark:border-gray-600 md:mx-12 md:overflow-visible md:pl-0 lg:mx-24">
      <div className="flex">
        <Link href="/" className="flex items-center">
          <Logo className="-ml-2 h-8 w-full fill-primary" />
        </Link>
      </div>
      <div className="flex flex-row-reverse items-center md:flex-row">
        <div className="hidden md:flex">
          {links.map((link, index) => (
            <Button key={index} variant={"link"}>
              <Link href={link.href}>{link.name}</Link>
            </Button>
          ))}
        </div>

        <div className="md:hidden">
          <NavbarMobile />
        </div>
        <ThemeToggle />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"link"} className="px-3 py-2" aria-hidden>
              <Languages />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mt-0.5">
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.code} asChild>
                <Link href="#" className="relative px-4 py-2">
                  {lang.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </nav>
  );
}

export default Navbar;
