import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

import Button from "./Button";

export default function Menu() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-between py-5">
      <Image
        src={"/assets/jujurly.svg"}
        width={100}
        height={100}
        alt="jujurly"
        onClick={() => router.push("/")}
        className={"cursor-pointer"}
      />
      {session ? (
        <div className="space-x-3">
          <span>{session?.user?.name}</span>
          <Button text="Logout" onClick={signOut} />
        </div>
      ) : (
        <Button text="Login" onClick={signIn} />
      )}

      {/* {session ? (
        <div className="space-x-3">
          <span>{session?.user?.name}</span>
          <Button text="Logout" onClick={signOut} />
        </div>
      ) : (
        <Button text="Login" onClick={signIn} />
      )} */}
    </div>
  );
}
