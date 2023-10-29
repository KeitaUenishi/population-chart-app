export const apiPath = {
  resusApi: {
    population: "/api/v1/population/composition/perYear",
    prefectures: "/api/v1/prefectures",
  },
  resusEndpoint: "https://opendata.resas-portal.go.jp",
};

export const chartTitle = [
  { title: "総人口", type: "general" },
  { title: "年少人口", type: "young" },
  { title: "生産年齢人口", type: "productive" },
  { title: "老年人口", type: "elderly" },
];
