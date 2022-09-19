import { autoDarkColor, TwindUserConfig } from "twind";
import presetTailwind from "@twind/preset-tailwind";
import presetTailwindForms from "@twind/preset-tailwind-forms";

export default {
  presets: [presetTailwind(), presetTailwindForms()],
  darkColor: autoDarkColor,
} as TwindUserConfig;
