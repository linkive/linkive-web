export interface Cody {
  index: number;
  thumbNailImg: string;
  videoUrl: string;
  timeline: number; // millisecond of utc timestamp
  celabIdx: number;
  codiesIdx: number;
  createdAt: number;
  updatedAt: number;
  products: Array<Product>;
}

type Season = "봄" | "여름" | "가을" | "겨울";

export interface Product {
  index: number;
  number: string; //품번
  imgUrl: string;
  name: string;
  category: string;

  relatedProduct: boolean; //연관상품 존재
  color: string;
  season: Season;
  status: string; //soldout delete new basic

  stores: Array<Store>;
}

export interface Store {}
