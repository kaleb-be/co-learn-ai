import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavItems from "@/components/NavItems";

const NavBar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer">
          <Image src={"/images/logo.svg"} alt={"logo"} width={46} height={44} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavItems />
        <div className="flex items-center gap-4">
          <SignedIn>
            <UserButton />
          </SignedIn>
          <p></p>
          <SignedOut>
            <div className="flex gap-2">
              <SignInButton mode="modal">
                <button className="btn-signin">Sign in</button>
              </SignInButton>
            </div>
          </SignedOut>
        </div>
      </div>
    </nav>
  );
};
export default NavBar;