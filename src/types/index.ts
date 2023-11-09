export type Prefectures = {
  message: string | null;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};

export type Population = {
  message: string | null;
  result: {
    boundaryYear: number;
    data: {
      data: {
        value: number;
        year: number;
      }[];
      label: string;
    }[];
  };
};

export type Dataset = {
  backgroundColor: string;
  borderColor: string;
  data: number[];
  label: string;
};

export type ApiError = {
  message: string;
};
