import { autoDarkColor, defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
import presetTailwindForms from "@twind/preset-tailwind-forms";

export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind(), presetTailwindForms()],
  darkColor: autoDarkColor,
});

export const configURL = import.meta.url;
