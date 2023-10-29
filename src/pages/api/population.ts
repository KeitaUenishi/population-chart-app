import type { NextApiRequest, NextApiResponse } from "next";

import api from "@/lib/api";
import { apiPath } from "@/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const reqPath = `${apiPath.resusEndpoint}${apiPath.resusApi.population}?prefCode=${req.query.prefCode}`;
  const data = await api.get(reqPath, {
    "X-API-KEY": process.env.RESAS_API_KEY ?? "",
  });
  res.status(200).json(data);
}
