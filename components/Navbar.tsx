"use client"

import * as React from "react"
import Link from "next/link"
import Image from 'next/image'

import { cn } from "@/lib/utils"
// import { Icons } from "@/components/icons"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"


export function Navbar() {
  return (
    <NavigationMenu className="min-w-full shadow-sm">
      <NavigationMenuList className="flex justify-between items-center mx-auto p-5 gap-44">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
              <NavigationMenuLink className=''>
                <h1>WINERY</h1>
              </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>  
        <NavigationMenuList className="flex justify-evenly items-center gap-3">
          <NavigationMenuItem>
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className=''>
                Red Wine
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className=''>
                White Wine
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/shop" legacyBehavior passHref>
              <NavigationMenuLink className=''>
                Sparkling Wine
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          </NavigationMenuList>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/login' legacyBehavior passHref>
                <NavigationMenuLink>
                  Login /
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/register' legacyBehavior passHref>
                <NavigationMenuLink>
                  Register
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
        </NavigationMenuList>       
      </NavigationMenuList>
            <NavigationMenuItem>
              <Link href='/cart' legacyBehavior passHref>
                <NavigationMenuLink>
                  Cart
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
