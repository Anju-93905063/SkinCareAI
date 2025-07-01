import { atom } from "recoil";

export type ImageResult = {
  diseaseName: string;
  symptoms: string;
  precautions: string[];
  foodSuggestions: string[];
};

export const ImageResponse = atom<ImageResult | null>({
  key: "ImageResponse",
  default: null,
});
