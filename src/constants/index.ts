export const apiPath = {
  resusApi: {
    population: "/api/v1/population/composition/perYear",
    prefectures: "/api/v1/prefectures",
  },
  resusEndpoint: "https://opendata.resas-portal.go.jp",
} as const;

export const chartTitle = [
  { title: "総人口", type: "general" },
  { title: "年少人口", type: "young" },
  { title: "生産年齢人口", type: "productive" },
  { title: "老年人口", type: "elderly" },
] as const;

export const breakPoints = {
  tablet: 768,
  smartPhone: 576,
} as const;

export const chartPrefColors = [
  { name: "北海道", color: "#FF0000" },
  { name: "青森県", color: "#00FF00" },
  { name: "岩手県", color: "#0000FF" },
  { name: "宮城県", color: "#FFFF00" },
  { name: "秋田県", color: "#00FFFF" },
  { name: "山形県", color: "#FF00FF" },
  { name: "福島県", color: "#FF6600" },
  { name: "茨城県", color: "#006600" },
  { name: "栃木県", color: "#000066" },
  { name: "群馬県", color: "#666600" },
  { name: "埼玉県", color: "#006666" },
  { name: "千葉県", color: "#660066" },
  { name: "東京都", color: "#FF9999" },
  { name: "神奈川県", color: "#99FF99" },
  { name: "新潟県", color: "#9999FF" },
  { name: "富山県", color: "#FFFF99" },
  { name: "石川県", color: "#99FFFF" },
  { name: "福井県", color: "#FF99FF" },
  { name: "山梨県", color: "#FFCC66" },
  { name: "長野県", color: "#66CC66" },
  { name: "岐阜県", color: "#6666CC" },
  { name: "静岡県", color: "#FFCC99" },
  { name: "愛知県", color: "#99CC99" },
  { name: "三重県", color: "#9999CC" },
  { name: "滋賀県", color: "#FF6666" },
  { name: "京都府", color: "#66FF66" },
  { name: "大阪府", color: "#6666FF" },
  { name: "兵庫県", color: "#FF9966" },
  { name: "奈良県", color: "#66FF99" },
  { name: "和歌山県", color: "#6699FF" },
  { name: "鳥取県", color: "#CCFF66" },
  { name: "島根県", color: "#66FFCC" },
  { name: "岡山県", color: "#6699CC" },
  { name: "広島県", color: "#CC9966" },
  { name: "山口県", color: "#99CC66" },
  { name: "徳島県", color: "#9966CC" },
  { name: "香川県", color: "#FF6F5E" },
  { name: "愛媛県", color: "#448E4D" },
  { name: "高知県", color: "#2E86AB" },
  { name: "福岡県", color: "#AA4465" },
  { name: "佐賀県", color: "#0D3B66" },
  { name: "長崎県", color: "#D9BF77" },
  { name: "熊本県", color: "#ACD8AA" },
  { name: "大分県", color: "#FFE156" },
  { name: "宮崎県", color: "#4CB944" },
  { name: "鹿児島県", color: "#577590" },
  { name: "沖縄県", color: "#D3423E" },
] as const;
