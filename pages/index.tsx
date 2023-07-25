import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

import Menu from "../components/Menu";
import Button from "../components/Button";

import { LinkIcon, TrashIcon } from "@heroicons/react/24/solid";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="container mx-auto">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Menu />

      {/* Header */}
      <div className="flex flex-col place-items-center py-44 space-y-3">
        <h1 className="text-5xl font-bold">Ayo Mulai Voting</h1>
        <h2 className="text-lg bg-zinc-100 px-3 py-1">
          Web Voting No.1 Di Indonesia
        </h2>
        <Image
          src={"/assets/banner.svg"}
          width={274}
          height={243}
          alt="Banner"
        />
        <div className="space-x-10">
          <Button
            text="Buat Vote Baru"
            onClick={() => router.push("/vote/create")}
            className="text-white"
          />
          <Button
            text="Ikutan Vote"
            type="secondary"
            onClick={() => router.push("/participant")}
          />
        </div>
      </div>
      {/* Header */}

      {/* Table */}
      <div>
        <p className="py-5 text-lg font-bold">Vote yang saya buat</p>
        <table className="table-auto w-full border border-zinc-100">
          <thead>
            <tr className="border-b border-zinc-200">
              <th className="p-5 text-left">No</th>
              <th className="p-5 text-left">Judul</th>
              <th className="p-5 text-left">Kandidat</th>
              <th className="p-5 text-left">Kode</th>
              <th className="p-5 text-left">Mulai</th>
              <th className="p-5 text-left">Selesai</th>
              <th className="p-5 text-left"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-5 text-left">1</td>
              <td className="p-5 text-left">Judul Voting</td>
              <td className="p-5 text-left">Budi vs Anton</td>
              <td className="p-5 text-left">BXAZHR</td>
              <td className="p-5 text-left">20 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">22 Oct 2022 11:00 AM</td>
              <td className="p-5 text-left">
                <div>
                  <a href="">
                    <LinkIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                  <a href="">
                    <TrashIcon className="w-8 h-8 p-2 hover:bg-zinc-100" />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* /Table */}
    </div>
  );
};

export default Home;
