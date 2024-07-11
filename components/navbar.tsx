import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="bg-slate-200 py-2 ">
      <div className="flex justify-between items-center container mx-auto">
        <div>
          <Link href={"/"}>
            {" "}
            <h1 className="text-sm font-bold">Star Connect</h1>
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
