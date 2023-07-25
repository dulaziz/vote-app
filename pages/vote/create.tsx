import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { useSession } from "next-auth/react";

// React date picker
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker, { registerLocale } from "react-datepicker";
import id from "date-fns/locale/id";
registerLocale("id", id);

// Components
import Menu from "../../components/Menu";
import Form from "../../components/Form";
import CandidateForm from "../../components/CandidateForm";
import Button from "../../components/Button";

import { PlusIcon } from "@heroicons/react/24/solid";
import RestrictedPage from "../../components/page/RestrictedPage";

export default function CreateVote() {
  const { data: session } = useSession();

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const submitCandidate = (candidate: Candidate) => {
    setCandidates(
      candidates.map((c) => (c.key === candidate.key ? candidate : c))
    );
  };

  //   add dynamic Form
  const addCandidateForm = () => {
    const newCandidate: Candidate = {
      name: "",
      key: candidates.length + 1,
      title: "",
    };
    setCandidates([...candidates, newCandidate]);
  };

  // Remove candidate
  const removeCandidateForm = (key: number) => {
    //List kandidat baru kecuali dengan key diatas...
    const newCandidates = candidates.filter(
      (candidate) => candidate.key !== key
    );

    //Re range atau di urutkan ulang nomer urut...
    newCandidates.forEach((candidate, index) => {
      candidate.key = index + 1;
    });
    setCandidates(newCandidates);
  };

  if (!session) {
    return <RestrictedPage />;
  }

  return (
    <div className="container mx-auto">
      <Head>
        <title>Vote Baru</title>
      </Head>

      <Menu />

      <div className="py-10">
        <Image src={"/assets/man.svg"} width={284} height={198} alt="Create" />
        <h1 className="text-4xl font-bold">Buat Vote Baru</h1>
        <h2 className="text-zinc-700 mt-3">
          Silahkan masukan data yang dibutuhkan sebelum membuat vote online
        </h2>
      </div>

      <form>
        {/* Detail Vote */}
        <div className="space-y-5">
          <h3 className="font-medium text-xl mt-10">Deatil Voting</h3>
          <div className="flex flex-col">
            <label className="text-sm mt-5">Judul</label>
            <Form
              onChange={() => {}}
              value={""}
              placeHolder={"Contoh: Voting calon gubernur"}
              className={"mt-1 w-1/2"}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm">Kapan Dimulai</label>
            <div className="inline-flex">
              <ReactDatePicker
                locale={"id"}
                showTimeSelect
                selected={startDate}
                onChange={(date) => date && setStartDate(date)}
                dateFormat={"Pp"}
                minDate={new Date()}
                className={"w-full bg-zinc-100 py-2 px-3"}
              />
              <span className="text-sm text-center p-3">Sampai</span>
              <ReactDatePicker
                locale={"id"}
                showTimeSelect
                selected={endDate}
                onChange={(date) => date && setEndDate(date)}
                dateFormat={"Pp"}
                minDate={startDate}
                className={"w-full bg-zinc-100 py-2 px-3"}
              />
            </div>
          </div>
        </div>

        {/* Kandidat */}
        <h3 className="font-medium text-xl mt-10">Kandidat</h3>
        <div className="grid gap-4 grid-cols-4 mt-5">
          {candidates.map((candidate: Candidate, index: number) => (
            <CandidateForm
              key={index}
              candidate={candidate}
              submitCandidate={submitCandidate}
              removeCandidateForm={removeCandidateForm}
            />
          ))}
          <div
            className="w-1/3 flex flex-col items-center justify-center cursor-pointer bg-zinc-100 aspect-square text-zinc-300 hover:bg-black hover:text-white"
            onClick={() => addCandidateForm()}
          >
            <PlusIcon className="w-1/3" />
          </div>
        </div>
        {/* Kandidate */}
        {/* {JSON.stringify(candidates)} */}
        <div className="text-right mt-10">
          <Button text="Buat Voting 👍" />
        </div>
      </form>
    </div>
  );
}
