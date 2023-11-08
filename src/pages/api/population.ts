import * as z from "zod";

import type { NextApiRequest, NextApiResponse } from "next";

import { apiPath } from "@/constants";
import api from "@/lib/api";

const querySchema = z.object({
  prefCode: z.string().refine((v) => {
    return !isNaN(Number(v));
  }),
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const validQuery = querySchema.safeParse(req.query);
  if (!validQuery.success) {
    return res.status(400).json({ message: "Invalid query" });
  }

  try {
    const reqPath = `${apiPath.resasEndpoint}${apiPath.resasApi.population}?prefCode=${validQuery.data.prefCode}`;
    const data = await api.get(reqPath, {
      "X-API-KEY": process.env.RESAS_API_KEY ?? "",
    });
    if (!data.result) {
      return res.status(400).json({ message: "APIリクエストエラー" });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ message: "予期せぬエラーが発生しました。" });
  }
}
