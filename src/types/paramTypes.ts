import type { Source } from "./responseTypes";

export type Message = {
  id: string;
  text: string;
  sender: "user" | "bot";
  success?: boolean; // To indicate if the message was sent/received successfully
  streaming?: boolean; // For streaming typing effect
  sources?: Source[];
};
