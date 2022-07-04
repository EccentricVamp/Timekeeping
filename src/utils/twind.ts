import { IS_BROWSER } from "$fresh/runtime.ts";
import { setup } from "twind";
export * from "twind";
if (IS_BROWSER) setup();
