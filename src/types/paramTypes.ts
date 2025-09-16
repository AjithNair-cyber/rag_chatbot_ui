import type { Source } from "./responseTypes";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  streaming?: boolean; // For streaming typing effect
  sources?: Source[];
};
