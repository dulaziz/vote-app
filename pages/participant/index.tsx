import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import RestrictedPage from "../../components/page/RestrictedPage";
import Form from "../../components/Form";
import Button from "../../components/Button";

export default function Participant() {
  const router = useRouter();

  const [code, setCode] = useState("");

  const handleSubmit = () => {
    router.push("/participant/kode-123");
  };

  const { data: session } = useSession();

  if (!session) {
    return <RestrictedPage />;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-5 container mx-auto">
      <Head>
        <title>Ikut partisipasi</title>
      </Head>

      <Image
        alt="participant"
        src={"/assets/participant.svg"}
        width={200}
        height={200}
      />
      <h1 className="text-4xl font-bold">Ikuti Voting</h1>
      <h2 className="w-1/2 text-center">
        Untuk ikutan voting, kamu harus memasukkan kode voting yang sudah di
        berikan panitia/penyelenggara
      </h2>

      <Form
        value={code}
        onChange={setCode}
        placeHolder="Masukan kode voting"
        className="w-1/3 mt-3"
      />
      <Button onClick={handleSubmit} text="Lanjutkan" className="w-1/3" />
      <button className="text-sm" onClick={() => router.push("/")}>
        Kembali
      </button>
    </div>
  );
}
