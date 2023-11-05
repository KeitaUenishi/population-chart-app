import { ApiError } from "@/types";

const api = {
  get: async (url: string, header?: { [key: string]: string }) => {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
        ...header,
      },
      method: "GET",
    });
    if (!response.ok) {
      const err: ApiError = await response.json();
      throw new Error(err.message);
    }
    return await response.json();
  },
};

export default api;
