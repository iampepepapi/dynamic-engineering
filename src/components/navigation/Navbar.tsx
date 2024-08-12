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
        <nav className=" border-b bg-background border-gray-200 dark:border-gray-600 md:mx-12 lg:mx-24  h-12  justify-between flex">
            <Link
                href="/"
                className="flex items-center space-x-3 rtl:space-x-reverse "
            >
                <Logo className="pl-4 fill-primary h-12" />
            </Link>
            <div className="flex items-center  flex-row-reverse md:flex-row">
                <div className="hidden md:flex">
                    {links.map((link, index) => (
                        <Button key={index} variant={"link"}>
                            <Link href={link.href}>{link.name}</Link>
                        </Button>
                    ))}
                </div>
                <div className="md:hidden ">
                    <NavbarMobile />
                </div>
                <ThemeToggle />
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button
                            variant={"link"}
                            className="py-2 px-3 "
                            aria-hidden
                        >
                            <Languages />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="mt-0.5">
                        {languages.map((lang) => (
                            <DropdownMenuItem key={lang.code} asChild>
                                <Link href="#" className="relative py-2 px-4">
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
