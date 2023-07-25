import Head from "next/head";
import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

import Button from "../Button";

export default function RestrictedPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5">
      <Head>
        <title>Login dulu</title>
      </Head>
      <Image
        src={"/assets/restricted.svg"}
        alt="resricted"
        width={200}
        height={200}
      />

      <h1 className="text-4xl font-bold">Login dulu yah</h1>
      <h2 className="text-lg">
        Untuk mengakses halaman ini, kamu wajib login terlebihdahulu
      </h2>
      <Button onClick={signIn} text="Login" />
    </div>
  );
}
