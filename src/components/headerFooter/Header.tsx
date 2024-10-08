"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
const Header = () => {
  const router = useRouter();
  const { isLoggedIn, setIsLoggedIn } = useAuth();
  const logout = () => {
    setIsLoggedIn(false);
    router.push("/");
  };
  return (
    <header className="flex justify-between items-center p-4 bg-pink-500">
      <div className="flex items-center">
        <Image src="/logo.png" alt="Logo" width={100} height={100} />
      </div>
      <nav>
        {isLoggedIn ? (
          <>
            <Link href="/dashboard" className="mr-4">
              Profile
            </Link>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <Button onClick={() => setIsLoggedIn(true)}>Login</Button>
        )}
      </nav>
    </header>
  );
};

export default Header;
