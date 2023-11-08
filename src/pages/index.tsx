import { GetServerSidePropsResult } from "next";
import DefaultErrorPage from "next/error";

import Layout from "@/components/pages/Layout";
import { Top } from "@/components/pages/Top/top";
import { apiPath } from "@/constants";
import api from "@/lib/api";
import { Prefectures } from "@/types";

type Error = {
  message: string;
  statusCode: number;
};

type Props = {
  error?: Error;
  prefectures: Prefectures;
};

export const getServerSideProps = async (): Promise<GetServerSidePropsResult<Props>> => {
  const reqPath = `${apiPath.resasEndpoint}${apiPath.resasApi.prefectures}`;
  try {
    const prefectures = await api.get(reqPath, {
      "X-API-KEY": process.env.RESAS_API_KEY ?? "",
    });
    if (!prefectures.result) {
      return {
        props: {
          error: {
            message: "データが取得できませんでした。",
            statusCode: 400,
          },
          prefectures: {
            message: "",
            result: [],
          },
        },
      };
    }
    return {
      props: { prefectures },
    };
  } catch (error) {
    throw new Error("予期せぬエラーが発生しました。");
  }
};

export default function Home(props: Props) {
  const { prefectures } = props;
  return (
    <Layout>
      {props.error ? (
        <DefaultErrorPage statusCode={props.error.statusCode} title={props.error.message} />
      ) : (
        <Top prefectures={prefectures} />
      )}
    </Layout>
  );
}
