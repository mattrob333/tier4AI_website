"use client";

import { Icons } from "@/components/icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Button, buttonVariants } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Menu } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  {
    title: "Solutions",
    href: "#solutions",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export default function Header() {
  return (
    <header className="fixed top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        {/* Left Side: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="hidden font-bold sm:inline-block">
              Tier 4 AI
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          <NavigationMenu>
            <NavigationMenuList className="space-x-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.href}>
                  <NavigationMenuLink
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    href={item.href}
                  >
                    {item.title}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side: Login & CTA */}
          <div className="flex items-center space-x-2">
            <Link
              href="/login"
              className={cn(buttonVariants({ variant: "ghost" }), "sm:w-auto")}
            >
              Login
            </Link>
            <Button size="sm" asChild>
              <Link href="/signup">Get Started Free</Link>
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Navigation (Drawer) */}
        <div className="flex items-center gap-2 lg:hidden">
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="border-b pb-4">
                <Link href="/" className="flex items-center space-x-2">
                  <Icons.logo className="h-6 w-6" />
                  <span className="font-bold">Tier 4 AI</span>
                </Link>
              </DrawerHeader>
              <div className="flex flex-col gap-4 p-4">
                <nav className="grid gap-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="border-t pt-4">
                  <div className="flex flex-col gap-2">
                    <Link
                      href="/login"
                      className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "w-full justify-start")}
                    >
                      Login
                    </Link>
                    <Button size="sm" asChild className="w-full">
                      <Link href="/signup">Get Started Free</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </DrawerContent>
          </Drawer>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
