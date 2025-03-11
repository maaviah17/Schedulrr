import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { PenBox } from "lucide-react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import UserMenu from "./user-menu";

const Header=()=>{
    return <nav className="bg-white mx-auto py-2 px-4 flex justify-between items-center shadow-md border-b-2">
        <Link href={"/"} className="flex items-center">
            <Image src="/logo.png" width="150" height="60" alt="schedulrr logo" className="h-16 w-auto" /> 
        </Link>

        <div className="flex items-center gap-4 ">
            <Link href="/events?create=true">
                <Button className="flex items-center gap-2"><PenBox size={18}/> Create Event</Button>
            </Link>

            <SignedOut>
                <SignInButton forceRedirectUrl="/dashboard">
                <Button
                className="bg-gradient-to-r from-[#1F1C2C] via-[#928DAB] to-[#1F1C2C] bg-[length:200%_auto] transition-all duration-500 text-white uppercase shadow-lg rounded-lg px-6 py-3 m-2 hover:bg-[position:right_center]"
                >
                Login   
                </Button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserMenu />
            </SignedIn>
            
            
        </div>
  </nav>
}

export default Header;