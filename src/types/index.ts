export type Prefectures = {
  message: string;
  result: {
    prefCode: number;
    prefName: string;
  }[];
};

export type Population = {
  message: string;
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
