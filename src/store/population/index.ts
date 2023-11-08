import { useCallback } from "react";
import { atom, useRecoilValue, useSetRecoilState } from "recoil";

import { Population, Prefectures } from "@/types";
import api from "@/lib/api";

type PopulationState = { data: Population; id: number }[];

type PopulationGetters = {
  usePopulation: () => PopulationState;
};

type PopulationActions = {
  useFetchPopulation: () => {
    fetchPopulation: (prefCode: string) => Promise<void>;
    fetchAllPopulation: (prefectures: Prefectures) => Promise<void>;
  };
  useRemovePopulation: () => {
    removePopulation: (prefCode: string) => void;
  };
};

const populationState = atom<PopulationState>({
  key: "populationState",
  default: [],
});

const usePopulation = () => {
  return useRecoilValue(populationState);
};

export const populationGetters: PopulationGetters = {
  usePopulation,
};

const useFetchPopulation = () => {
  const setState = useSetRecoilState(populationState);

  const fetchPopulation = useCallback(
    async (prefCode: string) => {
      const data = await api.get(`/api/population/?prefCode=${prefCode}`);
      setState((prevState) => {
        const populationData = [...prevState, { data: data, id: Number(prefCode) }];
        return populationData;
      });
    },
    [setState],
  );

  const fetchAllPopulation = useCallback(
    async (prefectures: Prefectures) => {
      const data = await Promise.all(
        prefectures.result.map((pref) => {
          return api.get(`/api/population/?prefCode=${pref.prefCode}`).then((res) => {
            return { data: res, id: Number(pref.prefCode) };
          });
        }),
      );

      setState(() => {
        return data;
      });
    },
    [setState],
  );

  return { fetchPopulation, fetchAllPopulation };
};

const useRemovePopulation = () => {
  const setState = useSetRecoilState(populationState);

  const removePopulation = useCallback(
    async (prefCode: string) => {
      setState((prevState) => {
        const removePopulation = prevState.filter((item) => item.id !== Number(prefCode));
        return removePopulation;
      });
    },
    [setState],
  );

  return { removePopulation };
};

export const populationActions: PopulationActions = {
  useFetchPopulation,
  useRemovePopulation,
};
