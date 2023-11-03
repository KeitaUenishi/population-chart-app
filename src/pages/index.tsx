import { GetServerSidePropsResult } from "next";

import Layout from "@/components/pages/Layout";
import { Top } from "@/components/pages/Top/top";
import { apiPath } from "@/constants";
import api from "@/lib/api";
import { Prefectures } from "@/types";

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<Prefectures>> => {
  const reqPath = `${apiPath.resasEndpoint}${apiPath.resasApi.prefectures}`;
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
