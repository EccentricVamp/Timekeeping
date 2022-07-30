import * as colors from "twind/colors";
import { IS_BROWSER } from "fresh/runtime.ts";
import { setup, tw } from "twind";

if (IS_BROWSER) setup({ theme: { colors } });

export function container() {
  return tw`p-4 mx-auto max-w-screen-md`;
}
export function heading() {
  return tw`text-xl font-medium`;
}

export const theme = {
  colors: {
    blue: colors.blue,
    black: colors.black,
    gray: colors.gray,
    green: colors.green,
    white: colors.white,
    yellow: colors.yellow,
    transparent: "transparent",
  },
};
