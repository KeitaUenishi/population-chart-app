import Head from "next/head";
import React from "react";

export const MetaTag = () => {
  return (
    <Head>
      <title>都道府県別人口推移</title>
      <meta content="選択された都道府県別の人口推移をグラフで表示するアプリケーションです。" name="description" />
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <link href="/favicon.ico" rel="icon" />
    </Head>
  );
};
