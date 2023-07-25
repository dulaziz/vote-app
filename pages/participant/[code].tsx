import { useRouter } from "next/router";
import Head from "next/head";
import { useSession } from "next-auth/react";

import RestrictedPage from "../../components/page/RestrictedPage";
import Menu from "../../components/Menu";
import CandidateItem from "../../components/CandidateItem";
import Button from "../../components/Button";
import CountDown from "../../components/CountDown/CountDown";
import { showAlert } from "../../components/Alert";

export default function DetailParticipant() {
  const { data: session } = useSession();

  const router = useRouter();
  const { code } = router.query;

  if (!session) {
    return <RestrictedPage />;
  }

  return (
    <div className="container mx-auto">
      <Head>
        <title>Mulai voting</title>
      </Head>
      <Menu />
      <div>
        <h1 className="text-4xl mt-10 text-center">Judul Voting</h1>

        {/* timer */}
        <CountDown className="mt-10" />
        {/* timer */}

        {/* Candidate Items */}
        <div className="mt-10 space-y-3 mx-auto w-2/3">
          <CandidateItem />
          <CandidateItem />
          <CandidateItem />
        </div>
        {/* Candidate Items */}

        {/* Submit */}
        <div className="text-center mt-10">
          <Button
            text="Kirim Vote Saya 😊"
            onClick={() =>
              showAlert({
                title: "Yeay",
                message: "Vote berhasil",
                positiveBtnText: "Ya",
                onPositiveClick() {},
              })
            }
          />
        </div>
        {/* Submit */}
      </div>
    </div>
  );
}
