import { autoDarkColor } from "twind";
import presetTailwind from "@twind/preset-tailwind";
import presetTailwindForms from "@twind/preset-tailwind-forms";
import { FreshwindUserConfig } from "freshwind/shared.ts";

export default {
  presets: [presetTailwind(), presetTailwindForms()],
  darkColor: autoDarkColor,
  selfURL: import.meta.url,
} as FreshwindUserConfig;
