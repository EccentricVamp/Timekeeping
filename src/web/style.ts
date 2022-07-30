import { IS_BROWSER } from "fresh/runtime.ts";
import { setup, tw } from "twind";

if (IS_BROWSER) setup();

export function container() {
  return tw("p-4 mx-auto max-w-screen-md");
}

export function heading() {
  return tw("text-xl font-medium");
}
