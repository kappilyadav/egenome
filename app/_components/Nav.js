'use client'

import React, {useState} from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";
// import {eGenomeLogo} from "./eGenomeLogo.jsx";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    '',
    'How It Works',
    'Why eGenome',
    'Take Health Assessment'
  ];

  return (
    <div className="flex items-center justify-center w-full">
        <Navbar onMenuOpenChange={setIsMenuOpen} className="fixed top-14 mx-auto flex items-center justify-evenly bg-white rounded-3xl shadow-md overflow-hidden w-fit">
            <NavbarContent justify="start">
                <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                className="sm:hidden"
                />
                <NavbarBrand>
                {/* <eGenomeLogo /> */}
                <p className="font-bold text-inherit">eGenome.ai</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4 mx-4 md:mx-8 lg:mx-28" justify="center">
                <NavbarItem>
                <Link color="foreground" href="#">
                    How It Works
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link href="#" aria-current="page">
                    Why eGenome
                </Link>
                </NavbarItem>
                <NavbarItem>
                <Link color="foreground" href="#">
                    Take Health Assessment
                </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent justify="end">
                <NavbarItem>
                <Button as={Link} color="primary" href="#" variant="bordered" className="rounded-3xl">
                    Login
                </Button>
                </NavbarItem>
                <NavbarItem>
                <Button as={Link} href="#" variant="flat" className="bg-primary text-white rounded-3xl">
                    Get Started
                </Button>
                </NavbarItem>
            </NavbarContent>

            <NavbarMenu>
                {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                    <Link
                    color={
                        index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
                    }
                    className="w-full"
                    href="#"
                    size="lg"
                    >
                    {item}
                    </Link>
                </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    </div>
  );
}