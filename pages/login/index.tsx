import Head from "next/head";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useSession, getProviders, signIn } from "next-auth/react";
import { useRouter } from "next/router";

export default function Login({ providers }: any) {
  const { data: session } = useSession();
  const router = useRouter();

  if (session) {
    router.push("/");
  }

  return (
    <div className="flex flex-col items-center justify-center container h-screen m-auto">
      <Head>
        <title>Login</title>
      </Head>

      <Link href={"/"} className="text-6xl mb-10 font-bold">
        Jujurly
      </Link>
      <div className="w-1/3">
        {Object.values(providers).map((provider: any) => (
          <button
            key={provider.id}
            className="inline-flex gap-x-3 justify-center items-center bg-white py-2 w-full border-2 border-black font-medium hover:bg-black hover:text-white transition"
            onClick={() => signIn(provider.id)}
          >
            {provider.name === "Google" && (
              <Image
                src={"/assets/google.svg"}
                alt="Google icon"
                width={18}
                height={18}
              />
            )}
            Login dengan {provider.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
