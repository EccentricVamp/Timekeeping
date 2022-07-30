import { start } from "fresh/server.ts";

import { RestoreSnapshot, setup } from "twind";
import presetTailwind from "@twind/preset-tailwind";
import presetTailwindForm from "@twind/preset-tailwind-forms";

import { database } from "infrastructure/database.ts";
import { Person } from "domain/models/person.ts";

import routes from "./fresh.gen.ts";

database.link([Person]);

const tw = setup({ presets: [presetTailwind(), presetTailwindForm()] });

await start(routes, {
  render(ctx, innerRender) {
    const restore = ctx.state.get("twind") as RestoreSnapshot | null;
    if (restore) restore();
    innerRender();
    ctx.styles.splice(0, ctx.styles.length, ...tw.target as string[])
    ctx.state.set("twind", tw.snapshot());
  }
});
