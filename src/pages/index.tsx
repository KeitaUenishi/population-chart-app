import { GetServerSidePropsResult } from "next";
import { Inter } from "next/font/google";

import Layout from "@/components/pages/Layout";
import { Top } from "@/components/pages/Top/top";
import { apiPath } from "@/constants";
import api from "@/lib/api";
import { Prefectures } from "@/types";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<Prefectures>> => {
  const reqPath = `${apiPath.resusEndpoint}${apiPath.resusApi.prefectures}`;
  const prefectures = await api.get(reqPath, {
    "X-API-KEY": process.env.RESAS_API_KEY ?? "",
  });
  return {
    props: prefectures,
  };
};

export default function Home(props: Prefectures) {
  return (
    <Layout>
      <Top prefectures={props} />
    </Layout>
  );
}
